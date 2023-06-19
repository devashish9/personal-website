import { styled } from "styled-components";

const Pill = styled.div`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #007bff;
  border-radius: 50px; // This gives the pill shape
  text-align: center;
`;

interface ProjectProps {
  projName: string;
  title: string;
  description: string;
  img: string;
  githubLink?: string;
}

export default function Project() {
  return <Pill>??</Pill>;
}
