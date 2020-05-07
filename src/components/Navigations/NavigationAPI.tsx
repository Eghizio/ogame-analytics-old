import React from 'react';
import _id from "../../utils/_id";
import NavigationLink from "./NavigationLink";

const NavigationAPI: React.FC = () => {
    const apis: string[] = ["Alliances", "Highscore", "Localization", "PlayerData", "Players", "ServerData", "Universe", "Universes"];

    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                {apis.map(page => 
                    <NavigationLink key={_id()} to={`/api/${page}`}>
                        {page}
                    </NavigationLink>)
                }
            </ul>
        </nav>
    );
};

// eslint-disable-next-line
const styles = {
    nav: {
        display: "inline-block",
        backgroundColor: "gray",
        borderRadius: "15px"
    },
    ul: {
        listStyleType: "none",
        width: "100px",
    },
    // li: {
    //     margin: "2px",
    //     backgroundColor: "black",
    //     textAlign: "left" as const,
    //     paddingLeft: "8px"
    // },
    // Link: {
    //     textDecoration: "none",
    //     color: "inherit"
    // }
};

export default NavigationAPI;