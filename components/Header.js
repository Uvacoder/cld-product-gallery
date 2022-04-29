import React from 'react'
import { navLinks } from '../utils/data/navlinks'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <nav className="bg-grey-light flex w-full items-end rounded-md">
        <div className="brand pl-2 pr-2">
          <h3>Cloudinary Motors</h3>
        </div>
        <ol className="list-reset flex">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.path}>
                <li>
                  <span className="mr-2 text-blue-600 hover:text-blue-700">
                    {link.name}
                  </span>
                </li>
              </Link>
            )
          })}
        </ol>
      </nav>
    </header>
  )
}
