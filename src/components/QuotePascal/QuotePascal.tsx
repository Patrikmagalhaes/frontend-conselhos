import { DivQuote, PQuote } from "./QuotePascal.style";
import BlaiseImage from '../../assets/images/blaisepascal.png'

export const QuotePascal = () => {
  return (
    <>
      <DivQuote>
        <PQuote>
          "Não me envergonho de mudar de opinião, porque não me envergonho de
          pensar." — Blaise Pascal
        </PQuote>
        <img style={{ width: "100px" }} src={BlaiseImage} alt="Blaise Pascal " />
      </DivQuote>
    </>
  );
};
