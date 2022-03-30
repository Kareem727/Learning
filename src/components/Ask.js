import React from 'react'
import Styles from './styles/Ask.module.css'
const Ask =()=> {
  return (
    <div className={Styles.containerr}>
      <div className={Styles.innerContainer}>
      <div>
        <h1>Frequently Asked Questions (FAQ)</h1>
        </div>
      <div className={Styles.section}>
        <h2>🗣 How hard is English, and how many hours will it take to become proficient?</h2>
        <p>English is much easier than most other languages despite its tense varieties, irregular verbs and pronunciation. With regular online English lessons, you can start having basic conversations quite quickly. If you want to be fluent, you’ll need between 600-750 hours of 1-on-1 English tutoring with an online teacher combined with self-practice. Hundreds of experts are ready to help you improve.</p>
      </div>
      <div className={Styles.section}>
        <h2>📲 How do interactive online English lessons via video work?</h2>
        <p>Tutors and students share files, note down vocabulary, share their screens and chat on Preply Space, a video chat platform. With it, you can have private English lessons anywhere with online English tutors from all over the world.</p>
      </div>
      <div className={Styles.section}>
        <h2>🎓 What are the most popular English tests?</h2>
        <p>IELTS, TOEFL, SAT, ACT, and GRE are the top five standardized tests for students and non-native English learners among hundreds of English language tests worldwide. Data is based on the annual number of test-takers and confirmed by the number of lessons with online test prep tutors on Preply. IELTS is accepted by most American, Australian, British, Canadian, Irish, and New Zealand academic institutions, and many more across the world. In particular, Australia, New Zealand, Canada, and the United Kingdom use IELTS scores as proof of prospective immigrants' competence in English. More specifically, IELTS uses British English and is generally favored by the United Kingdom and institutions in Commonwealth nations, such as New Zealand and Australia. On the other hand, the TOEFL tests your ability to communicate in English in academic settings. Administered by US-based organization the Education Testing Service, TOEFL uses American English. It is accepted by thousands of institutions across many countries, including the UK, USA, and Australia, as well as all of the world’s top 100 universities. It can also satisfy the required language component for student, post-study, skilled migration, and business visas in Australia, Canada, and New Zealand.</p>
      </div>
      <div className={Styles.section}>
        <h2>🧑🏻‍🤝‍🧑🏿How many people speak English worldwide?</h2>
        <p>Over one billion people around the world speak English, of which about 379 million are native speakers.</p>
      </div>
      <div className={Styles.section}>
        <h2>🌍 How many countries speak English?</h2>
        <p>There are 67 countries around the world where English is the official language, and it is a regional language in 27 other countries.</p>
      </div>
      </div>
    </div>
  )
}

export default Ask