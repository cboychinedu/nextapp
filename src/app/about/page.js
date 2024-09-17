import React from 'react'
import styles from "./about.module.css"; 

const About = () => {
  return (
    <div>
      About Page 

      {/* Adding the main div */}
      <main className={styles.main}> 
          <p> Main Div </p>
      </main>
    </div>
  )
}

export default About