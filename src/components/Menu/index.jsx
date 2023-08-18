import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import styled from 'styled-components';
import AddLocationAltOutlinedIcon from '@mui/icons-material/AddLocationAltOutlined';
import MedicationOutlinedIcon from '@mui/icons-material/MedicationOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import Link from '@mui/material/Link';




function Menu() {
  const [value, setValue] = React.useState(0);
  const Container = styled.div`
  display: flex;
  justify-content: center;
  ;
  `
  const path = '/'

  return (
    <Container>
      <BottomNavigation 

        sx={{ width: '100%',height:'100vh', position: 'fixed',display:'flex',
      flexDirection:'column', justifyContent:'space-around', }}
      
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          
        }}
      >
       
        <BottomNavigationAction label="Mapa"  icon={<MapOutlinedIcon color='success' />} />
        <BottomNavigationAction label="Lista de Medicamentos" icon={<LocalPharmacyOutlinedIcon  />} />
        <BottomNavigationAction label="Cadastro de Medicamentos" icon={<MedicationOutlinedIcon color='success' />} />
        <BottomNavigationAction label="Cadastro de Nova Farmácia" icon={<AddLocationAltOutlinedIcon color='success' />} />
      </BottomNavigation>
    </Container>
  );
}

export { Menu };