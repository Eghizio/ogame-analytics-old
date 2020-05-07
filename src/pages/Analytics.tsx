import React from 'react';
// import './Analytics.css';
import Page from './Page';
import { NavigationAnalytics } from '../components/Navigations';
import { ApiContext } from '../providers/ApiProvider';


const Analytics: React.FC = () => {
    const ctx = React.useContext(ApiContext);
    return (
        <Page>
            <NavigationAnalytics/>
            <section style={styles.section}>
                <h2>Analytics</h2>
                <p>Welcome to analytics page. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, mollitia?</p>
                <button onClick={() => console.log(ctx)}>api</button>
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

export default Analytics;