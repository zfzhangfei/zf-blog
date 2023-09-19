import React, { Component } from 'react'
import { getCommentByArticleId } from '../../../../Api/Api'
import SingleComment from './SingleComment'
import Tree from './CommentTree'

export default class ShowComment extends Component {
    state = {
        currentComment: null,
        replyComment: null,
    }

    componentDidMount = async () => {
        let data = this.transformData(await getCommentByArticleId(this.props.ArticleId))
        this.setState({
            currentComment: data
        })
    }

    transformData = (data) => {
        let map = {} // 创建映射，以存储每个节点以及其子节点
        let nodeArray = [] // 创建树形结构数组

        data.forEach(node => {
            delete node.children // 初始时，删除所有节点的children属性
            map[node.Id] = node // 初始化映射
            if (node.Parents === 0) {
                nodeArray.push(node) // 如果是根节点（即Parents为0的节点），则推入nodeArray
            } else {
                if (!map[node.Parents]) {
                    map[node.Parents] = {} // 如果映射中还没有父节点，那么创建一个
                }
                if (!map[node.Parents].children) {
                    map[node.Parents].children = [] // 如果父节点还没有children属性，那么创建一个
                }
                map[node.Parents].children.push(node) // 将当前节点推入其父节点的子节点数组中
            }
        })

        return nodeArray // 返回树形结构的数组
    }



    handleReply = (value) => {
        this.setState({
            replyComment: value,
        }, () => {
            this.props.handleReply(value)
        })
    }




    render() {
        return (
            <div className='ShowCommentList'>
                {this.state.currentComment && <Tree data={this.state.currentComment} receiveReply={this.handleReply}></Tree>}

                {/* {
                    this.state.currentComment && this.state.currentComment.map((item, index) => {
                        return (
                            <SingleComment currentComment={item} key={index} receiveReply={this.handleReply}></SingleComment>
                        )
                    })
                } */}
            </div>
        )
    }
}
