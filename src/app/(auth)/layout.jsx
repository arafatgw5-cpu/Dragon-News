// import Nabvar from '@/components/shared/Nabvar'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

const AuthLayout = (  {children}) => {
  return (
    <div>
      <Navbar/>
       {children}
    </div>
  )
}

export default AuthLayout
