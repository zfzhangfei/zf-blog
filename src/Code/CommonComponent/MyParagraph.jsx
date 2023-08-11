import React, { useState } from 'react'
import { Button, Typography } from 'antd';
const { Paragraph } = Typography;

export default function MyParagraph({ onChange }) {
    const [editableStr, setEditableStr] = useState('This is an editable text.');

    onChange(editableStr);

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
