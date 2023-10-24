import React from 'react'
import './CategoryOne.scss'
import { Button, Input } from 'antd'

export default function CategoryOne({ props, changeAnimation }) {
  return (
    <div id='CategoryOne'>

      <div className='CategoryBox1'>
        <div className='CategoryBox3'>
          <Input className='SearchInput'></Input>
          <Button className='SearchButton'>搜索</Button>
        </div>
      </div>
      <div className='CategoryBox2'></div>
    </div>
  )
}
