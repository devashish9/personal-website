import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { Body, Container } from "../styles/general-styles.js";
import styled from "styled-components";

const Pill = styled.div`
  display: inline-block;
  padding: 5px 10px;
  font-size: 1.5em;
  color: var(--main-white);
  background-color: #647d96;
  border-radius: 50px; // This gives the pill shape
  text-align: center;
`;

export default function ProjPage() {
  return (
    <Container>
      <Header />
      <Body>
        <Pill>Tech Stack</Pill>
      </Body>
      <Footer />
    </Container>
  );
}
