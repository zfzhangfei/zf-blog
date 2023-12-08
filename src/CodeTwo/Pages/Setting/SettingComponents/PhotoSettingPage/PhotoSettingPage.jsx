import React from 'react'
import './PhotoSettingPage.scss'
import PhotoList from './PhotoSettingPageComponents/PhotoList/PhotoList'
import PhotoFilter from './PhotoSettingPageComponents/PhotoFilter/PhotoFilter'

const PhotoSettingPage = () => {
  return (
    <div className='PhotoSettingPage'>
      <PhotoFilter></PhotoFilter>
      <PhotoList/>
    </div>
  )
}

export default PhotoSettingPage
