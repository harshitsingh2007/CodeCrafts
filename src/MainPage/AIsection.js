import React from 'react'
import styles from './Main.module.css'
import { Link } from 'react-router-dom'
export default function AIsection() {
  return (
    <div className={styles.AIMainContainer}>
      <div className={styles.AiHeader}>
        <h1>Lets Start With AI</h1>
        <p>Elevate your site with AI embedded across the CodeCrafts platform and extend its power with deep integrations with a growing ecosystem of AI-powered apps.</p>
          <Link to='/aiResponse' className='btnAI'>
        <span>
          Discover AI
        </span>
          </Link>
      </div>
    </div>
  )
}
