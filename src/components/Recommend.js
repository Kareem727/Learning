import React from 'react'
import styles from './styles/Recommend.module.css'
import { useTranslation } from 'react-i18next';

const Recommend =()=> {
        const { t } = useTranslation();

  return (
<div className={styles.container}>
    <div className={styles.innercontainer}>
        <h1>{t("Reco_h1")}</h1>
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
                {t("Reco_p")}
                </p>
        </div>

        <div className={styles.outerdiv}>
                <span className={styles.innerspan}>
                <h1>{4}</h1>
                <h3>{t("Reco_h3_1")}</h3>
                <div className={styles.spanLogos}><i class="fa fa-globe"></i></div>
                </span>
                <p>{t("Reco_p")}
                </p>

        </div>
        <div className={styles.outerdiv}>
                <span className={styles.innerspan}>
                <h1>{3}</h1>
                <h3> h</h3>
                <div className={styles.spanLogos}><i class="fa fa-clock-o"></i></div>
                </span>
                <p>{t("Reco_p")}
                </p>
        </div>

        </span>
    </div>
    </div>
  )
}

export default Recommend