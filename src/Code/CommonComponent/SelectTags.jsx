import React, { useState, useEffect } from 'react'
import { Select, Tag } from 'antd';
import { getMark } from '../Api/Api';

export default function SelectTags({ getSelectMark, currentArtical }) {
    const [options, setOptions] = useState([]);
    const [selectedValues, setSelectedValues] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMark();
            // 处理数据,转换为 options 格式
            const opts = data.map(item => ({
                label: item.Value,
                value: item.Id,
                color: item.Color
            }))
            setOptions(opts);
        }

        fetchData();
    }, []);

    useEffect(() => {
        if (currentArtical&&currentArtical.Mark) {
            const marks = currentArtical.Mark.split("/").map(x => parseInt(x));
            setSelectedValues(marks);
        }

    }, [currentArtical]);

    const handleChange = (value) => {
        setSelectedValues(value);
        getSelectMark(value)
    }
    const tagRender = (props) => {
        const { label, value, closable, onClose } = props;
        const option = options.find(opt => opt.value === value);
        const onPreventMouseDown = (event) => {
            event.preventDefault();
            event.stopPropagation();
        };
        return (
            <Tag
                color={option? option.color : ''}
                value={value}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{
                    marginRight: 3,
                }}
            >
                {label}
            </Tag>
        );
    };
    return (
        <Select
            mode="multiple"
            tagRender={tagRender}
            value={selectedValues}
            onChange={handleChange}
            style={{
                width: '100%',
            }}
            options={options}
        />
    )
}