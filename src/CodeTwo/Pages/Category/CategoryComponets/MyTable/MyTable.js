import React from 'react';
import './MyTable.scss';


export default function MyTable({ data = [] }) { // Set default value for data, ensuring it's always an array.

    return (
        <div id='MyTable'>
            <table className='tableBox'>
                <thead>
                    <tr style={{ height: 60 }}>
                        {Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? // Check if there's any data
                        data.map((row, index) => (
                            <tr key={index} style={{ height: 50 }}>
                                {Object.values(row).map((value, idx) => <td key={idx}>{value}</td>)}
                            </tr>
                        ))
                        : <tr><td>No data available</td></tr> // Message to display when no data is available.
                    }
                </tbody>
            </table>
        </div>
    )
}