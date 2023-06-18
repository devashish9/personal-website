import styled from "styled-components";

const StyledHr = styled.hr`
  border: none;
  border-top: 2px solid #cccccc;
`;

export default function Footer() {
  return (
    <footer>
      <StyledHr />
      <p>Filler content since idk what to put here yet</p>
    </footer>
  );
}
