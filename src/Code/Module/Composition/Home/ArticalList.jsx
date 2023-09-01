import React, { Component, useSelector } from 'react'
import { getArtical, getMark } from '../../Api/Api'
import ArticalTitle from '../../../CommonComponent/ArticalTitle'
import nolikeIcon from '../../Static/Image/取消点赞.png'
import authorIcon from '../../Static/Image/用户.png'
import { Divider, Space, Tag } from 'antd'
import { wrap } from 'framer-motion'
import { connect } from 'react-redux';


const mapStateToProps = state => ({
  dict: state
});

class ArticalList extends React.Component {
  state = {
    articalList: [],
  }
  componentDidMount = async () => {
    this.setState({
      articalList: await getArtical()
    })
  }

  splitMark = (str) => {
    let arr = []
    if (str && str.indexOf("/") != -1) {
      arr = str.split("/");
    }
    else {
      arr.push(str)
    }
    return arr
  }

  ShowArticalById = (Id) => {
    this.props.ShowArticalById(Id)
  }

  render() {
    const { dict } = this.props;
    if (!dict.dictMark) {
      return null;
    }
    return (
      <div className='ArticalList'>
        {
          this.state.articalList.length > 0 ? this.state.articalList.map((item, index) => {
            return (
              <div className='ArticalCard' key={item.Id}>
                <div className='ArticalBox'>
                  <div className='ArticalCover' style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                    <img src={item.Cover} alt="" width={170} height={170} style={{ objectFit: 'cover', borderRadius: '10px 0px 10px 0px' }} />
                  </div>
                  <div style={{ display: 'inline-block', verticalAlign: 'top', width: 'calc(100% - 170px)' }}>
                    <ArticalTitle Name={item.Name} ></ArticalTitle>
                    <div
                      className='ArticalSummary'
                      style={{
                        margin: 10,
                        width: '95%',
                        height: 65,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        wordWrap: 'break-word',
                        textIndent: '2em'
                      }}
                      onClick={() => { this.ShowArticalById(item.Id) }}>
                      {item.Summary}
                    </div>
                    <div className='ArticalMark' style={{ margin: 10, width: 450, height: 60 }}>
                      <Space size={[0, 8]} wrap>
                        {
                          item.Mark?this.splitMark(item.Mark).map((value, index) => {
                            return <Tag color={dict.dictMark[value].color} key={index}>{dict.dictMark[value].value}</Tag>
                          }):''
                        }
                      </Space>
                    </div>
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



export default connect(mapStateToProps)(ArticalList);