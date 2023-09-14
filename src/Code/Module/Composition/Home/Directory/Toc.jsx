import React from 'react'

export default function Toc({ toc }) {
    console.log(toc, 'cccccccccccccc');
    return (
        <div className="toc">
            {toc.map(item => (
                <a className='DirectoryItem' key={item.id} href={`#${item.id}`}>
                    <p style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width:200
                    }} title={item.text}>{item.text}</p>
                </a>
            ))}
        </div>
    )
}




// import React from 'react';
// import { Anchor } from 'antd';

// export default function Toc({ toc }) {
//     console.log(toc, 'cccccccccccccc');
//     let tocList = toc.map((item, index) => {
//         return ({
//             key: index + 1,
//             href: `#${item.id}`,
//             title: item.text,
//         })
//     })
//     console.log(tocList, 'sssssssss');
//     return (
//         <div className="toc">
//             <Anchor
//                 affix={false}
//                 items={tocList}
//             />
//         </div>
//     )
// }