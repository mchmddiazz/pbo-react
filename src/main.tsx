import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.tsx'
import MainBody from './MainBody.tsx'
import Footer from './Footer.tsx'
import './index.css'
import './custom.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <MainBody />
    <Footer />
  </StrictMode>,
)
