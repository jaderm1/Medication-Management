import React, { useState } from 'react';
import { MainStyled } from "../components/Main";
import { Menu } from "../components/Menu";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #009e3d',
  boxShadow: 24,
  p: 4,
};

function Map() {
  const pharmacyLocation = JSON.parse(localStorage.getItem("pharmacyList")) || [];
  const [open, setOpen] = useState(false);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Menu />
      <MainStyled>
        <MapContainer center={[-14.2400732, -53.1805017]} zoom={4} scrollWheelZoom={true} style={{ width: '90%', height: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pharmacyLocation.map((pharmacy, index) => (
            <Marker key={index} position={[pharmacy.latitude, pharmacy.longitude]}>
              <Popup>
                <Button onClick={() => {
                  setSelectedPharmacy(pharmacy);
                  handleOpen();
                }}>Mais informações</Button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </MainStyled>
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6">
      Detalhes da Farmácia
    </Typography>
    {selectedPharmacy ? (
      <>
        <Typography id="modal-modal-description">
          Nome da Farmácia: {selectedPharmacy.companyName}
        </Typography>
        <Typography id="modal-modal-description">
          Nome Fantasia: {selectedPharmacy.fantasyName}
        </Typography>

        <Typography id="modal-modal-description">
          {selectedPharmacy.phone ? `Numero de celular: ${selectedPharmacy.phone}` : ''}
        </Typography>

        <Typography id="modal-modal-description">
          {selectedPharmacy.phoneNumber
            ? `Telefone: ${selectedPharmacy.phoneNumber}`
            : ''}
        </Typography>
        <Typography id="modal-modal-description">
          {selectedPharmacy.email ? `Email: ${selectedPharmacy.email}` : ''}
        </Typography>
        <Typography id="modal-modal-description">
          {selectedPharmacy.address ? `Endereço: ${selectedPharmacy.address}` : ''}
        </Typography>
        <Typography id="modal-modal-description">
          {selectedPharmacy.city ? `Cidade: ${selectedPharmacy.city}` : ''}
        </Typography>
        <Typography id="modal-modal-description">
          {selectedPharmacy.state ? `Estado: ${selectedPharmacy.state}` : ''}
        </Typography>
        <Typography id="modal-modal-description">
          {selectedPharmacy.cep ? `CEP: ${selectedPharmacy.cep}` : ''}
        </Typography>
       
        <Typography id="modal-modal-description">
          {selectedPharmacy.complement ? `Complemento: ${selectedPharmacy.complement}` : ''}
        </Typography>

        <Typography id="modal-modal-description">
          {selectedPharmacy.cnpj ? `CNPJ: ${selectedPharmacy.cnpj}` : ''}
        </Typography>

        <Typography id="modal-modal-description">
          {selectedPharmacy.latitude ? `Latitude: ${selectedPharmacy.latitude}` : ''}
        </Typography>

        <Typography id="modal-modal-description">
          {selectedPharmacy.longitude ? `Longitude: ${selectedPharmacy.longitude}` : ''}
        </Typography>

        
          
    
      </>
    ) : (
      <Typography id="modal-modal-description">
        Carregando informações...
      </Typography>
    )}
  </Box>
</Modal>
    </>
  );
}

export { Map };