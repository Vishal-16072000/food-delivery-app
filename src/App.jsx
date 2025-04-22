import React from 'react'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'
import Login from './pages/Login'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Signup from './pages/Signup'

const App = () => {
  return (
        <Router>
      <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/home' element={<Home />}/>
      </Routes>
        <ToastContainer />
    </Router>
  )
}

export default App


export const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');

  if(user){
    return children
  } else {
    return <Navigate to={'/login'}/>
  }
}