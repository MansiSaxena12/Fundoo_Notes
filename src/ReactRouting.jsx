import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignIn from './componenets/pages/signIn/SignIn'
import SignUp from './componenets/pages/signup/Signup'
import Dashboard from './componenets/pages/dashboard/Dashboard'

export default function ReactRouting() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<SignIn/>}></Route>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/SignIn' element={<SignIn/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
