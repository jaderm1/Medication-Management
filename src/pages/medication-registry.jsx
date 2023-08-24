import { Menu } from "../components/Menu";
import { MainStyled } from "../components/Main";
import { TextField } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';



function MedicationRegistry() {
  const [medicationName, setMedicationName] = useState("")
  const [medicationNameError, setMedicationNameError] = useState("")
  const [laboratoryName, setLaboratoryName] = useState("")
  const [laboratoryNameError, setLaboratoryNameError] = useState("")
  const [dosage, setDosage] = useState("")
  const [dosageError, setDosageError] = useState("")
  const [quantity, setQuantity] = useState("")
  const [quantityError, setQuantityError] = useState("")
  const [price, setPrice] = useState("")
  const [priceError, setPriceError] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")



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
  const handleQuantityError = (e) => {
    setQuantityError(e.target.value)
  }
  const handleDescription = (e) => {
    setDescription(e.target.value)
  }
  const handleType = (e) => {
    setType(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    alert("Medicamento cadastrado com sucesso")

    localStorage.setItem("medicationName", JSON.stringify(medicationName))
    localStorage.setItem("laboratoryName", JSON.stringify(laboratoryName))
    localStorage.setItem("dosage", JSON.stringify(dosage))
    localStorage.setItem("quantity", JSON.stringify(quantity))
    localStorage.setItem("price", JSON.stringify(price))
    localStorage.setItem("description", JSON.stringify(description))
    localStorage.setItem("type", JSON.stringify(type))


  }




  const inputFieldsRequired = [{
    label: 'Nome do Medicamento',
    name: 'medicationName',
    id: 'medicationName',
    value: medicationName,
    handle: handleMedicationName,
    error: medicationNameError
  },
  {
    label: 'Nome do Laboratório',
    name: 'laboratoryName',
    id: 'laboratoryName',
    value: laboratoryName,
    handle: handleLaboratoryName,
    error: laboratoryNameError

  }, {
    label: 'Dosagem',
    name: 'dosage',
    id: 'dosage',
    value: dosage,
    handle: handleDosage,
    error: dosageError
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
    error: priceError

  }]

  const typeMedications = [
    {
      value: 'generico',
      label: 'Generico',
    },
    {
      value: 'referencia',
      label: 'Referencia',
    },
    {
      value: 'similar',
      label: 'Similar',
    },
    {
      value: 'etico',
      label: 'Etico',
    },
    {
      value: 'outros',
      label: 'Outros',
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

          <TextField margin="normal" onChange={handleDescription} value={description} id="descrition" multiline label={'Descrição'} color="success" sx={{
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