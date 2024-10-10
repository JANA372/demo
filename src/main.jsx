import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App.jsx
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* calling the app*/}
    {/* <Component_name/> */}
    <App />
  </StrictMode>,
)
