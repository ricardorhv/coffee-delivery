import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { CoffeeContextProvider } from './context/CoffeeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CoffeeContextProvider>
      <App />
    </CoffeeContextProvider>
  </React.StrictMode>,
)
