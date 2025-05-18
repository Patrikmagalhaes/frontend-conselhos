
import BlaiseImage from '../../assets/images/blaisepascal.png'
import {Subtitle } from "../../sections/Hero/Hero.styles";
import { DivQuote } from './QuotePascal.style';

export const QuotePascal = () => {
  return (
    <>
      <DivQuote>
        <Subtitle color='#faf4e6' fontSize='3.5vw'>
          "Não me envergonho de mudar de opinião, porque não me envergonho de
          pensar." — Blaise Pascal
        </Subtitle>
        <img style={{ width: "100px" }} src={BlaiseImage} alt="Blaise Pascal " />
      </DivQuote>
    </>
  );
};
