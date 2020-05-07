import React from 'react';
// import './SystemOverview.css';
import Plot from "react-plotly.js";
import COLORS from "../constants/colors"; // prolly just for dev xd

export interface SystemOverviewProps{
    title: string
    system: any[]
    alliedSystem: any[]
}

// updated SystemDistribution component
const SystemOverview: React.FC<SystemOverviewProps> = ({title, system, alliedSystem}) => {
    const serverData = { galaxies: 8, systems: 499 }; // at this point it should be elevated to some Context global state

    const systemReducer = (sys: any[], name: string, color?: string) => {
        const systemData = sys.map(p => Number(p.coords.split(":")[1])).reduce((acc: number[], system: number) => {
            acc[system-1] += 1;
            return acc;
        }, new Array(serverData.systems).fill(0) );

        const reducedSystem = {
            name: name,
            x: systemData.map((_, i) => i),
            y: systemData,
            type: "bar" as const,
            ...(color && { marker: { color: color } })
        };

        return reducedSystem;
    };

    const moons = system.filter(p => p.hasOwnProperty("moon"))
    const alliedMoons = alliedSystem.filter(p => p.hasOwnProperty("moon"))

    const planetsInSystem = systemReducer(system, "Planets", COLORS.BLUE);
    const moonsInSystem = systemReducer(moons, "Moons", COLORS.PURPLE);
    const alliedPlanetsInSystem = systemReducer(alliedSystem, "Allied Planets", COLORS.ORANGE);
    const alliedMoonsInSystem = systemReducer(alliedMoons, "Allied Moons", COLORS.RED);
    console.log(alliedMoonsInSystem)

    const data = [
        planetsInSystem,
        moonsInSystem,
        alliedPlanetsInSystem,
        alliedMoonsInSystem
    ];

    const layout = {
        title: title,
        font: { color: "#40b8e9" },
        paper_bgcolor: "#202040",
        plot_bgcolor: "#202040",
        barmode: "overlay" as const
    };

    const config = {
        responsive: true
    };

    return (
        <div style={styles.container}>
            <Plot style={styles.plot} data={data} layout={layout} config={config}/>
        </div>
    );
};

// eslint-disable-next-line
const styles = {
    container: {
        width: "90%",
        backgroundColor: "#202040",
        padding: "10px",
        margin: "5px",
        borderRadius: "10px"
    },
    plot: {
        width: "100%"
    }
};

export default SystemOverview;