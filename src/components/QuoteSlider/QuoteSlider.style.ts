import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const Quote = styled.div<{ isVisible: boolean }>`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  animation: ${(props) => (props.isVisible ? fadeIn : fadeOut)} 1s ease-in-out;
  transition: opacity 1s ease-in-out;
  font-size: 1.5rem;
  text-align: center;
  min-height: 4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  font-family: 'kent';
  color:#ff3131;
`;