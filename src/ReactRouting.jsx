import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './pages/signIn/SignIn'
import SignUp from './pages/signup/Signup'
import Dashboard from './dashboard/Dashboard'

export default function ReactRouting() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
