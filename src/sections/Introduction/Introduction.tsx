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
        <Subtitle paddingBottom="10%" paddingTop="10%" color="#ff3131" fontSize="3.5vw">A verdade é que viver dá trabalho.<br/>
          Pensar, então, nem se fala.<br/>
          Mas perguntar é o primeiro passo<br/>
          mesmo que a resposta venha do além...
        </Subtitle>
        <Button style={{  marginBottom: '20%', marginTop:'10%'  }}>Fazer Pergunta</Button>
      </div>

     <div style={{background:'linear-gradient(to top, #faf4e6, transparent)', height:'50px'}}></div>
        <img style={{width:'100%'}} src={William} />
    
    </ContainerMobile>

  );
};
