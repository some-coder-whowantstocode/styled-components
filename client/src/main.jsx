import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Items from './Components/Items.jsx'
import Productdecription from './Components/Productdecription.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/products/:type/:color' element={<Items/>}/>
        <Route path='/about' element={<Productdecription/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
