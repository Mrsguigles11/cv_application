import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Content from './components/content'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Content></Content>
  </StrictMode>,
)
