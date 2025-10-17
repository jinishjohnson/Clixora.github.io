'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Navbar.css'

const Navbar = () => {
  const pathname = usePathname()

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
      ? 'active'
      : '';
    return pathname.startsWith(path) ? 'active' : '';
  }

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <Image src="/Logo.png" alt="Clixhora" width={150} height={50} />
        </div>
        <div className="nav-links">
          <Link   href="/" className={isActive('/')}>Home</Link>
          <Link href="/about" className={isActive('/about')}>About</Link>
          <Link href="/services" className={isActive('/services')}>Services</Link>
          <Link href="/contact" className={isActive('/contact')}>Contact</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar