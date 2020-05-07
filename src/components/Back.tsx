import React from 'react';
// import './Back.css';
import { Link } from 'react-router-dom';


const Back: React.FC = () => {
    return (
        <div>
            <Link style={styles.link} to="/">back</Link>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    link: {
        color: "inherit",
        textDecoration: "none",
        padding: "2px",
        margin: "5px"
    }
};

export default Back;