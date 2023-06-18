import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 200;
  text-align: center;
  justify-content: space-between;
  align-items: center;
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
  justify-content: space-between;
  font-size: 2em;
  width: 27%;
`;

export { HeaderDiv, SpaceDiv, BaseStyledLink, HeaderButtonDiv };
