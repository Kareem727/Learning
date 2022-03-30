import React from 'react'
import styles from './styles/AveRate.module.css'
import Flage from '../img/Flage.png'
import Flage2 from '../img/Flage2.jpg'

const AveRate =() =>{
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>Average rate for lessons by tutor nationality</h1>
         <ul>
           <li>
             <div className={styles.innn}>
               <img src={Flage}/>
              <p>American</p>
               </div>
             <div>$30 / hr</div>
           </li>
           <li>
             <div className={styles.innn}>
               <img src={Flage2}/>
              <p>Germany</p>
               </div>
             <div>$25 / hr</div>
           </li>
           <li>
             <div className={styles.innn}>
               <img src={Flage}/>
              <p>American</p>
               </div>
             <div>$30 / hr</div>
           </li>
           <li>
             <div className={styles.innn}>
               <img src={Flage2}/>
              <p>Germany</p>
               </div>
             <div>$25 / hr</div>
           </li>
          
         </ul>
      </div>
    </div>
  )
}

export default AveRate