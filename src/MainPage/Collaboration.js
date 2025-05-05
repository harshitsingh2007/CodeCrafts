import React from 'react'
import  Collaborationimages from'../images/partner-slider-codecrafts.png'
import styles from './Main.module.css'
export default function Collaboration() {
  return (
    <div className={styles.marketingContainer}>
            <h3>Trusted by 1000+ Companies and 100+ Enterpuner</h3>
            <div className={styles.marketing}>
                <img src={Collaborationimages} alt="" className={styles.marketingImage}/>
            </div>
        </div>
  )
}
