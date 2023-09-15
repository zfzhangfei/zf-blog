import React from "react";
import ClipboardJS from 'clipboard';

// 复制代码的按钮
export default function CodeCopyBtn({ children }) {
    const [copyOk, setCopyOk] = React.useState(false);
    const iconColor = copyOk ? '#0af20a' : '#ddd';
    const icon = copyOk ? 'fa-check-square' : 'fa-copy';

    const handleClick = () => {
        // 创建剪贴板实例
        const clipboard = new ClipboardJS('.code-copy-btn', {
            text: () => children[0].props.children[0]
        });
        // 监听复制成功事件
        clipboard.on('success', () => {
            setCopyOk(true);
            setTimeout(() => {
                setCopyOk(false);
            }, 500);
        });
        
        // 销毁剪贴板实例
        return () => {
            clipboard.destroy();
        };
    }

    
    return (
        <div className="code-copy-btn" onClick={handleClick}>
            {/* public/index.html 文件中引入 Font Awesome JavaScript 库 */}
            <i className={`fas ${icon}`} style={{ color: iconColor }} />
        </div>
    )
}