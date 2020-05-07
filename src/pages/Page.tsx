import React from 'react';
import { Header, Footer } from '../components';
// import './Page.css';

export interface PageProps{
    children?: React.ReactNode
    style?: React.CSSProperties
}

// Page Layout
const Page: React.FC<PageProps> = ({style, children}) => {
    return (
        <div style={styles.page}>
            <Header/>
            <main style={{...styles.content, ...style}}>
                {children  || "Empty Page"}
            </main>
            <Footer/>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    page: {
        position: "relative" as const,
        minHeight: "100vh",
        minWidth: "100vw",
    },
    content: {
        // width: "100%",
        // display: "flex",
        // flexDirection: "column" as const,
        // justifyContent: "center",
        // alignItems: "center", 
        padding: "30px"
    }
};

export default Page;