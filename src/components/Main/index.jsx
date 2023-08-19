import styled from "styled-components";

const Main = styled.main`
position: absolute;
border: 1px solid #009e3d;
width: 75vw;
height: 90vh;
top: 50%;
right: 50%;
left: auto;
transform: translate(60%, -50%);


`



const MainStyled = ({children}) => {
  return (
    <Main>
      {children}
    </Main>
  )
}
export  {MainStyled};
