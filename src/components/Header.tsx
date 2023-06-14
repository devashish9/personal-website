import styled from "styled-components";


const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #b12424;
    position: fixed;
    top: 0;
`

export default function Header() {
    return (
        <HeaderDiv>
            <h1>Test</h1>
        </HeaderDiv>
    )
}