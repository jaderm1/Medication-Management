import { Menu } from "../components/Menu";
import { MainStyled } from "../components/Main";
import {CardStyled} from "../components/Card";



function MedicationList(){
    return(
        <>

            <Menu/>
              <MainStyled>
                <CardStyled title="remedio" description="lorem"/>
                <CardStyled title="remedio2" description="lorem"/>
                <CardStyled title="remedio3" description="lorem"/>
                <CardStyled title="remedio4" description="lorem"/>
                <CardStyled title="remedio5" description="lorem"/>
                <CardStyled title="remedio6" description="lorem"/>
                

                
            </MainStyled>
        </>
    )

}

export {MedicationList};