import { styled } from "styled-components";

const Body = styled.div`
  flex: 1;
  padding: 4rem 0;
  font-size: 1.5em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 93vh;
`;

const RegularText = styled.p`
  font-size: 1.2em;
  line-height: 1.2;
  margin-top: 1px;
  margin-bottom: 2px;
`;

export { Body, Container, RegularText };
