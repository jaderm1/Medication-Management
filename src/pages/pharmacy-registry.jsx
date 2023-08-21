import { MainStyled } from "../components/Main";
import { Menu } from "../components/Menu";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";



function PharmacyRegistry() {


  const[cep, setCep] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [zipCodeError, setZipCodeError] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [fantasyName, setFantasyName] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [cnpj, setCnpj] = useState("")
  const [phone, setPhone] = useState("")
  const [number, setNumber] = useState("")
  const [complement, setComplement] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  
  
  
  localStorage.setItem("cep",cep)
  localStorage.setItem("email",email)
  localStorage.setItem("neighborhood",neighborhood)
  localStorage.setItem("street",street)
  localStorage.setItem("city",city)
  localStorage.setItem("state",state)
  localStorage.setItem("email",email)
  localStorage.setItem("fantasyName",fantasyName)
  localStorage.setItem("companyName",companyName)
  localStorage.setItem("cnpj",cnpj)
  localStorage.setItem("phone",phone)
  localStorage.setItem("number",number)
  localStorage.setItem("complement",complement)
  localStorage.setItem("latitude",latitude)
  localStorage.setItem("longitude",longitude)
  localStorage.setItem("phoneNumber",phoneNumber)
  
  
  const handleFantasyName = (e) => {
    setFantasyName(e.target.value)
  }
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value)
  }
  const handleCnpj = (e) => {
    setCnpj(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
  }
  const handleNumber = (e) => {
    setNumber(e.target.value)
  }
  const handleComplement = (e) => {
    setComplement(e.target.value)
  }

  const handleLatitude = (e) => {
    setLatitude(e.target.value)
  }
  const handleLongitude = (e) => {
    setLongitude(e.target.value)
  }
 const handleStreet = (e) => {
    setStreet(e.target.value)
  }
  const handleCity = (e) => {
    setCity(e.target.value)
  }
   const handleState = (e) => {
    setState(e.target.value)
  }
  const handleNeighborhood = (e) => {
    setNeighborhood(e.target.value)
  }
 
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }





    
  
  



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
    value: companyName,
    handle: handleCompanyName,

  },
  {
    label: 'Cnpj',
    name: 'cnpj',
    id: 'cnpj',
    value: cnpj,
    handle: handleCnpj,

  }, {
    label: 'Nome Fantasia',
    name: 'fantasy-name',
    id: 'fantasy-name',
    value: fantasyName,
    handle: handleFantasyName,

    
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
    value: phone,
    handle: handlePhone,

  
    
    

  },
  {
    label: 'Cep',
    name: 'zipCode',
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
    handle: setStreet,

    
  },
  {
    label: 'Número',
    name: 'number',
    id: 'number',
    value: number,
    handle: handleNumber,
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
    , value: latitude
    , handle: handleLatitude
  }, {
    label: 'Longitude'
    , name: 'longitude'
    , id: 'longitude'
    , value: longitude
    , handle: handleLongitude
    
  }


  ]

  const handleSubmit = (e) => {
    e.preventDefault()

    alert("Cadastro efetuado com sucesso")
  }

  return (
    <>
      <Menu />

      <MainStyled>
        <form
        onSubmit={handleSubmit}>
        {
          inputFieldsRequired.map(({ label, name, id,value,handle,error}) => {
            return (
              <TextField margin="normal" onChange={handle} value={value} error={Boolean(error)} helperText={error} key={name} required id={id} label={label} name={name} autoFocus variant="outlined" color='success'
                sx={{
                  margin: '1rem'
                }} />)
          })}

        <TextField margin="normal" onChange={handlePhoneNumber} value={phoneNumber} key='phoneNumber' id="telephone" label="Telefone" name="telephone" autoFocus variant="outlined" color='success' sx={{
          margin: '1rem'
        }} />
        <TextField margin="normal" onChange={handleComplement} value={complement} key='complement' id="complement" label="Complemento" name="complement" autoFocus variant="outlined" color='success' sx={{
          margin: '1rem'
        }}
        
        />


        <Button  variant="outlined" color='success' type="submit" sx={{
          margin: '1rem',
          
        }}>Cadastrar</Button>

        </form>
    

      </MainStyled>
    </>
  );
}
export { PharmacyRegistry };