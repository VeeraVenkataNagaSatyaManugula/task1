import React from 'react'
import { Menu } from './menu';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/approuter';
function App() {
  return (
   <BrowserRouter>
    
    <Menu></Menu>
    <AppRouter></AppRouter>
  
   </BrowserRouter>
  )
}

export default App