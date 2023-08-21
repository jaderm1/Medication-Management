import { MainStyled } from "../components/Main";
import { Menu } from "../components/Menu";
import { TextField } from "@mui/material";
import { useState } from "react";



function PharmacyRegistry() {


  const[cep, setCep] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
    
  
  



  function handleCep(event) {
    setCep(event.target.value)
    console.log(cep)
  }



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


  

  const inputFieldsRequired = [{
 
    label: 'Razão social',
    name: 'company-name',
    id: 'company-name',

  },
  {
    label: 'Cnpj',
    name: 'cnpj',
    id: 'cnpj',

  }, {
    label: 'Nome Fantasia',
    name: 'fantasy-name',
    id: 'fantasy-name',
  },
  {
    label: 'Email',
    name: 'email',
    id: 'email',
    value: email,
    handle: handleEmail,
    error: emailError,
  },
  {
    label: 'Celular',
    name: 'phone',
    id: 'phone',


  },
  {
    label: 'Cep',
    name: 'cep',
    id: 'cep',
    value: cep,
    handle: handleCep,

  },
  {
    label: 'Rua',
    name: 'street',
    id: 'street',
  },
  {
    label: 'Número',
    name: 'number',
    id: 'number',
  }, {
    label: 'Bairro',
    name: 'neighborhood',
    id: 'neighborhood',
    
  }, {
    label: 'Cidade',
    name: 'city',
    id: 'city',
  }, {
    label: 'Estado',
    name: 'state',
    id: 'state',

  }, {
    label: 'Latitude '
    , name: 'latitude'
    , id: 'latitude'
  }, {
    label: 'Longitude'
    , name: 'longitude'
    , id: 'longitude'
  }


  ]


  return (
    <>
      <Menu />

      <MainStyled>
        {
          inputFieldsRequired.map(({ label, name, id,value,handle,error}) => {
            return (
              <TextField margin="normal" onChange={handle} value={value} error={Boolean(error)} helperText={error} key={name} required id={id} label={label} name={name} autoFocus variant="outlined" color='success'
                sx={{
                  margin: '1rem'
                }} />)
          })}

        <TextField margin="normal" id="telephone" label="Telefone" name="telephone" autoFocus variant="outlined" color='success' sx={{
          margin: '1rem'
        }} />
        <TextField margin="normal" id="complement" label="Complemento" name="complement" autoFocus variant="outlined" color='success' sx={{
          margin: '1rem'
        }} />
        
    

      </MainStyled>
    </>
  );
}
export { PharmacyRegistry };