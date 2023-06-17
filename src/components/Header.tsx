import styled from "styled-components";
import {Link} from "react-router-dom";


const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 3em;
    font-weight: 400;
    text-align: center;
`

const NameLink = styled(Link)`
cursor: pointer;
position: relative;
&:after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #e9e9e5;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
}
&:hover {
  &:after {
    visibility: visible;
    width: 100%;
  }
}
`
//     &:hover {
//     text-shadow: 2px 3px 5px rgba(233,233,229,0.75);
//     }
// `
export default function Header() {
    return (
        <HeaderDiv>
            <NameLink to="/test">Devashish Sood</NameLink>
        </HeaderDiv>
    )
}