import './App.css'
import React from 'react'
import ListEmployee from './components/ListEmployee'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Employee from './components/Employee'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>


         <Routes>
           <Route path="/" element={ <ListEmployee/> }/>
           <Route path="/employees" element={ <ListEmployee/> }/>
           <Route path="/add-employee" element={ <Employee/>}/>
           <Route path="/edit-employee/:id" element={ <Employee/>}/>
         </Routes>


        <Footer/>
      </BrowserRouter>
      
    </>
  )
}

export default App
