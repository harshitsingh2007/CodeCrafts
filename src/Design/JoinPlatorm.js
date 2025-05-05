import React from 'react'
import styles from './Design.module.css'

export default function JoinPlatorm() {
  return (
    <div className={styles.joinPlatform}>
      <div className={styles.joinPlatformContainer1}>
         <h1>Join the platform trusted by over +250 million users</h1>
         <a href="">Start Designing</a>
      </div>
      <div className={styles.joinPlatformContainer2}>
        <div className={styles.joinPlatformContainer2Child}>
        <img src="https://static.wixstatic.com/media/0784b1_c8dde84c69eb4415855dd54c17050b09~mv2.jpg/v1/fill/w_772,h_466,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0784b1_c8dde84c69eb4415855dd54c17050b09~mv2.jpg" alt="" />
          <div className={styles.joinPlatformContainer2ChildText}>
            <h3>Find inspiring website designs created by Wix users.</h3>
            <a href="">Explore Sites</a>
          </div>
        </div>

        <div className={styles.joinPlatformContainer2Child}>
          <img src="https://static.wixstatic.com/media/0784b1_998c2b60c58f49a8b2be0e920b44c1fe~mv2.jpg/v1/fill/w_772,h_466,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Section%207%20-%20Image%202.jpg" alt="" />
           <div className={styles.joinPlatformContainer2ChildText}>
            <h3>Hire a website designer to bring your vision to life.</h3>
            <a href="">Hire a Pro</a>
           </div>
        </div>
      </div>
    </div>
  )
}
