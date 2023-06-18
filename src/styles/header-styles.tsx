import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 200;
  justify-content: space-between;
`;

const SpaceDiv = styled.div`
  flex-grow: 1;
`;

// font-variant: small-caps
const BaseStyledLink = styled(Link)`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  line-height: 1.2;
  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 50%;
    height: 2px;
    background-color: #000;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s;
  }
  &::after {
    transform-origin: left;
    right: 0;
  }
  &:hover::before,
  &:hover::after {
    transform: scaleX(1);
  }
`;

const HeaderButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end; /* Align items to the right */
  align-items: flex-start; /* Align wrapped lines to the top */
  font-size: 2.5em;
  width: 35vw;
  flex-wrap: wrap; /* Allow items to wrap onto multiple lines */
`;
export { HeaderDiv, SpaceDiv, BaseStyledLink, HeaderButtonDiv };
