import React, { Component } from 'react'
import { getArtical } from '../../Api/Api'

export default class ArticalList extends Component {
    state={
        articalList:[]
    }


    componentDidMount=async()=>{
        this.setState({
            articalList:await getArtical()
        })
    }

  render() {
    return (
      <div className='ArticalList'>
        {
            this.state.articalList.length>0?this.state.articalList.map((item,index)=>{
                return(
                    <div>{item.Name}
                    
                    </div>
                )
            }):''
        }
      </div>
    )
  }
}
