import React from 'react'
import { Link } from 'react-router-dom'

// css
import styles from './Header.css'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1 className={styles.title}>test</h1>
      <nav>
        <ul className={styles.list}>
          <li className={styles.listItem}><Link className={styles.link} to='/'>About</Link></li>
          <li className={styles.listItem}><Link className={styles.link} to='/posts'>Seeds</Link></li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
