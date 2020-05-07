import React from 'react';
// import './Navigation.css';
import NavigationLink from './NavigationLink';

const NavigationMain: React.FC = () => {
    return (
        <nav style={styles.navigation}>
            <ul style={styles.list}>
                <NavigationLink to="/">Home</NavigationLink>
                <NavigationLink to="/api">API</NavigationLink>
                <NavigationLink to="/analytics">Analytics</NavigationLink>
                <NavigationLink to="/simulations">Simulations</NavigationLink>
                {/* Account and Settings Icon */}
            </ul>
        </nav>
    );
};

// eslint-disable-next-line
const styles = {
    navigation: {
        textAlign: "center" as const,
        padding: "10px",
        marginRight: "50px"
    },
    list: {
        listStyle: "none",
        display: "flex"
    }
};

export default NavigationMain;