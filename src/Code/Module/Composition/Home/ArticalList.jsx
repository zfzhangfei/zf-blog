import React, { Component, useSelector } from 'react'
import { getArtical, getMark } from '../../../Api/Api'
import ArticalTitle from '../../../CommonComponent/ArticalTitle'
import nolikeIcon from '../../Static/Image/取消点赞.png'
import nocollectIcon from '../../Static/Image/取消收藏.png'
import { Divider, Space, Tag } from 'antd'
import { GlobalContext } from '../../../../Utils/GlobalProvider'
import { connect } from 'react-redux';
import ScrollReveal from 'scrollreveal';


const mapStateToProps = state => ({
  dict: state
});

class ArticalList extends React.Component {
  state = {
    articalList: [],
    articalRefs: Array(100).fill(null).map(() => React.createRef()), // 初始长度设置为适当的值
  }

  componentDidMount = async () => {
    this.setState({
      articalList: await getArtical()
    }, () => {
      this.state.articalRefs.forEach(ref => ScrollReveal().reveal(ref.current, { delay: 100 }));
    });
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
      <GlobalContext.Consumer>
        {context => (
          <div className='ArticalList'>
            {
              this.state.articalList.length > 0 ? this.state.articalList.map((item, index) => {
                return (
                  <div className='ArticalCard' key={item.Id} ref={this.state.articalRefs[index]}>
                    <div className='ArticalCover' style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                      <img src={item.Cover} alt="" width={200} height={200} style={{ objectFit: 'cover', borderRadius: '10px 0px 0px 10px' }} />
                    </div>
                    <div style={{ display: 'inline-block', verticalAlign: 'top', width: 'calc(100% - 300px)' }}>
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
                          textIndent: '2em',
                        }}
                        onClick={() => { this.ShowArticalById(item.Id) }}>
                        {item.Summary}
                      </div>
                      <div className='ArticalMark' style={{ margin: 10, width: "95%", height: 50 }}>
                        <Space size={[0, 8]} wrap>
                          {
                            item.Mark ? this.splitMark(item.Mark).map((value, index) => {
                              return <Tag color={context.state.MarkList[value].color} key={index}>{context.state.MarkList[value].value}</Tag>
                            }) : ''
                          }
                        </Space>
                      </div>
                      <div className='ArticalIcons'>
                        <Space>
                          <img src={nolikeIcon} alt="" width={20} height={20} style={{ verticalAlign: 'middle' }} />
                          <img src={nocollectIcon} alt="" width={20} height={20} style={{ verticalAlign: 'middle' }} />
                          <div style={{ height:20}}>
                            <div style={{ display: 'inline-block',margin:'2px',verticalAlign:'top'}}>作者 --- {item.Author}</div>
                          </div>
                        </Space>
                      </div>
                    </div>
                  </div>
                )
              }) : ''
            }
          </div>
        )}
      </GlobalContext.Consumer>
    )
  }
}



export default connect(mapStateToProps)(ArticalList);