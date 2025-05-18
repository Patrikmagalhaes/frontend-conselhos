import { Button } from "../../components/Button/Button";
import { QuotePascal } from "../../components/QuotePascal/QuotePascal";
import { QuoteSlider } from "../../components/QuoteSlider/QuoteSlider";
import { Subtitle } from "../Hero/Hero.styles";
import { ContainerMobile } from "./Introduction.Style";
import William from '../../assets/willian.gif'
export const Introduction = () => {
  return (
    <ContainerMobile>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <QuoteSlider />
        <QuotePascal />
        <Subtitle paddingTop="10%" color="#ff3131" fontSize="3.5vw">A verdade é que viver dá trabalho.
          Pensar, então, nem se fala.
          Mas perguntar é o primeiro passo
          mesmo que a resposta venha do além...
        </Subtitle>
        <Button style={{ marginTop: '10%' }}>Fazer Pergunta</Button>
      </div>
    
        <img src={William} />
     
    </ContainerMobile>

  );
};
