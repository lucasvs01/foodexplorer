import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle  from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"
import {SignIn} from "././pages/SignIn"
import {SignUp} from "././pages/SignUp"
import {HeaderAdmin} from "./components/HeaderAdmin"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <HeaderAdmin admin={true}/>

        {/* <SignUp/> */}
    </ThemeProvider>
  </React.StrictMode>
)
