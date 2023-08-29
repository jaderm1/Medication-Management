import { Menu } from "../components/Menu";
import { MainStyled } from "../components/Main";
import { CardStyled } from "../components/Card";





function MedicationList() {
  const medicationList = JSON.parse(localStorage.getItem("List"))||[]

  return (
    <>

      <Menu />
      <MainStyled>

      {medicationList.map((medicationList) => {
        return (
          <CardStyled
          title={medicationList.medicationName}
          laboratory={medicationList.laboratoryName}
          description={medicationList.description}
          dosage={medicationList.dosage}
          quantity={medicationList.quantity}
          price={medicationList.price}
          type={medicationList.type}
          >
          </CardStyled>
        )
      })}
         
        
     
        
          



       


      </MainStyled>
    </>
  )

}

export { MedicationList };