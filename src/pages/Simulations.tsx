import React from 'react';
import Page from './Page';
// import './Simulations.css';


const Simulations: React.FC = () => {
    return (
        <Page>
            <section style={styles.section}>
                <h2>Simulations</h2>
                <p>Welcome to simulations page. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, mollitia?</p>
            </section>
        </Page>
    );
};

// eslint-disable-next-line
const styles = {
    section: {
        textAlign: "center" as const
    }
};

export default Simulations;