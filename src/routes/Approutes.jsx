import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from '../components/PrivadeRouter/PrivateRoute'
import { AuthProvider } from '../contexts/auth'
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
          <Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />

        </Routes>
      </AuthProvider>
    </Router>
  )
}
