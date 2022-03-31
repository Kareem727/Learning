import React from 'react'
import Styles from './styles/Ask.module.css'
import { useTranslation } from 'react-i18next';

const Ask =()=> {
  const { t } = useTranslation();

  return (
    <div className={Styles.containerr}>
      <div className={Styles.innerContainer}>
      <div>
        <h1>{t("Ask_h1")}</h1>
        </div>
      <div className={Styles.section}>
        <h2>{t("Ask_h2")}</h2>
        <p>{t("Ask_p1")}</p>
      </div>
      <div className={Styles.section}>
        <h2>{t("Ask_h3")}</h2>
        <p>{t("Ask_p2")}</p>
      </div>
      <div className={Styles.section}>
        <h2>{t("Ask_h4")}</h2>
        <p>{t("Ask_p3")}</p>
      </div>
      <div className={Styles.section}>
        <h2>{t("Ask_h5")}</h2>
        <p>{t("Ask_p4")}</p>
      </div>
      <div className={Styles.section}>
        <h2>{t("Ask_h6")}</h2>
        <p>{t("Ask_p5")}</p>
      </div>
      </div>
    </div>
  )
}

export default Ask