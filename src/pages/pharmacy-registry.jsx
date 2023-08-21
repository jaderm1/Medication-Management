import { MainStyled } from "../components/Main";
import { Menu } from "../components/Menu";
import { TextField } from "@mui/material";
import { useState } from "react";



function PharmacyRegistry() {


  const[cep, setCep] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [zipCodeError, setZipCodeError] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")

    
  
  



  const handleZipCode = (e) => {
    setCep(e.target.value)
   if (!validateZipCode(e.target.value)) {
      setZipCodeError("O formato do cep de conter 8 numeros")    }
    else {
      setZipCodeError("")
      const url = `https://viacep.com.br/ws/${e.target.value}/json/`
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setNeighborhood(data.bairro)
          setStreet(data.logradouro)
          setCity(data.localidade)
          setState(data.uf)

        })
    }
  }

  const validateZipCode = (cep)=>{ 
   const zipCodeRegex = /^[0-9]{8}$/;
  
   return zipCodeRegex.test(cep)
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
    name: 'ziopCode',
    id: 'zipCode',
    value: cep,
    handle: handleZipCode,
    error: zipCodeError,

  },
  {
    label: 'Rua',
    name: 'street',
    id: 'street',
    value: street,
    
  },
  {
    label: 'Número',
    name: 'number',
    id: 'number',
  }, {
    label: 'Bairro',
    name: 'neighborhood',
    id: 'neighborhood',
    value: neighborhood,
    
  }, {
    label: 'Cidade',
    name: 'city',
    id: 'city',
    value: city,
  }, {
    label: 'Estado',
    name: 'state',
    id: 'state',
    value: state,

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