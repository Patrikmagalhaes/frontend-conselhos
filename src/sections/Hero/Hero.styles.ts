import styled from "styled-components"

export const Banner = styled.div`
  width:100%;
  height: 95vh;
  display: flex;
  position: relative;
`
export const Video = styled.video`
  Width: 100%;
  object-fit: cover;
  object-position: 30% ; 
  transform-origin: center;
  z-index: -1; 
`
export const Content = styled.div`
  position: absolute;
  z-index: 1;
  width:100%;
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  height:100%;
`
export const TitleHero = styled.h1`
  text-align: center;
  font-size: 5vw;
  padding-bottom: 10%;
  padding-top: 5%;
  position: absolute;
  left: 0;
  right: 0;
  top: 2vh;

  @media(min-width: 1024px ){
    font-size: 2vw;
    padding-top: 0%;
  }
`
export const SubtitleHero = styled.h2`
  font-size: 8vw;

    @media(min-width: 1024px ){
    font-size: 4vw;
  }
`
export const TextHero = styled.p`
  font-size: 3vh;
  margin-top: 10%;
  letter-spacing: 1px;
  line-height: 1.2em;
  @media(min-width: 724px){
  margin-top: 5%;
  font-size: 3vw;

    @media(min-width: 1024px ){
    font-size: 2vw;
    margin-top: 2%;
  }
  }
`
export const ContainerTeias = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const FixedImage = styled.img`
  Width: 35%;
     @media(min-width: 1024px ){
     Width: 20%;
  }
`
export const ContainerBustos = styled.div`
  background: linear-gradient(to top, #faf4e6, transparent);
  display:flex;
  justify-content:center;

`
export const ImageBustos = styled.img`

  
`
export const Gradient = styled.div`
  background: linear-gradient(to bottom, #faf4e6, transparent);
  height:50px;
`
export const DivTextHero = styled.div`
  position: absolute;
  top: 15vh;
  width:100%;
  padding-left:5%;
`

