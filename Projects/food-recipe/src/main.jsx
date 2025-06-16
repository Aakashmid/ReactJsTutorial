import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalState, { GlobalContext } from './context/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GlobalState>
      <App />
    </GlobalState>
    </BrowserRouter>
  </StrictMode>,
)
