import React from 'react'
import headerStyle from './Header.module.css';

const Header = () => {
  return (
    <header className={headerStyle.headerWrapp}>
        <h1>Tip Top Songs</h1>
        <h2>- Top 10 Most Popular Songs -</h2>
    </header>
  )
}

export default Header