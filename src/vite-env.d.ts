/// <reference types="vite/client" />

declare const VITE_APP_VERSION: string

interface ImportMetaEnv {
    readonly VITE_DATE_STARTED_TECH: Date
    readonly VITE_DATE_STARTED_DEV: Date
    readonly VITE_DATE_STARTED_MANAGING: Date
    readonly VITE_APP_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}