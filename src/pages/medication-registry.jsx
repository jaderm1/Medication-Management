import { Menu } from "../components/Menu";
import { MainStyled } from "../components/Main";
import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';



function MedicationRegistry() {
  const [medicationName, setMedicationName] = useState("")
  const [laboratoryName, setLaboratoryName] = useState("")
  const [dosage, setDosage] = useState("")
  const [quantity, setQuantity] = useState("")
  const [quantityError, setQuantityError] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [medicationList, setMedicationList] = useState([]);



  useEffect(() => {
    const storedList = localStorage.getItem("List");
    if (storedList) {
      setMedicationList(JSON.parse(storedList));
    }
  }, []);



  const handleMedicationName = (e) => {
    setMedicationName(e.target.value)
  }
  const handleLaboratoryName = (e) => {
    setLaboratoryName(e.target.value)
  }
  const handleDosage = (e) => {
    setDosage(e.target.value)
  }
  const handleQuantity = (e) => {
    setQuantity(e.target.value)
    if (isNaN(e.target.value)) {
      setQuantityError("Apenas números")
    }
    else {
      setQuantityError("")
    }
  }
  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
 
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleType = (e) => {
    setType(e.target.value)
  }

  const handleSubmit = (e) => {

    const inputs = {}

    inputs.medicationName = medicationName
    inputs.laboratoryName = laboratoryName
    inputs.dosage = dosage
    inputs.quantity = quantity
    inputs.price = price
    inputs.description = description
    inputs.type = type
    inputs.id = medicationList.length + 1


    setMedicationList([...medicationList, inputs]);


    localStorage.setItem("List", JSON.stringify([...medicationList, inputs]));

    
    

    alert("Medicamento cadastrado com sucesso")

    e.preventDefault()

    setMedicationName("")
    setLaboratoryName("")
    setDosage("")
    setQuantity("")
    setPrice("")
    setDescription("")
    setType("")
  


   


  }




  const inputFieldsRequired = [{
    label: 'Nome do Medicamento',
    name: 'medicationName',
    id: 'medicationName',
    value: medicationName,
    handle: handleMedicationName,
  },
  {
    label: 'Nome do Laboratório',
    name: 'laboratoryName',
    id: 'laboratoryName',
    value: laboratoryName,
    handle: handleLaboratoryName,

  }, {
    label: 'Dosagem',
    name: 'dosage',
    id: 'dosage',
    value: dosage,
    handle: handleDosage,
  }, {
    label: 'Quantidade',
    name: 'quantity',
    id: 'quantity',
    value: quantity,
    handle: handleQuantity,
    error: quantityError

  }, {
    label: 'Preço',
    name: 'price',
    id: 'price',
    value: price,
    handle: handlePrice,

  }]

  const typeMedications = [
    {
      value: 'controlado',
      label: 'Medicamento Controlado',
    },
    {
      value: 'comum',
      label: 'Medicamento Comum',
    },
    
  ]



  return (
    <div>
      <Menu />
      <MainStyled>
        <form
          onSubmit={handleSubmit}>
          {
            inputFieldsRequired.map(({ label, name, id, value, handle, error }) => {
              return (
                <TextField margin="normal" onChange={handle} value={value} error={Boolean(error)} helperText={error} key={name} required id={id} label={label} name={name} autoFocus color='success'
                  sx={{
                    margin: '1rem'
                  }} />)
            })}

          <TextField
            id="outlined-select-currency"
            select
            label="Tipo de medicamento"
            helperText="Selecione o tipo de medicamento"
            defaultValue={""}
            onChange={handleType}
            color="success"
            sx={{
              margin: '1rem',
            }}

          >
            {typeMedications.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}

          </TextField>

          <TextField margin="normal" onChange={handleDescription} value={description} id="description" multiline label={'Descrição'} color="success" sx={{
            margin: '1rem',
            width: '90%'

          }} ></TextField>




          <Button variant="outlined" color='success' type="submit" sx={{
            margin: '1rem',

          }}>Cadastrar</Button>

        </form>


      </MainStyled>
    </div>
  )
}
export { MedicationRegistry }