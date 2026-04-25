import Nabvar from '@/components/shared/Nabvar'
import React from 'react'

const AuthLayout = (  {children}) => {
  return (
    <div>
      <Nabvar/>
       {children}
    </div>
  )
}

export default AuthLayout
