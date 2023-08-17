import styled from "styled-components";


function FotterStyled(){
  const Fotter = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: #9bf398;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px 8px 0 0 ;
  opacity: 0.5;

  `
  const Link = styled.a`
  text-decoration: none;
  ;
  `


    return(
        <>
            <Fotter><Link href="https://www.linkedin.com/in/jaderm1/"> © Jader Nascimento</Link></Fotter>
        </>
    )
}

export {FotterStyled};