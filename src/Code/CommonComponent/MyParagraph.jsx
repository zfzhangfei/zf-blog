import React, { useState ,useEffect} from 'react'
import { Button, Typography } from 'antd';
const { Paragraph } = Typography;

export default function MyParagraph({ onChange, articalItem, onClick }) {
    const [editableStr, setEditableStr] = useState(articalItem.Name);

    useEffect(() => {
        if(editableStr !== articalItem.Name) {
          onChange(editableStr, articalItem);
        }
      }, [editableStr]);
    
    const ChooseArtical = (articalItem) => {
        onClick(editableStr,articalItem)
    }


    return (
        <div className='MyParagraph'>
            <Paragraph
                editable={{
                    onChange: setEditableStr,
                }}
                onClick={() => { ChooseArtical(articalItem) }}
                ellipsis={true}
                style={{width:200}}
            >
                {editableStr}
            </Paragraph>
        </div>
    )
}
