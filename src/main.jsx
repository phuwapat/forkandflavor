import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserAuthContextProvider } from './context/UserAuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserAuthContextProvider>
      <App />
    </UserAuthContextProvider>
  </React.StrictMode>,
)
