import styled from "styled-components";


const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    line-height: 1.2em;
    font-size: 4em;
    font-weight: 600;
    font-variant: small-caps;
    text-align: center;
`

export default function Header() {
    return (
        <HeaderDiv>
            <h1 className="w-1/4 bg-red-500">DEVASHISH SOOD</h1>
            <div className="w-3/4 text-right bg-blue-500">
                buttonsbruh
            </div>
        </HeaderDiv>
    )
}