import { Button } from "../../components/Button/Button";
import { QuotePascal } from "../../components/QuotePascal/QuotePascal";
import { QuoteSlider } from "../../components/QuoteSlider/QuoteSlider";
import { ContainerMobile, Cta } from "./Introduction.Style";
import William from '../../assets/willian.gif'
export const Introduction = () => {
  return (
    <ContainerMobile>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <QuoteSlider />
        <QuotePascal />
        <Cta>A verdade é que viver dá trabalho.<br />
          Pensar, então, nem se fala.<br />
          Mas perguntar é o primeiro passo<br />
          mesmo que a resposta venha do além...
        </Cta>
        <Button style={{ marginBottom: '20%', marginTop: '10%' }}>Fazer Pergunta</Button>
      </div>

      <div style={{ background: 'linear-gradient(to top, #faf4e6, transparent)', height: '50px' }}></div>
      <img style={{ width: '100%' }} src={William} />

    </ContainerMobile>
  );
};
