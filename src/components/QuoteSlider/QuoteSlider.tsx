// components/QuoteSlider.tsx
import React, { useEffect, useState } from "react";
import { Quote, Wrapper } from "./QuoteSlider.style";




const quotes = [
  "“E se o que eu quero for exatamente o que me assusta?”",
  "“Se eu ignorar o problema com estilo, ele vira mistério?“",
  "“E se eu nunca for tão bom quanto acho que deveria ser?“",
  "“Por que eu faço lista de tarefas só pra ter o prazer de ignorar com consciência?“",
  "“Por que tenho ideias geniais de madrugada e arrependimentos às 8h?“",
  "“Sou eu que não me encaixo ou o molde que está errado?“",
];

export const QuoteSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false); // começa a sumir

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length); // troca frase
        setVisible(true); // aparece nova
      }, 1000); // tempo do fadeOut
    }, 4000); // tempo total entre trocas

    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Quote isVisible={visible}>{quotes[index]}</Quote>
    </Wrapper>
  );
};
