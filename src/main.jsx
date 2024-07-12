import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { VerifyEmail } from './pages/auth/VerifyEmail.jsx'
import Register from './pages/auth/Register.jsx'
import { RegisterSuccess } from './pages/auth/RegisterSuccess.jsx'
import App from './App.jsx'

import { MainLayout } from './components/layout/MainLayout.jsx'

import LoginPage from './pages/auth/LoginPage.jsx'
import { ProviderInfo } from './pages/auth/ProviderInfo.jsx'
import { RegisterWithGoogle } from './pages/auth/RegisterWithGoogle.jsx'
import CarouselComponent from './components/home/CarouselComponent.jsx'
import SearchComponent from './components/home/SearchComponent.jsx'
import ReviewCard from './components/cart/ReviewCard.jsx'
import Header_Provider_Profile from './components/layout/Header-provider-profile-cliked-by-user.jsx'
import About_provider from './components/layout/About_provider.jsx'
import Contact_info from './components/layout/ContactInfo.jsx'
import ContactInfo from './components/layout/ContactInfo.jsx'
import Customer_review from './components/layout/Customer_review.jsx'
import ProviderProfile from './pages/Provider_Profile/ProviderProfile.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <App/>
      },
      
    ],
  },

  {
    path: "/search",
    element: <SearchComponent/>

  },
  {
    path: "/car",
    element: <CarouselComponent/>
  },
  {
    path: "/register-google",
    element: <RegisterWithGoogle/>
  },
  {
    path: '/verify-email',
    element: <VerifyEmail/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/register-success",
    element: <RegisterSuccess/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/provider-register",
    element: <ProviderInfo/>
  },
  {
    path: "/review-card",
    element: <ReviewCard/>
  },
  {
    path:"/header-Provider",
    element: <Header_Provider_Profile/>
  },
  {
    path:"/About-Provider",
    element: <About_provider/>
  },
  {
    path: "/Contact-Info",
    element: <ContactInfo/>
  },
  {
    path:"/Provider-Profile",
    element:<ProviderProfile/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
