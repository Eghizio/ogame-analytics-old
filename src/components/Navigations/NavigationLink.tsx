import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './NavigationLink.css';

export interface NavigationLinkProps{
    to: string
    children: string
}

const NavigationLink: React.FC<NavigationLinkProps> = ({to, children}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <li
        style={styles.li}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <Link style={{...styles.link, backgroundColor: isHovered? "#543864": "transparent"}} to={to.toLowerCase()}>
                {children}
            </Link>
        </li>
    );
};

// eslint-disable-next-line
const styles = {
    li: {
        margin: "2px",
        textAlign: "left" as const,
        paddingLeft: "8px"
    },
    link: {
        textDecoration: "none",
        color: "inherit",
        borderRadius: "5px",
        padding: "2px"
    }
};

export default NavigationLink;