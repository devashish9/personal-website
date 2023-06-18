import {
  HeaderDiv,
  SpaceDiv,
  HeaderButtonDiv,
  BaseStyledLink,
} from "../styles/header-styles";
import { styled } from "styled-components";

const HomeLink = styled(BaseStyledLink)`
  font-size: 4em;
  font-weight: 600;
`;

const PageLink = styled(BaseStyledLink)`
  margin: 0 0 10px 10px;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <HomeLink to="/">Devashish</HomeLink>
      <SpaceDiv />
      <HeaderButtonDiv>
        <PageLink to="/placeholder">Experience</PageLink>
        <PageLink to="/test">Projects</PageLink>
        <PageLink to="/placeholder">Journal</PageLink>
        <PageLink to="/placeholder">About</PageLink>
      </HeaderButtonDiv>
    </HeaderDiv>
  );
}
