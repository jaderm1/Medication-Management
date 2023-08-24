import { Menu } from "../components/Menu";
import { MainStyled } from "../components/Main";
import { CardStyled } from "../components/Card";





function MedicationList() {
  const newMedication = {
    name: JSON.parse(localStorage.getItem('medicationName')),
    laboratory: JSON.parse(localStorage.getItem('laboratoryName')),
    dosage: JSON.parse(localStorage.getItem('dosage')),
    quantity: JSON.parse(localStorage.getItem('quantity')),
    price: JSON.parse(localStorage.getItem('price')),
    type: JSON.parse(localStorage.getItem('type')),
    description: JSON.parse(localStorage.getItem('description'))


  }

  return (
    <>

      <Menu />
      <MainStyled>

        <CardStyled
          title={newMedication.name}

          laboratory={newMedication.laboratory}
          description={newMedication.description}
          dosage={newMedication.dosage}
          quantity={newMedication.quantity}
          price={newMedication.price}
          type={newMedication.type}

        >
          



        </CardStyled>
       


      </MainStyled>
    </>
  )

}

export { MedicationList };