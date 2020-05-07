import React from 'react';
import Page from "./Page";
// import './NotFound.css';


const NotFound: React.FC = () => {
    return (
        <Page>
            <div style={styles.notFound}>
                <h2>Page Not Found</h2>
                <span>404</span><br/>
                <a style={styles.return} href="/">return</a>
            </div>
        </Page>
    );
};

// eslint-disable-next-line
const styles = {
    notFound: {
        textAlign: "center" as const,
        marginTop: "200px"
    },
    return: {
        display: "inline-block",
        color: "aquamarine"
    }
};

export default NotFound;