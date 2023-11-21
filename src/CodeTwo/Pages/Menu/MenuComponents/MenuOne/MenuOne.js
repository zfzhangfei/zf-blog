import React, { useState, useEffect } from 'react'
import './MenuOne.scss'
import { Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import ToolBar from '../ToolBar/ToolBar'

export default function MenuOne({ props, changeAnimation, toggleMenu }) {
    const [contens, setContent] = useState(null)


    useEffect(() => {
        async function fetchData() {
            let contens = [
                {
                    Id: 1,
                    Category: "文章",
                    Children: [
                        {
                            title: "南风过境",
                            author: "七微",
                            summary: `越是逃离 却越是靠近你 越是背过脸 却越是看见你
                            她似一场经久不散的季南风，席卷他心。 他是她心之城池里，唯一的城民。
                            一场漫漫经年的久别重逢，揭开时光掩埋下的伤痕与真相，却让爱情再次走向万劫不复。
                            一次饭局，傅希境偶遇五年前不告而别的女友季南风，他执意认为南风就是其旧日恋人赵西贝，遭到南风矢口否认，却丝毫不能打消傅希境的疑虑。 在傅希境的步步紧逼下，南风的防守节节败退，那段刻意被她遗忘的往事也渐渐浮出水面——季南风五年前化名赵西贝，带着不为人知的目的和仇恨接近傅希境，一年的时光，她一步步走进他的心，却免不了自己泥足深陷。而因为她的爱情，害得母亲成为植物人。强大的内疚和罪恶感令她带着母亲远走，投奔好友谢飞飞，生活也逐渐趋于平静。
                            五年后，命运转了一个圈，他们再次相逢，一切又回到原点。因着往事难诉，南风只想逃离，傅希境却穷追不舍。
                            明明不过咫尺，心却如隔天涯。 最绝望的爱情莫过于，爱，却不能。
                            当南风过境，是否会有温暖留痕？
                            若没有你，我这一生，就算再快乐，也不会多快乐了。`,
                            IsLike: false,
                            IsCollect: false,
                            type: 'Article',
                        },
                        {
                            title: "南风过境",
                            author: "七微",
                            summary: `越是逃离 却越是靠近你 越是背过脸 却越是看见你
                            她似一场经久不散的季南风，席卷他心。 他是她心之城池里，唯一的城民。
                            一场漫漫经年的久别重逢，揭开时光掩埋下的伤痕与真相，却让爱情再次走向万劫不复。
                            一次饭局，傅希境偶遇五年前不告而别的女友季南风，他执意认为南风就是其旧日恋人赵西贝，遭到南风矢口否认，却丝毫不能打消傅希境的疑虑。 在傅希境的步步紧逼下，南风的防守节节败退，那段刻意被她遗忘的往事也渐渐浮出水面——季南风五年前化名赵西贝，带着不为人知的目的和仇恨接近傅希境，一年的时光，她一步步走进他的心，却免不了自己泥足深陷。而因为她的爱情，害得母亲成为植物人。强大的内疚和罪恶感令她带着母亲远走，投奔好友谢飞飞，生活也逐渐趋于平静。
                            五年后，命运转了一个圈，他们再次相逢，一切又回到原点。因着往事难诉，南风只想逃离，傅希境却穷追不舍。
                            明明不过咫尺，心却如隔天涯。 最绝望的爱情莫过于，爱，却不能。
                            当南风过境，是否会有温暖留痕？
                            若没有你，我这一生，就算再快乐，也不会多快乐了。`,
                            IsLike: false,
                            IsCollect: false,
                            type: 'Article',
                        }
                    ]
                },
                {
                    Id: 2,
                    Category: "作品",
                    Children: [
                        {
                            Id:1,
                            title: "下雨的云",
                            author: "张菲",
                            summary: `用纯HTML+css写的下雨的云`,
                            IsLike: false,
                            IsCollect: false,
                            type: 'Artwork',
                            pagename:'vvv'
                        },
                        {
                            Id:2,
                            title: "仿写---作品集",
                            author: "张菲",
                            summary: `用纯HTML+css写的下雨的云`,
                            IsLike: false,
                            IsCollect: false,
                            type: 'Artwork',
                            pagename:'ImitationPortfolio'
                        }
                    ]
                },
                {
                    Id: 3,
                    Category: "作者简介",
                    Children: [
                        {
                            title: "私人花园",
                            author: "张菲",
                            summary: `张菲的介绍`,
                            IsLike: false,
                            IsCollect: false,
                            type: 'PrivateGarden'
                        }
                    ]
                },
            ]
            setContent(contens)
        }
        fetchData();
    }, []);




    const GoCategory = (value) => {
        props.history.push('/Category', value)
        changeAnimation()
    }

    const GoTitle = (value) => {
        props.history.push('/Article', value)
    }

    return (
        <div id='MenuOne'>
            <div className='MenuBox1'>

            </div>
            <div className='MenuBox2'>
                <div className='MenuBox3'>
                    <div className='MenuBox5'>
                        <div style={{
                            fontFamily: 'feilongti',
                            fontSize: 128,
                            margin: 20,
                            color: '#641E16'
                        }}>目录</div>
                    </div>
                    <div className='MenuBox6'>
                        {
                            contens && contens.map((item, index) => {
                                return (<div className='MenuBox7' key={index}>
                                    <div className='Category' onClick={() => { GoCategory(item) }}>{item.Category}</div>
                                    {
                                        item.Children && item.Children.map((itemChildren, indexChildren) => {
                                            return (<div className='MenuBox8' key={indexChildren}>
                                                <div className='title' onClick={() => { GoTitle(itemChildren) }}>
                                                    {
                                                        itemChildren.title
                                                    }
                                                </div>
                                            </div>)
                                        })
                                    }
                                </div>)
                            })
                        }
                    </div>
                </div>
                <div className='MenuBox4'>
                    <ToolBar props={props}></ToolBar>
                </div>
            </div>
        </div>
    )
}
