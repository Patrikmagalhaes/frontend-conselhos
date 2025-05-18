import { Button } from "../../components/Button/Button";
import BlaiseImage from '../../assets/images/blaisepascal.png'
import { QuoteSlider } from "../../components/QuoteSlider/QuoteSlider";
import { ContainerMobile, Cta, DivQuote, DivWillian, ImageBlaise, ImageWillian, SectionIntroduction } from "./Introduction.Style";
import William from '../../assets/willian.gif'
export const Introduction = () => {
  return (
    <ContainerMobile>
      <SectionIntroduction>
        <QuoteSlider />

        <DivQuote>
          <p >
            "Não me envergonho de mudar de opinião, porque não me envergonho de
            pensar."<br />
            — Blaise Pascal
          </p>
          <ImageBlaise src={BlaiseImage} alt="Blaise Pascal " />
        </DivQuote>
        <Cta>A verdade é que viver dá trabalho.<br />
          Pensar, então, nem se fala.<br />
          Mas perguntar é o primeiro passo<br />
          mesmo que a resposta venha do além...
        </Cta>
        <Button >Fazer Pergunta</Button>
      </SectionIntroduction>
      <DivWillian>
        <ImageWillian src={William} />
      </DivWillian>

    </ContainerMobile>
  );
};
