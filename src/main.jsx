import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle  from './styles/global'
import { ThemeProvider } from 'styled-components'
import theme from "./styles/theme"
import {SignIn} from "././pages/SignIn"
import {SignUp} from "././pages/SignUp"
import {HeaderAdmin} from "./components/HeaderAdmin"
import {HeaderUser} from "./components/HeaderUser"
import { Footer } from "./components/Footer"
import { CardUser } from "./components/CardUser"
import { CardAdmin } from "./components/CardAdmin"
import {Stepper} from "./components/Stepper"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>

        
      {/* <HeaderUser orders={1}/> */}
      
      <CardAdmin/>
      {/* <HeaderAdmin admin={true}/> */}
      

        {/* <SignUp/> */}

        {/* <Footer></Footer> */}
    </ThemeProvider>
  </React.StrictMode>
)
