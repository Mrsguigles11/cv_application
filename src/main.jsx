import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/header'
import Inputs from './components/inputs'
import CV from './components/cv'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header></Header>
    <Inputs></Inputs>
    <CV></CV>
  </StrictMode>,
)
