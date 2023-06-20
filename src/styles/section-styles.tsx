import styled from "styled-components";

const Pill = styled.div`
  display: inline-block;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 1px;
  padding-bottom: 1px;
  color: var(--main-white);
  background-color: #647d96;
  border-radius: 50px; // This gives the pill shape
  text-align: center;
  margin: 0 0.375rem 0 0;
`;

const SectionHeading = styled.h1`
  font-weight: 600;
  font-size: 2em;
`;

export { Pill, SectionHeading };
