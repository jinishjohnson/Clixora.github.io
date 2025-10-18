'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './Navbar.css'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  const isActive = (path) => {
    if (path === '/') return pathname === '/'
      ? 'active'
      : '';
    return pathname.startsWith(path) ? 'active' : '';
  }

  return (
    <>
      <div className={`navbar ${scrolled ? 'scrolled' : ''} `}>
        <div className="logo">
          <Image src={scrolled ? '/Logo2.png' : '/Logo.png'} alt="Clixhora" width={scrolled ? 120 : 150} height={scrolled ? 40 : 50} />
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