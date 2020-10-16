import React from 'react'
import './Header.scss'

export const Header = () => {
  
  return(
    <header>
      <h1>Tech Interview Questions</h1>
      <nav>
        <button>FE</button>
        <button>BE</button>
        <button>All</button>
      </nav>
    </header>
  )
}