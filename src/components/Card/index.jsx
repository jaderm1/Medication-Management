import * as React from 'react';

import styled from "styled-components"
import MedicationIMG from "../../assets/generico-otc.jpg"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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


function CardStyled(props) {
  const Card = styled.div`
  width: 20vw;
  height: 50%;
  border: 1px solid #009e3d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 1vh;
  
  

 
 `

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);


  return (

    
    <Card>
      <img src={MedicationIMG} width="150vw" alt="imagem de uma caixa de remédio" />
      <h2>{props.title}</h2>
      <p> {props.laboratory}</p>
      <Button onClick={handleOpen}>Mais informações</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2"> Nome do Remédio: {props.title} </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Laboratório: {props.laboratory}</Typography>


          <Typography id="modal-modal-description" sx={{ mt: 2 }}> Descrição: {props.description} </Typography>


          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Dosagem:  {props.dosage}</Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Quantidade: {props.quantity}</Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Preço: R${props.price}</Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>Tipo: {props.type}</Typography>


        </Box>
      </Modal>
    
      

    </Card>
  )
}
export { CardStyled }