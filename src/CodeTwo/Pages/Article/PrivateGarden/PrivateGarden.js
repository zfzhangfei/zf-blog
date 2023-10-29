import React from 'react'
import { Image } from 'antd'
import me from '../../../Static/Image/12.webp'
import './PrivateGarden.scss'

export default function PrivateGarden() {
    return (
        <div id='PrivateGarden'>
            <div className='PrivateGardenBox1'>

            </div>
            <div className='PrivateGardenBox2'>
                <div className='PrivateGardenBox4'>
                    <div className='PrivateGardenBox6'>
                        <div className='ContactDetails'>
                            <Image
                                width={200}
                                src={me}
                                style={{ borderRadius: 20 }}
                            />
                        </div>
                    </div>
                    <div className='PrivateGardenBox7'>

                    </div>
                </div>
                <div className='PrivateGardenBox5'>
                    <div className='PrivateGardenBox8'>
                        <h1>
                            <span>w</span>
                            <span>e</span>
                            <span>l</span>
                            <span>e</span>
                            <span>c</span>
                            <span>o</span>
                            <span>m</span>
                            <span>e</span>
                            <span>!</span>
                        </h1>
                    </div>
                    <div className='PrivateGardenBox9'>

                    </div>
                </div>
            </div>
            <div className='PrivateGardenBox3'>

            </div>


        </div>
    )
}
