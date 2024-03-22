import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import { Route } from 'react-router-dom' 
import Login from './Components/Login/Login.jsx'
import SignUp from './Components/Login/SignUp.jsx'
import { AuthContextProvider } from './Components/Context/AuthContext.jsx'
import PP_TC from './Components/PP&TC.jsx'
import Profile from './Components/Profile/Profile.jsx'
import ContactUs from './Components/About/Contact.jsx'
import Chatbot from './Components/Chatbot/Chatbot.jsx'
import Search from './Components/Search/Search.jsx'
import { FileUpload } from './FileUpload.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route path='file'element={<FileUpload/>}/>
        <Route path=''element={<Home/>}/>
        <Route path='about'element={<About/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path="assistant" element={<Chatbot/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path='privacy policy and terms and conditions' element={<PP_TC/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='contactus' element={<ContactUs/>}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);