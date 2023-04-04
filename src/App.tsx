import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CoffeeContext, CoffeeContextProvider } from './context/CoffeeContext'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { darkTheme } from './styles/themes/dark'
import { useContext } from 'react'

export function App() {
  const { isLightTheCurrentTheme } = useContext(CoffeeContext)

  return (
    <ThemeProvider theme={isLightTheCurrentTheme ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
