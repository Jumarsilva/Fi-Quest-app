import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AuthProvider } from '../contexts/auth'
import Colaboradores from '../pages/Colaboradores/colaboradores'
import Dashboard from '../pages/Dashboard/Dashboard'
import { Home } from '../pages/Home/Home'
import Quiz from '../pages/Quiz/Quiz'
import Login from '../pages/Login/index'
import Register from '../pages/Register'

export default function AppRoutes() {

  return (
    <Router>
      <AuthProvider>

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Quiz />} />
          <Route path="/colaboradores" element={<Colaboradores />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}


/*
          <Route exact path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
          <Route path="/colaboradores" element={<PrivateRoute><Colaboradores /></PrivateRoute>} />






*/