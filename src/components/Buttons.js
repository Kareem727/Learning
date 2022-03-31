import React from 'react'
import styles from './styles/Buttons.module.css'
import { useTranslation } from 'react-i18next';

const Buttons = () =>{
  const { t } = useTranslation();

  return (
   <div className={styles.Container}>
          <div className={styles.innercontainer}>
       <button>{t("Card_Bu")}</button>
       </div>
   </div>

    )
}

export default Buttons