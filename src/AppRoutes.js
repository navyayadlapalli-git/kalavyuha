import React, { lazy } from 'react'
import { Router } from './ui/routing/Router'

const appRoutes = [
  { path: '/register', component: lazy(() => import('./components/RegistrationForm')) },
  { path: '/otpVerify', isAuthRoute: true, component: lazy(() => import('./components/OTPVerificationForm')) },

]

const AppRoutes = () => {
  return <Router appRoutes={appRoutes} />
}

export default AppRoutes