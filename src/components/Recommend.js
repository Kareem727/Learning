import React from 'react'
import styles from './styles/Recommend.module.css'
const Recommend =()=> {
  return (
<div className={styles.container}>
    <div className={styles.innercontainer}>
        <h1>Why Preply is the best site for finding online German teachers ?</h1>
        <span className={styles.outerspan}>

        <div className={styles.outerdiv}>
                <span className={styles.innerspan}>
                <h1>{5}</h1>
                <h4>/5</h4>
                <div className={styles.spanLogos}>
                <i class="fa fa-star"></i> 
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i></div>
                </span>
                <p>
                German tutors with an average rating of 5 and up to 124 reviews
                </p>
        </div>

        <div className={styles.outerdiv}>
                <span className={styles.innerspan}>
                <h1>{4}</h1>
                <h3>Languages</h3>
                <div className={styles.spanLogos}><i class="fa fa-globe"></i></div>
                </span>
                <p>German tutors with an average rating of 5 and up to 124 reviews
                </p>

        </div>
        <div className={styles.outerdiv}>
                <span className={styles.innerspan}>
                <h1>{3}</h1>
                <h3> h</h3>
                <div className={styles.spanLogos}><i class="fa fa-clock-o"></i></div>
                </span>
                <p>German tutors with an average rating of 5 and up to 124 reviews
                </p>
        </div>

        </span>
    </div>
    </div>
  )
}

export default Recommend