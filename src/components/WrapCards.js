import React from 'react'
import Buttons from './Buttons'
import TeacherCard from './TeacherCard'
import Styles from './styles/Wrapper.css'
const  WrapCards=()=> {
  return (
      <div >
      <TeacherCard className={Styles.WrapperContainer}/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <Buttons/>
      </div>
  )
}

export default WrapCards