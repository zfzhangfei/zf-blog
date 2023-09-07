import React from 'react';
import { Select } from 'antd';



const colorOptions = [
    {
        value: 'magenta',
        label: 'magenta',
        style: { backgroundColor: 'rgba(255, 0, 255, 0.3)' }
    },
    {
        value: 'volcano',
        label: 'volcano',
        style: { backgroundColor: 'rgba(255, 0, 129, 0.3)' }
    },
    {
        value: 'purple',
        label: 'purple',
        style: { backgroundColor: 'rgba(128, 0, 128, 0.3)' }
    },
    {
        value: 'red',
        label: 'red',
        style: { backgroundColor: 'red' }
    }
];

const ColorSelect = ({onChange}) => {
    const handleChange = (value) => {
        onChange(value)
    };

    return(
        <Select
        defaultValue="magenta"
        onChange={handleChange}
        options={colorOptions}
        style={{width:'100%'}}
    />
    )
};

export default ColorSelect;