import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationMain } from '../Navigations';
// import './Header.css';


const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            <Link style={styles.link} to="/">
                <h1>OGame Explorer</h1>
            </Link>
            <NavigationMain/>
        </header>
    );
};

// eslint-disable-next-line
const styles = {
    header: {
        textAlign: "left" as const,
        borderBottom: "1px solid black",
        display: "flex",
        justifyContent: "space-between"
    },
    link: {
        textDecoration: "none",
        color: "inherit",
        marginLeft: "20px"
    }
};

export default Header;