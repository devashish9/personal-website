// import { useState } from 'react'
import Header from '../components/Header.js'
import styled from "styled-components";

const Text = styled.p`
  font-size: 18px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export default function App() {
  return (
    <Container>
    <Header />
    <Text>Deciding on typography</Text>
    </Container>
  )
}
