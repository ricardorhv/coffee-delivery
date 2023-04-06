import { useContext } from 'react'
import { CoffeeContext } from './context/CoffeeContext'

import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/light'
import { darkTheme } from './styles/themes/dark'
import { FilterContextProvider } from './context/FilterContext'

export function App() {
  const { isLightTheCurrentTheme } = useContext(CoffeeContext)

  return (
    <ThemeProvider theme={isLightTheCurrentTheme ? lightTheme : darkTheme}>
      <BrowserRouter>
        <FilterContextProvider>
          <Router />
        </FilterContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
