import React from 'react'
import './SideBorder.scss'

const SideBorder = ({props}) => {
    const goMyGarden=()=>{
        props.history.push('/Garden')
    }
    return (
        <div className='SideBorder'>
            <div className='SideBorderBox1'>
                <div style={{fontSize:'24px',fontWeight:'bold',margin:10}}>Garden</div>
                <img src="/CodeTwo/Homepage/NANA2.webp" alt="" style={{objectFit:'cover'}} onClick={()=>{goMyGarden()}}/>
            </div>
        </div>
    )
}

export default SideBorder