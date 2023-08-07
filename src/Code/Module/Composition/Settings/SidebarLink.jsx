import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export function SidebarLink({ to, children, theme, IsActive }) {

    const [hovered, setHovered] = useState(false);
    // 计算背景色

    const bgColor = IsActive
        ? theme.SidebarLinkHoverBgColor
        : hovered
            ? theme.SidebarLinkHoverBgColor
            : theme.SidebarLinkBgColor;
    return (
        <div
            className="SidebarLink"
            style={{ background: bgColor }}
        >
            <Link
                to={to}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{ textDecoration: 'none', background: bgColor }}
            >
                {children}
            </Link>
        </div>
    );
}