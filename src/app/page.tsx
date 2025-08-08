import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
      <ul className='flex'> 
        <Link className="w-64 flex-1"href="/home">HOME</Link>
        <Link className="w-64 flex-1"href="/about">ABOUT</Link>
        <Link className="w-64 flex-1"href="/product">PRODUCTS</Link>
        <Link className="w-64 flex-1"href="/services">SERVICES</Link>
        <Link className="w-64 flex-1"href="/contact">CONTACT</Link>
      </ul>
    </nav>
  )
}

export default Navbar