import styled from "styled-components";

const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid #cccccc;
`;

export default function Footer() {
  return (
    <footer>
      <StyledHr />
      <p className="text-right">LinkedIn, GitHub, Email Icons, maybe resume</p>
    </footer>
  );
}
