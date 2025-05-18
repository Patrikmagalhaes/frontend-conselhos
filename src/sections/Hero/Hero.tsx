import velaMp4 from "../../assets/vela.mp4";
import TeihaLeft from "../../assets/images/aranha/teiaLeft.svg";
import TeiaRigth from "../../assets/images/aranha/teiaRigth.svg";
import Bustos from "../../assets/images/bustos.png";
import {
  Banner,
  ContainerBustos,
  ContainerTeias,
  Content,
  DivTextHero,
  FixedImage,
  Gradient,
  H1,
  H2,
  Subtitle,
  Video,
} from "./Hero.styles";


export const Hero = () => {
  return (
    <>
      <Banner>
        <Video autoPlay loop muted>
          <source src={velaMp4} type="video/mp4" />
        </Video>
        <Content>
          <ContainerTeias>
            <FixedImage src={TeihaLeft} />
            <H1>Conselhos do Além</H1>
            <FixedImage src={TeiaRigth} />
          </ContainerTeias>

          <DivTextHero>
            <H2>
              Dúvidas fazem parte
              <br />
              do caminho...
            </H2>
            <Subtitle>
              Em momentos de <br />
              transição, silêncio ou <br />
              angústia, recorrer ao <br />
              pensamento daqueles <br />
              que moldaram o mundo <br />
              pode ser um gesto de <br />
              coragem.
              <br />
            </Subtitle>
          </DivTextHero>

          <ContainerBustos>
            <img style={{ width: "100%" }} src={Bustos} />
          </ContainerBustos>
        </Content>
      </Banner>
      <Gradient />

    </>
  );
};
