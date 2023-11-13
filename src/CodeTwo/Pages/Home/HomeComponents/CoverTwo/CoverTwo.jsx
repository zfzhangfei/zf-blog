import React from 'react'
import ApplicationPage from './CoverTwoComponents/ApplicationPage/ApplicationPage'
import Home from './CoverTwoComponents/Home/Home'
import './CoverTwo.scss'

const CoverTwo = () => {
  return (
    <div className='CoverTwo'>
      <section id='ApplicationPage'>
        <ApplicationPage></ApplicationPage>
      </section>
      <section id='Home'>
        <Home></Home>
      </section>
    </div>
  )
}

export default CoverTwo
