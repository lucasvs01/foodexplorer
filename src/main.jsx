import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle  from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"
import {SignIn} from "././pages/SignIn"
import {SignUp} from "././pages/SignUp"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <SignUp></SignUp>
    </ThemeProvider>
  </React.StrictMode>
)
