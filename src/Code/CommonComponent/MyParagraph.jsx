import React, { useState } from 'react'
import { Button, Typography } from 'antd';
const { Paragraph } = Typography;

export default function MyParagraph({ onChange,articalItem,onClick}) {
    const [editableStr, setEditableStr] = useState(articalItem.Name);
    const [Id, setId] = useState(articalItem.Id);

    onChange(editableStr,Id);

    const ChooseArtical=(value)=>{
        onClick(value)
    }

    return (
        <div>
            <Paragraph
                editable={{
                    onChange: setEditableStr,
                }}
                onClick={()=>{ChooseArtical(articalItem)}}
                style={{background:'pink'}}
            >
                {editableStr}
            </Paragraph>
        </div>
    )
}
