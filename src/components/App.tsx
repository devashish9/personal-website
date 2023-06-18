import styled from "styled-components";
import Header from "../components/Header.js";
import Footer from "./Footer.js";
import HomePageBody from "./Home/Body.js";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 93vh;
`;
export default function App() {
  return (
    <Container>
      <Header />
      <HomePageBody />
      <Footer />
    </Container>
  );
}
