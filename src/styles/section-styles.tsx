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
  font-size: 1.25em;
`;

const SectionHeading = styled.h1`
  font-weight: 600;
  font-size: 2em;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const SectionTitle = styled.p`
  font-size: 1.5em;
  color: #4d4a4a;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const SectionImage = styled.img`
  width: 24vw;
  height: 14vw;
  border-radius: 5px;
  margin: auto;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 50px;
`;

export { Pill, SectionHeading, SectionTitle, SectionImage, SectionContainer };
