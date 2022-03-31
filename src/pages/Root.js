

import React from 'react'
import Ask from '../components/Ask'
import AveRate from '../components/AveRate'
import Filter from '../components/Filter'
import Footer from '../components/Footer'
import Guide from '../components/Guide'
import NavBar from '../components/NavBar'
import Recommend from '../components/Recommend'
import TeacherCard from '../components/TeacherCard'
import WrapCards from '../components/WrapCards'
import cookies from 'js-cookie';

const  Root =() => {
  return (
    <div>

    <NavBar/>
    <Filter/>
    {/* <Guide/> */}
    <WrapCards/>
    
    <Recommend/>
    <AveRate/>
    <Ask/>
    <Footer/>

    </div>
  )
}

export default Root;