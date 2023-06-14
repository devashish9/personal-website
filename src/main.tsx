import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './styles/globals.css'
import Header from './components/Header.tsx'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
`

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Container>
      <Header />
      <App />
    </Container>
  </React.StrictMode>,
)
