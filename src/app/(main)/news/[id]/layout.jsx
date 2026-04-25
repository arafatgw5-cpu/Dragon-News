import Header from '@/components/shared/Header'
import Nabvar from '@/components/shared/Nabvar'
import React from 'react'

function MainLayout({ children }) {
  return (
    <div>
        <Header/>
        <Nabvar/>  
        {children}
    </div>
  )
}

export default MainLayout