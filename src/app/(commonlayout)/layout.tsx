import { Navbar } from '@/components/layout/navbar'
import React from 'react'

export default function commonlayout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <Navbar></Navbar>  
 {children}
        </div>
  )
}
