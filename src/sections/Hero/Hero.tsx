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
  ImageBustos,
  SubtitleHero,
  TextHero,
  TitleHero,
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
            <TitleHero>Conselhos do Além</TitleHero>
            <FixedImage src={TeiaRigth} />
          </ContainerTeias>
          <DivTextHero>
            <SubtitleHero>
              Dúvidas fazem parte
              <br />
              do caminho...
            </SubtitleHero>
            <TextHero>
              Em momentos de <br />
              transição, silêncio ou <br />
              angústia, recorrer ao <br />
              pensamento daqueles <br />
              que moldaram o mundo <br />
              pode ser um gesto de <br />
              coragem.
              <br />
            </TextHero>
          </DivTextHero>
          <ContainerBustos>
            <ImageBustos src={Bustos} />
          </ContainerBustos>
        </Content>
      </Banner>
      <Gradient />
    </>
  );
};