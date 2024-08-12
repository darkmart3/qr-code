import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {Layout} from './Layout'
import {Navigation} from "./components/Navigation/Navigation";
import { Layout } from './Layout';

import { BrowserRouter } from "react-router-dom";

import { QrCodeGenerator } from "./components/Generate/QrCodeGenerator";
import { QrCodeScanner } from "./components/Scan/QrCodeScanner";



createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>,


)
