import React from 'react'
import Buttons from './Buttons'
import TeacherCard from './TeacherCard'
import Styles from './styles/Wrapper.css'
import { useTranslation } from 'react-i18next';

const  WrapCards=()=> {
  const { t } = useTranslation();

  return (
      <div className={Styles.WrapperContainer} >
        <div className="FindTeacher">
      <h1>{t("Find_1")}
      </h1>
        <h2>{t("Find_2")}</h2>
      </div>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <Buttons/>
      </div>
  )
}

export default WrapCards