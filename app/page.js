"use client"
import React from 'react'
import Banner from '@/components/ui-components/Banner/Banner'
import About from '@/components/ui-components/About/About'
import Swhy from '@/components/ui-components/Section/Swhy'
import CGrid from '@/components/ui-components/Counter/CGrid'  
import Client from '@/components/ui-components/Client/Client'



const page = () => {
  return (
    <section className=''>
      <Banner />
      <About />
      <Swhy />
      <CGrid />
      <Client />

      
 
      

    </section>
  )
}

export default page