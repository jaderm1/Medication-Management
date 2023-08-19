import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import styled from 'styled-components';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import Logo from "../../assets/logo.png"





function Menu() {
  const [value, setValue] = React.useState(0);

  
  const pages = [{
    path: '/map',
    name: 'Mapa',
    icon: <MapOutlinedIcon color='success' />
  }
  , 
  {path: '/list',
  name: 'Lista de Medicamentos',
  icon: <LocalPharmacyOutlinedIcon color='success'  />
  },
  {path: '/register',
  name: 'Cadastro de Medicamentos',
  icon: <MedicationOutlinedIcon color='success' />
  },
  {path: '/registerpharmacy',
  name: 'Cadastro de Nova Farmácia',
  icon: <AddLocationAltOutlinedIcon color='success' />
}]

  return (
    <>
      <BottomNavigation 

        sx={{ width:'15vw', height:'100vh',display:'flex',
      flexDirection:'column', justifyContent:'space-around',
    justifyItems:'center', alignItems:'center' }}
      
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          
        }}
        
      >

     {pages.map(({path, name, icon}) => {return(
              <BottomNavigationAction href={path} key={path} label={name} icon={icon} color='success' /> 

     )})}
     
        
      </BottomNavigation> 
      
    </>
  );
}

export { Menu };