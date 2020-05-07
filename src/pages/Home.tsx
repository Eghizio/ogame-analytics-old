import React from 'react';
// import './Home.css';
import Page from './Page';


const Home: React.FC = () => {
    return (
        <Page style={styles.main}>
            <section style={styles.section}>
                <h2>Home</h2>
                <p>Welcome to OGame Explorer home page. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, mollitia?</p>
            </section>
        </Page>
    );
};

// eslint-disable-next-line
const styles = {
    main: {
        textAlign: "center" as const,
    },
    section: {
        textAlign: "center" as const
    }
};

export default Home;