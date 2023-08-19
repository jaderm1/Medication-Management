import { MainStyled } from "../components/Main";
import { Menu } from "../components/Menu";
import { TextField } from "@mui/material";
import { useState } from "react";



function PharmacyRegistry() {
const inputFieldsRequired = [{
    label: 'Razão social',
    name: 'company-name',
    id: 'company-name',
    
},
{
    label: 'Cnpj',
    name: 'cnpj',
    id: 'cnpj',

},{
    label: 'Nome Fantasia',
    name: 'fantasy-name',
    id: 'fantasy-name',
},
{
  label: 'Email',
    name: 'email',
    id: 'email',
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
},{
  label: 'Bairro',
    name: 'neighborhood',
    id: 'neighborhood',
},{
  label: 'Cidade',
    name: 'city',
    id: 'city',
},{
  label: 'Estado',
    name: 'state',
    id: 'state',

},{
  label:'Latitude '
  ,name:'latitude'
  ,id:'latitude'
},{
  label:'Longitude'
  ,name:'longitude'
  ,id:'longitude'
}


]


  return (
<>
    <Menu/>

    <MainStyled>
      {
          inputFieldsRequired.map(({label, name, id ,props}) => {
              return (
                  <TextField margin="normal" required id={id} label={label} name={name} autoFocus variant="outlined" color='success' sx={{
                    margin: '1rem'
                  }} />)
      })}

      <TextField margin="normal"  id="telephone" label="Telefone" name="telephone" autoFocus variant="outlined" color='success' sx={{
                    margin: '1rem'
                  }} />
      <TextField margin="normal"  id="complement" label="Complemento" name="complement" autoFocus variant="outlined" color='success' sx={{
                    margin: '1rem'
                  }} />
   
</MainStyled>
  </>
  );
}
export { PharmacyRegistry};