import React from 'react'
import ApplicationPage from './CoverTwoComponents/ApplicationPage/ApplicationPage'
import Home from './CoverTwoComponents/Home/Home'
import './CoverTwo.scss'

const CoverTwo = ({props}) => {
  return (
    <div className='CoverTwo'>
      <section id='ApplicationPage'>
        <ApplicationPage props={props}></ApplicationPage>
      </section>
      <section id='Home'>
        <Home props={props}></Home>
      </section>
    </div>
  )
}

export default CoverTwo
