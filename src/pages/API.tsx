import React from 'react';
// import './API.css';
import Page from "./Page";
import { NavigationAPI } from "../components";


const API: React.FC = () => {
    return (
        <Page>
            <NavigationAPI/>
            <section style={styles.section}>
                <h2>API</h2>
                <p>Welcome to API page. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, mollitia?</p>
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

export default API;