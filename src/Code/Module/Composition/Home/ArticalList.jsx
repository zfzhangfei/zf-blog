import React, { Component } from 'react'
import { getArtical } from '../../Api/Api'
import ArticalTitle from '../../../CommonComponent/ArticalTitle'
import nolikeIcon from '../../Static/Image/取消点赞.png'
import authorIcon from '../../Static/Image/用户.png'
import { Divider, Space } from 'antd'


export default class ArticalList extends Component {
  state = {
    articalList: []
  }


  componentDidMount = async () => {
    this.setState({
      articalList: await getArtical()
    })
  }

  render() {
    return (
      <div className='ArticalList'>
        {
          this.state.articalList.length > 0 ? this.state.articalList.map((item, index) => {
            return (
              <div className='ArticalCard'>
                  <div className='ArticalBox'>
                    <div className='ArticalCover' style={{display:'inline-block',verticalAlign:'middle'}}>
                      <img src={item.Cover} alt="" width={170} height={170} style={{ objectFit: 'cover', borderRadius: '10px 0px 10px 0px' }} />
                    </div>
                    <div style={{display:'inline-block',verticalAlign:'top'}}>
                        <ArticalTitle Name={item.Name}></ArticalTitle>
                    </div>
                  </div>
                  <div className='ArticalIcons'>
                    <Space>
                      <img src={nolikeIcon} alt="" width={20} height={20} style={{ verticalAlign: 'middle' }} />
                      <img src={nolikeIcon} alt="" width={20} height={20} style={{ verticalAlign: 'middle' }} />
                      <img src={nolikeIcon} alt="" width={20} height={20} style={{ verticalAlign: 'middle' }} />
                      <img src={nolikeIcon} alt="" width={20} height={20} style={{ verticalAlign: 'middle' }} />
                      <div style={{ display: 'inline-block', verticalAlign: 'middle', height: 20 }}>
                        <img src={authorIcon} alt="" width={20} height={20} style={{ display: 'inline-block' }} />
                        <span style={{ display: 'inline-block', verticalAlign: 'top' }}>{item.Author}</span>
                      </div>
                    </Space>
                  </div>
              </div>
            )
          }) : ''
        }
      </div>
    )
  }
}
