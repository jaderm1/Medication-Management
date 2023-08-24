import styled from "styled-components"
import MedicationIMG from "../../assets/generico-otc.jpg"


function CardStyled (props) {
 const Card = styled.div`
  width: 20vw;
  height: 40vh;
  border: 1px solid #009e3d;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1vh;
  

 
 ` 
  
    return (
        <Card>
          <img src={MedicationIMG} width="150vw" alt="imagem de uma caixa de remédio" />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </Card>
    )
}
export { CardStyled }