import React, { useState, useEffect } from 'react'
import EditArticle from './EditArticle'
import ArticalTable from './ArticalTable';
import { getArtical, getMark } from '../../../Api/Api';
import { connect } from 'react-redux';
import {store} from '../../../Common/Dictionary/store';


const mapStateToProps = state => ({
    dict: state
});


function ArticalConfig(props) {
    const [articleData, setarticleData] = useState([]);
    const [dict, setdict] = useState(props.dict);
    const [history,sethistory] = useState(props.history)
    useEffect(() => {
        setdict(props);
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            const datas = await getArtical();
            const newDatas = datas.map(item => {
                const tags = item.Mark.split('/').map(tag => dict.dictMark[parseInt(tag)]) // 将字符串分割成数组,再通过字典值转化
                return {
                    ...item,
                    tags,
                    key: item.Id ,
                }
            })
            setarticleData(newDatas);
        }
        fetchData();
    }, []);





    return (
        <div className='SettingsContent'>
            <div className='ArticalConfig'>
                <ArticalTable data={articleData} history={history}></ArticalTable>
                {/* <EditArticle></EditArticle> */}
            </div>
        </div>
    )
}


export default connect(mapStateToProps)(ArticalConfig)