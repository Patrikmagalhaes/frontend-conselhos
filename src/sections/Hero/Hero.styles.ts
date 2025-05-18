import styled from "styled-components"
import type { SubtitleProps } from "./types"
 

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
export const H1 = styled.h1`
  text-align: center;
  font-size: 5vw;
  padding-bottom: 10%;
  padding-top: 5%;
  position: absolute;
  left: 0;
  right: 0;
  top: 2vh;
`
export const H2 = styled.h2`
  font-size: 8vw;
`
export const Subtitle = styled.p<SubtitleProps>`
  font-size: ${({fontSize})=> fontSize || "5vw"};
  padding-top: ${({paddingTop})=> paddingTop || "0"};
  color: ${({color})=> color || "#faf4e6"};
  
`
export const ContainerTeias = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
export const FixedImage = styled.img`
  Width: 35%;
`
export const ContainerBustos = styled.div`
  background: linear-gradient(to top, #faf4e6, transparent);
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

