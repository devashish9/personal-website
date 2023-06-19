import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { Body, Container, Text } from "../styles/general-styles.js";

export default function Homepage() {
  return (
    <Container>
      <Header />
      <Body>
        <Text>
          I'm beginning to use my work on this website as a means for
          distraction from other work I need to get to. Time to stop for a bit
          lol.
        </Text>
      </Body>
      <Footer />
    </Container>
  );
}
