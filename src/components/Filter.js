import React from 'react'
 import './styles/Filter.css'
 import background from '../img/studies.jpg'
 import { useTranslation } from 'react-i18next';

const Filter =() =>{
  const { t } = useTranslation();

  return (
   <div  className='Container'>
<div className="text-box">
  <div className='inner'>
    {/* <img className='background' src={background}/> */}
    
         <h1>{t("Fil_1")}</h1>
        <p>{t("Fil_2")}
        </p>
        <a className="buut">{t("Fil_3")}</a>
        </div>
     </div>
     </div> 
  )
}

export default Filter