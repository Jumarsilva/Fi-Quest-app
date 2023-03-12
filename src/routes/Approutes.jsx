import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from '../components/PrivadeRouter/PrivateRoute'
import { AuthProvider } from '../contexts/auth'
import Colaboradores from '../pages/Colaboradores/colaboradores'
import Dashboard from '../pages/Dashboard/Dashboard'
import { Home } from '../pages/Home/Home'
import Login from '../pages/Login/index'
import Quiz from '../pages/Quiz/Quiz'
import Register from '../pages/Register/index'

export default function AppRoutes() {

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
          <Route path="/colaboradores" element={<PrivateRoute><Colaboradores /></PrivateRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
