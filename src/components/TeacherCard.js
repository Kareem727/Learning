import React from 'react'
import '../components/styles/TeacherCard.css'
import  {useState, useEffect} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { Rating } from 'react-simple-star-rating'
import ProfilePic from '../img/Profile.jpg'
import ProfilePic2 from '../img/Profile2.jpg'
import Flage from '../img/Flage.png'
import { useTranslation } from 'react-i18next';



const TeacherCard =()=> {
    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(10);
    const [pageCount, setPageCount] = useState(0)
    const { t } = useTranslation();

    const [rating, setRating] = useState(0) // initial rating value
    // Catch Rating value
    const handleRating = (rate: Number) => {
      setRating(rate)
      // other logic

    }

    const getData = async() => {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        const data = res.data;
                  const slice = data.slice(offset, offset + perPage)
                  const postData = slice.map(
                      pd => <div key={pd.id}>
                      <p>{pd.title}</p>
                      <img src={pd.thumbnailUrl} alt=""/>
                  </div>
                  )
                  setData(postData)
                  setPageCount(Math.ceil(data.length / perPage))
    }

    const handlePageClick = (e) => {
      const selectedPage = e.selected;
      setOffset(selectedPage + 1)
  };
  

   useEffect(() => {
     getData()
   }, [offset])
  

  return (
    
      <div className='container'>
        
      <div className='innerclass'>
      
    <div  className="search-teacher-card_left">
    <div className="search-teacher-card_left__top">
      <div className="search-teacher-card_left__top__avatar">
        <div className="avatar avatar-big avatar-shadow avatar-placeholder">
          <img src={ProfilePic2} alt="Avatar" />
          <img className='flagg' src={Flage}/>
        </div>
      </div>
      <div className="search-teacher-card_left__top__info">
        <h1>{t("Card_N")}</h1>
        <p>{t("Card_P1")}</p>
        <div className="search-teacher-card-divider"></div>
        <p>{t("Card_P2")}</p>
        <div className='flexy'>
        <h2>{t("Card_h1")}</h2>
        <h2>,</h2>

        <h2>{t("Card_h2")}</h2>
        </div>
      </div>
    </div>
    <div className="search-teacher-card_left__bottom">
      <div className="search-teacher-card_left__bottom__rating">
        <div className="teacher-card-stars">
          <div className="stars-box">
              
              <Rating size={20} onClick={handleRating} ratingValue={rating} /* Available Props */ />

              

          </div>
        </div>
        <p>
        {20} 
        <br/>
        <span>{t("Card_L")}</span>
        </p>
        <div>Book</div>
      </div>
      <div className="search-teacher-card_left__bottom__info">
        {/* <p>
          <span>Also speaks</span>
        </p>
        <h2></h2> */}
        <div className="teacher-card-rate">
          <div className="teacher-card-hourly">
            <p>
              <span>{t("Card_S")}</span>
            </p>
            <h2 className="teacher-price-rate">
              <span>USD 25$</span>
            </h2>
          </div>
          {/* <div className="teacher-card-trial">
            <p>
              <span>Trial</span>
            </p>
            <h2 className="teacher-price-rate">
              <span>USD </span>
            </h2>
          </div> */}
        </div>
      </div>
      {/* <i className="teacher-card-favorite"></i> */}
    </div>
    
  </div>
  
   </div>
   <div className='innerCon2'>
     <div className='innerCon2Flex'>
       <h2>Intro</h2>
       <h2>About</h2>
       <h2>Calender</h2>
     </div>
   </div>
  </div>
  )
}

export default TeacherCard