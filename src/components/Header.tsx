import {
  HeaderDiv,
  SpaceDiv,
  HeaderButtonDiv,
  BaseStyledLink,
} from "../styles/header-styles";
import { styled } from "styled-components";

const HomeLink = styled(BaseStyledLink)`
  font-size: 4em;
  line-height: 1;
  margin-top: auto;
  margin-bottom: auto;
`;

const PageLink = styled(BaseStyledLink)`
  margin: 0 0.625rem 0 0;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <HomeLink to="/">Devashish</HomeLink>
      <SpaceDiv />
      <HeaderButtonDiv>
        <PageLink to="/exp">Experience</PageLink>
        <PageLink to="/projects">Projects</PageLink>
        <PageLink to="/notes">Notes</PageLink>
      </HeaderButtonDiv>
    </HeaderDiv>
  );
}
