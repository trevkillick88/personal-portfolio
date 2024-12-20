import { createRoot } from 'react-dom/client'
import App from './app.tsx'
import ErrorBoundary from "./components/errorboundry.tsx"
import  { ThemeProvider } from './theme.tsx'
  
createRoot(document.getElementById('app-container')!).render(
    <ErrorBoundary>
      <ThemeProvider>
            <App />
      </ThemeProvider>
    </ErrorBoundary>
 ,
)
