import React from 'react'
import './Componet.css'

export default function ArticalTitle({ Name }) {

    return (
        <div id='ArticalTitle'>
            <div>
                <div style={{
                    display: 'inline-flex',
                    verticalAlign: 'middle',
                    width: 8,
                    height: 30,
                    background: '#AA5F9E',
                    marginLeft: 10,
                    marginRight: 10
                }}></div>
                <div style={{
                    display: 'inline-flex',
                    verticalAlign: 'middle',
                    fontSize: 20,
                    fontWeight: 'bold',
                    width: 300,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                }} >{Name}</div>
            </div>

        </div>
    )
}
