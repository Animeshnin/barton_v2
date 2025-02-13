import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/style/index.scss'
import App from './app/App.tsx'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@/app/providers/ThemeProvider";
import  "@/shared/config/i18n/i18n.ts";
import {ErrorBoundary} from "@/app/providers/ErrorBoundary";
import {StoreProvider} from "@/app/StoreProvider";


createRoot(document.getElementById('root')!).render(
    <StoreProvider>
        <StrictMode>
            <BrowserRouter>
                <ErrorBoundary>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </ErrorBoundary>
            </BrowserRouter>
        </StrictMode>
    </StoreProvider>
)
