import React, { useState } from 'react'
import { Button, Typography } from 'antd';
const { Paragraph } = Typography;

export default function MyParagraph({ onChange,articalId }) {
    const [editableStr, setEditableStr] = useState('This is an editable text.');
    const [Id, setId] = useState(articalId);

    onChange(editableStr,Id);

    return (
        <div>
            <Paragraph
                editable={{
                    onChange: setEditableStr,
                }}
            >
                {editableStr}
            </Paragraph>
        </div>
    )
}
