import { useState, useEffect } from "react"
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { Button, Typography, } from '@mui/material';
import Logo from "../assets/logo.png"
import {useNavigate } from "react-router-dom";

const Form = styled.form`width: 50%;
height: 70vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
padding: 20px;
font-family: 'Roboto', sans-serif;
font-weight: 300;
color: #009e3d;
box-shadow: 0 0 10px rgba(0,0,0,0.5);
border-radius: 5px;
margin: 20px;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);`




function CreateAccount() {
  
  
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [newUser, setNewUser] = useState([])

  useEffect(() => {
    const storedUserList = localStorage.getItem("userList");
    if (storedUserList) {
      setNewUser(JSON.parse(storedUserList));
    }
  }, []);

  const navigate = useNavigate();

  



  const handleEmail = (e) => {
    setEmail(e.target.value)
    if (!validateEmail(e.target.value)) {
      setEmailError("Email inválido")
    }
    else {
      setEmailError("")
    }
  }
   const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return emailRegex.test(email)
  }
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i

    return passwordRegex.test(password)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
    if (!validatePassword(e.target.value)) {
      setPasswordError("Sua senha deve conter no mínimo 8 caracteres, uma letra e um número")
    }
    else {
      setPasswordError("")
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const input ={}

    input.email = email
    input.password = password
    input.name = name

    const newUserList = [...newUser, input]
    setNewUser(newUserList)
    localStorage.setItem("userList", JSON.stringify(newUserList))
    alert("Cadastro efetuado com sucesso")

    navigate("/")


    
    
  }


  const handleName = (e) => {
    setName(e.target.value)
    if (!validateName(e.target.value)) {
      setNameError("Nome inválido")
    }
    else {
      setNameError("")
    }
  }
    const validateName = (name) => {
    const nameRegex = /^[a-zA-ZÀ-ú ]{2,30}$/
    
    return nameRegex.test(name)
  }


  

  return (


    <>


      <Form className="container"
      onSubmit={handleSubmit}>
        <div className="logo">
          <img src={Logo} alt="logo farmácia" width="30px" />
        </div>


        <Typography component="h1" variant="h5">
          Crie sua conta
        </Typography>


        <TextField 
         margin="normal"
         required
         fullWidth
         id="name"
         label="Nome"
         name="name"
         autoComplete="name"
         autoFocus
         variant="outlined" color='success'
         value={name}
          onChange={handleName}
          error={Boolean(nameError)}
          helperText={nameError}

         />         


        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          variant="outlined" color='success'
          value={email}
          onChange={handleEmail}
          error={Boolean(emailError)}
          helperText={emailError}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          variant="outlined" color='success'
          value={password}
          onChange={handlePassword}
          error={Boolean(passwordError)}
          helperText={passwordError}
        />

        <Button variant="outlined" color='success' type="submit">Criar conta</Button>
      </Form>



    </>
  );
}
export { CreateAccount }