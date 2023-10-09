import React, { useState } from 'react'
import './WorkBlock.css'

export default function WorkBlock({ content }) {
    const [backgroundUrl, setBackgroundUrl] = useState(content.Background);

    const ShowWork = () => {
        console.log(11111111);
        window.open('/PersonalWork/Rain', '_blank');
    }

    const onMouseEnter = () => {
        setBackgroundUrl(content.CoverBackground)
    };

    const onMouseLeave = () => {
        setBackgroundUrl(content.Background)
    };

    return (
        <div id='WorkBlock' onClick={ShowWork}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        >
            <div className='WorkBlock'
                style={{ backgroundImage: `url(${backgroundUrl})` }}>
                <h1 className='WorkBlockTitle'>
                    {content.Name}
                </h1>
            </div>
        </div>
    )
};