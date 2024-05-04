import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KindeProvider
      clientId={import.meta.env.VITE_clientId}
      domain={import.meta.env.VITE_domain}
      redirectUri={import.meta.env.VITE_redirectURI}
      logoutUri={import.meta.env.VITE_logoutURI}
    >
      <App />
    </KindeProvider>
  </React.StrictMode>,
)
