import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import ExpPage from "./ExpPage";
import ProjPage from "./ProjPage";
import NotesPage from "./NotesPage";
import Header from "../components/Header";
import { Container } from "../styles/general-styles";
import Footer from "../components/Footer";

export default function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exp" element={<ExpPage />} />
        <Route path="/projects" element={<ProjPage />} />
        <Route path="/notes" element={<NotesPage />} />
      </Routes>
      <Footer />
    </Container>
  );
}
