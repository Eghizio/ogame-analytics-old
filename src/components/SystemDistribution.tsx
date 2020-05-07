import React from 'react';
// import './SystemDistribution.css';
import Plot from "react-plotly.js";

export interface SystemDistributionProps{
    title: string
    system: any[]
}

const SystemDistribution: React.FC<SystemDistributionProps> = ({title, system}) => {
    const serverData = { galaxies: 8, systems: 499 }; // at this point it should be elevated to some Context global state

    const systemReducer = (_galaxy: any[], systemSize: number) => {
        return _galaxy.map(p => Number(p.coords.split(":")[1])).reduce((acc: number[], system: number) => {
            acc[system-1] += 1;
            return acc;
        }, new Array(systemSize).fill(0) );
    };

    // Planets
    const planetsInSystem = systemReducer(system, serverData.systems);

    // Moons
    const moons = system.filter(p => p.hasOwnProperty("moon"))
    // eslint-disable-next-line
    const moonsInSystem = systemReducer(moons, serverData.systems);

    const data = [{
        name: "Planets",
        x: planetsInSystem.map((el, i) => i+1),
        y: planetsInSystem,
        type: "bar" as const
    },
    {
        name: "Moons",
        x: moonsInSystem.map((el, i) => i+1),
        y: moonsInSystem,
        type: "bar" as const
    }
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

export default SystemDistribution;