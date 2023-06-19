import styled from "styled-components";
import Header from "../Header.js";
import Footer from "../Footer.js";
import HomePageBody from "./Body.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 93vh;
`;
export default function Homepage() {
  return (
    <Container>
      <Header />
      <HomePageBody />
      <Footer />
    </Container>
  );
}
