import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/ThemeProvider.tsx'
import { MainRoutes } from './routes/MainRoutes.tsx'
import { SearchProvider } from './context/SearchProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
        <SearchProvider>
          <MainRoutes />
        </SearchProvider>
    </ThemeProvider>
  </StrictMode>,
)
