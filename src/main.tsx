import { createRoot } from 'react-dom/client'
import App from './app.tsx'
import ErrorBoundary from "./components/errorboundry.tsx"
import  { ThemeProvider } from './theme.tsx'
import * as Sentry from "@sentry/react";
import {
    TelemetryDeckProvider,
    createTelemetryDeck,
} from "@typedigital/telemetrydeck-react";

const td = createTelemetryDeck({ appID: '%VITE_APP_ID%', clientUser: "anonymous" });

Sentry.init({
    dsn: "https://464223fe3668387613f4f1e37dc3a3f7@o4508902300123136.ingest.de.sentry.io/4508902301499472",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    tracePropagationTargets: ["localhost", "https://trevkillick.dev"],
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
const container = document.getElementById('app-container');

if (container) {
    createRoot(container).render(
        <TelemetryDeckProvider telemetryDeck={td}>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </TelemetryDeckProvider>,
    );
} else {
    console.error('App container not found');
}
