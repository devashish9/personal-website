import styled from "styled-components";
import {Link} from "react-router-dom";


const HeaderDiv = styled.div`
    display: flex;
    margin: 10px;
    flex-direction: row;
    font-weight: 200;
    text-align: center;
    justify-content: space-between;
`

const SpaceDiv = styled.div`
  flex-grow: 1;

`
// font-variant: small-caps
const BaseStyledLink = styled(Link)`
cursor: pointer;
position: relative;
overflow: hidden;
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
`

const NameLink = styled(BaseStyledLink)`
font-size: 5em;
line-height: 1.2;
`

const ChildDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  background: red;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`;

export default function Header() {
    return (
        <HeaderDiv>
            <SpaceDiv />
            <NameLink to="/">Devashish Sood</NameLink>
            <ChildDiv2>
                <BaseStyledLink to = "/test">test</BaseStyledLink>
                <BaseStyledLink to = "/placeholder">test2</BaseStyledLink>
                <BaseStyledLink to = "/placeholder">test3</BaseStyledLink>
            </ChildDiv2>
        </HeaderDiv>
    )
}