import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Showroom from './pages/Showroom'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Footer from './components/sections/Footer'
import About from './pages/About'
import CarDescription from './pages/CarDescription'
import { useSelector } from 'react-redux'
import Spinner from './components/Spinner'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
const App = () => {
  const load = useSelector(state=> state.carReducer.load)
  return (
    <>
      <Navbar /> 
      {load && <Spinner />}
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/showroom' element={ <Showroom /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/*' element={ <ErrorPage /> } />
        <Route path='/car_description/:id' element={ <CarDescription /> } />
        <Route path='/profile' element={ <Profile /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/register' element={ <Register /> } />
      </Routes> 
      <Footer />
    </>  
  )
}

export default App