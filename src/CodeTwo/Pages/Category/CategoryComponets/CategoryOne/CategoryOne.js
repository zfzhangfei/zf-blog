import React, { useState } from 'react'
import './CategoryOne.scss'
import { Button, Input } from 'antd'
import MyTable from '../MyTable/MyTable'
import { ArrowLeftOutlined } from '@ant-design/icons';
const data = [
  { 'Name': 'John', 'Age': 25, 'Occupation': 'Engineer' },
  { 'Name': 'Jane', 'Age': 28, 'Occupation': 'Doctor' },
  { 'Name': 'Doe', 'Age': 32, 'Occupation': 'Teacher' }
];

export default function CategoryOne({ props, changeAnimation }) {

  const [searchTerm, setSearchTerm] = useState('') // 文本框的状态
  const [filteredData, setFilteredData] = useState(data) // 筛选后的数据状态，一开始是全部数据

  const search = (searchTerm) => {
    if (!searchTerm) {
      setFilteredData(data); // 如果搜索关键词为空，则显示全部数据
    } else {
      // 否则，筛选出名字包含搜索关键词的数据
      setFilteredData(data.filter((row) => row['Name'].toLowerCase().includes(searchTerm.toLowerCase())))
    }
  }

  // 当用户键入文本框时触发的函数
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const GoBack = () => {
    props.history.goBack();
  }

  return (
    <div id='CategoryOne'>
      <div className='CategoryBox1'>
        <Button className='CategoryGoBack' shape="circle" onClick={() => { GoBack() }}><ArrowLeftOutlined /></Button>
        <Input className='SearchInput' value={searchTerm} onChange={handleSearchTermChange} />
        <Button className='SearchButton' onClick={() => search(searchTerm)}>搜索</Button>
      </div>
      <div className='CategoryBox2'>
        <div className='CategoryBox3'>
        </div>
        <div className='CategoryBox4'>
          <MyTable data={filteredData.length > 0 ? filteredData : [{ 'Name': null, 'Age': null, 'Occupation': null }]}></MyTable> {/* 渲染筛选后的数据 */}
        </div>
        <div className='CategoryBox5'>
        </div>
      </div>
    </div>
  )
}
