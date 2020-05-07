import React from 'react';
// import './NavigationAnalytics.css';
import NavigationLink from "./NavigationLink";


const NavigationAnalytics: React.FC = () => {
    return (
        <nav style={styles.navigation}>
            <ul style={styles.list}>
                <NavigationLink to={"/analytics/planets"}>Planets Distribution</NavigationLink>
                <NavigationLink to={"/analytics/moons"}>Moons Distribution</NavigationLink>
                <NavigationLink to={"/analytics/allies"}>Allies Distribution</NavigationLink>
            </ul>
        </nav>
    );
};

// eslint-disable-next-line
const styles = {
    navigation: {
        width: "200px",
        padding: "10px",
        margin: "5px",
        backgroundColor: "#202040",
        borderRadius: "15px"
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: 0
    }
};

export default NavigationAnalytics;