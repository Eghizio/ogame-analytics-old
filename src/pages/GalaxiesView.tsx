import React from 'react';
// import './GalaxiesView.css';
import Page from "./Page";
import { Fetcher, SystemDistribution, Back } from "../components"; // 
import _id from '../utils/_id';
import { Universe } from '../types/api';


const GalaxiesView: React.FC = () => {
    return (
        <Page>
            <Back/>
            <Fetcher url="/api/universe">
                {(response: Universe) => {
                    const serverData = { galaxies: 8, systems: 499 }; //fetch from universum settings /api/serverdata { galaxies, systems } //need to elevate that to context
                
                    const universe = response.planets.reduce((acc: any[], p) => {
                        const galaxyNumber = Number(p.coords.substring(0,1));
                        acc[galaxyNumber-1].push(p);
                        return acc;
                    },  Array.from(Array(serverData.galaxies), () => []));


                    const planets = universe.map((system: any, i: number) => 
                        <SystemDistribution key={i+_id()} title={`Galaxy ${i+1}`} system={system}/>);

                    const moons = universe.map((ar: any) => ar.filter((p: any) => p.hasOwnProperty("moon"))).map((system: any, i: number) => 
                        <SystemDistribution key={i+_id()} title={`Galaxy ${i+1}`} system={system}/>);


                    return (
                        <div style={styles.columns}>
                            <div style={styles.col}>
                                <h3>Planets</h3>
                                {planets}
                            </div>
                            <div style={styles.col}>
                                <h3>Moons</h3>
                                {moons}
                            </div>
                        </div>
                    );
                }}
            </Fetcher>
        </Page>
    );
};

// eslint-disable-next-line
const styles = {
    columns: {
        display: "flex"
    },
    col: {
        width: "50%",
        textAlign: "center" as const
    }
};

export default GalaxiesView;