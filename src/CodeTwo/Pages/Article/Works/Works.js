import React from 'react'
import ImitationPortfolio from './WorksComponents/Clonepage/ImitationPortfolio/ImitationPortfolio';
import vvv from './WorksComponents/Clonepage/vvv/vvv';
import { useLocation } from 'react-router-dom';
const COMPONENTS = {
    'ImitationPortfolio': ImitationPortfolio,
    'vvv': vvv,
};


export default function Works({pagename}) {
    const DynamicComponent = COMPONENTS[pagename]


    return (
        <div>
            {DynamicComponent ? <DynamicComponent /> : <p>No component found for {pagename}</p>}
        </div>
    )
}
