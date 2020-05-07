import React from 'react';
// import './Footer.css';


const Footer: React.FC = (props) => {
    return (
        <footer style={styles.footer}>
                <span>Footer</span>
        </footer>
    );
};

// eslint-disable-next-line
const styles = {
    footer: {
        position: "absolute" as const,
        bottom: "0",
        left: "0",
        right: "0",
        display: "inline-block",
        textAlign: "center" as const,
        padding: "10px"
    }
};

export default Footer;