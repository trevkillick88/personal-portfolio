import { createRoot } from 'react-dom/client'
import App from './app.tsx'
import ErrorBoundary from "./components/errorboundry.tsx"
import  { ThemeProvider } from './theme.tsx'
  
const container = document.getElementById('app-container');

if (container) {
    createRoot(container).render(
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>,
    );
} else {
    console.error('App container not found');
}
