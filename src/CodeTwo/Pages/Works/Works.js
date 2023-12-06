import React from 'react'
import ImitationPortfolio from './WorksComponents/Clonepage/ImitationPortfolio/ImitationPortfolio';
import vvv from './WorksComponents/Clonepage/vvv/vvv';
import { useLocation, useParams } from 'react-router-dom';
const COMPONENTS = {
    1: ImitationPortfolio,
    2: vvv,
};


export default function Works() {
    const { id } = useParams(); // 使用 useParams 钩子来获取动态参数 id
    const DynamicComponent = COMPONENTS[id]


    return (
        <div>
            {DynamicComponent ? <DynamicComponent /> : <p>No component found for</p>}
        </div>
    )
}
