import styled from "styled-components";

export const ContainerMobile = styled.div`
 width:100%;
 padding-left:10px;
 padding-right:10px;
`;
export const Cta = styled.p`
 width:100%;
 padding-bottom:10%;
 padding-top:10%;
 color: #ff3131;
 font-size:3.5vw;
 text-align: center;

   @media(min-width: 1024px){
  font-size:1em;
  padding-bottom:5%;
  padding-top:5%;
  }
`;


export const DivQuote = styled.div`
display: flex;
align-items:center;
margin-top: 10%;
margin-bottom: 10%;

@media(min-width: 1024px){
font-size:2em;

  }

`
export const PQuote = styled.p`
color: #ff3131;
`
export const ImageBlaise = styled.img`
height: 200px;
   @media(min-width: 1024px){
  height: 400px;

  }
`
export const SectionIntroduction = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items:center;
 max-width:1000px;
 margin: 0 auto;
`


export const DivWillian = styled.div`
display: flex;
justify-content: center;

`
export const ImageWillian = styled.img`
height: 200px;

`