import React, { useState } from 'react';
import { Button, Input, Modal, message } from 'antd';
import ColorSelect from './ColorSelect';
import { putMark } from '../../../../../Api/Api';


const colors = ['magenta', 'red', 'orange','volcano','gold','lime','green','cyan','blue','geekblue','purple'];

const AddMarkModel = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [markName, setMarkName] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const showModal = () => {
        if (!selectedColor) {
            // 随机索引
            const randomIndex = Math.floor(Math.random() * colors.length);
            // 随机颜色
            const randomColor = colors[randomIndex];
            setSelectedColor(randomColor);
        }
        setIsModalOpen(true);
    };

    const handleOk = async() => {
        if (!markName) {
            message.error("请输入标签名！")
        }

        await putMark(markName,selectedColor)
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        destroy()
    }; 
    const destroy = () => {
        setMarkName('')
        setSelectedColor('')
    };

    const onChange = (e) => {
        setMarkName(e.target.value)
    }
    const handleChange = (value) => {
        setSelectedColor(value);
    }
    return (
        <>
            <Button type="primary" onClick={showModal} style={{marginBottom:20}} block>
               新增标签
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Input value={markName} onChange={onChange}></Input>
                {/* <ColorSelect onChange={handleChange}></ColorSelect> */}
            </Modal>
        </>
    );
};
export default AddMarkModel;