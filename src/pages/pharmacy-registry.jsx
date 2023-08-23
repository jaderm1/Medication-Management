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

  const [fantasyNameError, setFantasyNameError] = useState("")
  const [companyNameError, setCompanyNameError] = useState("")
  const [cnpjError, setCnpjError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [numberError, setNumberError] = useState("")
  const [latitudeError, setLatitudeError] = useState("")
  const [longitudeError, setLongitudeError] = useState("")
  const [neighborhoodError, setNeighborhoodError] = useState("")
  const [streetError, setStreetError] = useState("")
  const [cityError, setCityError] = useState("")
  const [stateError, setStateError] = useState("")
  

  
  
  
  const handleFantasyName = (e) => {
    setFantasyName(e.target.value)
    }
  
   
  
  const handleCompanyName = (e) => {
    setCompanyName(e.target.value)
  
  }
  const handleCnpj = (e) => {
    setCnpj(e.target.value)
    if (!validateCnpj(e.target.value)) {
      setCnpjError("Cnpj inválido")
    }
    else{
      setCnpjError("")
    }
  }
  const handlePhone = (e) => {
    setPhone(e.target.value)
    if (!validatePhone(e.target.value)) {
      setPhoneError("Telefone inválido")
      
    }
    else{
      setPhoneError("")
    }
  }
  const handleNumber = (e) => {
    setNumber(e.target.value)
    if (isNaN(e.target.value)){
      setNumberError("O número deve ser um número")
    }
    else{
      setNumberError("")
    }
  }
  const handleComplement = (e) => {
    setComplement(e.target.value)
  }

  const handleLatitude = (e) => {
    setLatitude(e.target.value)
    if (e.target.value > 90 || e.target.value < -90) {
      setLatitudeError("A latitude deve ser entre -90 e 90")
    }
    else {
      setLatitudeError("")
    }
  }
  const handleLongitude = (e) => {
    setLongitude(e.target.value)
    if (e.target.value > 180 || e.target.value < -180) {
      setLongitudeError("A longitude deve ser entre -180 e 180")
    }
    else {
      setLongitudeError("")
    }
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
          setNeighborhood(data.bairro)
          setStreet(data.logradouro)
          setCity(data.localidade)
          setState(data.uf)

        })
    }
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

  const validateZipCode = (cep)=>{ 
    const zipCodeRegex = /^[0-9]{8}$/;
   
    return zipCodeRegex.test(cep)
 }
  const validateCnpj = (cnpj)=>{
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/

    return cnpjRegex.test(cnpj)
  } 

  const validatePhone = (phone) => {
    const phoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/


    return phoneRegex.test(phone)
  }


  

  const inputFieldsRequired = [{
 
    label: 'Razão social',
    name: 'company-name',
    id: 'company-name',
    value: companyName,
    handle: handleCompanyName,
    error: companyNameError,

  },
  {
    label: 'Cnpj',
    name: 'cnpj',
    id: 'cnpj',
    value: cnpj,
    handle: handleCnpj,
    error: cnpjError,

  }, {
    label: 'Nome Fantasia',
    name: 'fantasy-name',
    id: 'fantasy-name',
    value: fantasyName,
    handle: handleFantasyName,
    error: fantasyNameError,


    
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
    error: phoneError,

  
    
    

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
    handle: handleStreet,
    error: streetError,
    
  },
  {
    label: 'Número',
    name: 'number',
    id: 'number',
    value: number,
    handle: handleNumber,
    error: numberError,
  }, {
    label: 'Bairro',
    name: 'neighborhood',
    id: 'neighborhood',
    value: neighborhood,
    handle: handleNeighborhood,
    error: neighborhoodError,

    
  }, {
    label: 'Cidade',
    name: 'city',
    id: 'city',
    value: city,
    handle: handleCity,
    error: cityError,
  }, {
    label: 'Estado',
    name: 'state',
    id: 'state',
    value: state,
    handle: handleState,
    error: stateError,

  }, {
    label: 'Latitude '
    , name: 'latitude'
    , id: 'latitude'
    , value: latitude
    , handle: handleLatitude
    , error: latitudeError
  }, {
    label: 'Longitude'
    , name: 'longitude'
    , id: 'longitude'
    , value: longitude
    , handle: handleLongitude
    , error: longitudeError
    
  }


  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    
      alert("Cadastro realizado com sucesso!")


      
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
              <TextField margin="normal" onChange={handle} required value={value} error={Boolean(error)} helperText={error} key={name}  id={id} label={label} name={name} autoFocus variant="outlined" color='success'
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