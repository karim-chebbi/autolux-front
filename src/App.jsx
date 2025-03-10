import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Showroom from './pages/Showroom'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'
import Footer from './components/sections/Footer'
import About from './pages/About'
import CarDescription from './pages/CarDescription'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from './components/Spinner'
import Profile from './components/Profile'
import Login from './components/Login'
import Register from './components/Register'
import { currentUser } from './JS/Actions/AuthActions'
import SuccessNotifications from './components/SuccessNotifications'
import ErrorsNotifications from './components/ErrorsNotifications'
import ScrollToTop from './components/ScrollToTop'
import UserList from './pages/UserList'

const App = () => {
  const dispatch = useDispatch()
  const load = useSelector(state=> state.carReducer.load)

    const user = useSelector(state=> state.authReducer.user)
    const isAdmin = user && user.isAdmin
    const isAuth = useSelector(state=> state.authReducer.isAuth)

  useEffect(() => {
          if (localStorage.getItem("token")) {
            dispatch(currentUser());
          }
  }, [dispatch])

  const authSuccess = useSelector(state=> state.authReducer.success)
  const authErrors = useSelector(state=> state.authReducer.errors)

  console.log(isAdmin);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      {load && <Spinner />}
      {authSuccess && authSuccess.map((success) => <SuccessNotifications key={success.id} success={success} />)}
      {authErrors && authErrors.map((error) => <ErrorsNotifications key={error.id} error={error} />)}
      <Routes>
        { isAuth && isAdmin &&  <Route path="/users" element={ <UserList /> } />} 
        <Route path="/" element={<Home />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/car_description/:id" element={<CarDescription />} />
        {isAuth && <Route path="/profile" element={<Profile />} />}
        {!isAuth && <Route path="/login" element={<Login />} />}
        {!isAuth && <Route path="/register" element={<Register />} />}
      </Routes>
      <Footer />
    </>
  );
}

export default App