import React from 'react'
import styles from './styles/Footer.module.css'
import cookies from 'js-cookie';
import { useEffect } from 'react';
// const languages = [
//   {
//     id: '1',
//     code: 'fr',
//     name: 'Arabic',
//     country_name: 'sa',
//     dir: 'rtl'
//   },
//   {
//     id: '2',
//     code: 'en',
//     name: 'English',
//     country_name: 'us'
//   },
  
// ]
const Footer =() => {
  // const currentCode = cookies.get('i18next') || 'en'
  // const currentLanguage = languages.find(l => l.code == currentCode)
  // useEffect(() =>{
  //   document.body.dir = currentLanguage.dir || 'ltr'
  // },[currentLanguage]);

  return (
 <div className={styles.container}>
   {/* {languages.map(({id,code, name,country_name}) => ( */}

     <div className={styles.flexContainer}>
       <section>
         <h1>LOGO</h1>
       </section>
       <section>
         <h1>About Us</h1>
         <ul>
           <li>Link</li>
           <li>Link</li>
           <li>Link</li>
           <li>Link</li>    
         </ul>
       </section>
       <section>
         <h1>Contact Us</h1>
         <ul>
           <li>Link</li>
           <li>Link</li>
           <li>Link</li>
           <li>Link</li>    
         </ul>
       </section>
       <section>
         <h1>Help</h1>
         <ul>
           <li>Link</li>
           <li>Link</li>
           <li>Link</li>
           <li>Link</li>    
         </ul>
       </section>
     </div>
{/* //  ))} */}

 </div>
    )
}

export default Footer;