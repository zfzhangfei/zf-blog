import React, { useEffect, useState } from 'react'
import { Tag } from 'antd'
import { getMark } from '../../../../Api/Api'

export default function ShowMarkBox() {
    const [markList, setMarkList] = useState()

    useEffect(() => {
        async function fetchData() {
            let marks = await getMark();
            setMarkList(marks)
        }
        fetchData();
    }, []);


    return (
        <div className='ShowMarkBox'>
            {
                markList ? markList.map((item, index) => {
                    return (
                        <Tag key={item.Id} color={item.Color} >{item.Value}</Tag>
                    )
                }) : ''
            }
        </div>
    )
}
