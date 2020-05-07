import React from 'react';
// import './Allies.css';
import Page from './Page';
// import { ApiContext } from "../providers/ApiProvider"
import useUniverse from "../hooks/wrappers/useUniverse";
import useAlliedPlanets from '../hooks/wrappers/useAlliedPlanets';
import universeReducer from '../utils/universeReducer';
import { Back, Spinner, SystemOverview } from '../components';


//fetch from universum settings /api/serverdata { galaxies, systems } //need to elevate that to context
const serverData = { galaxies: 8, systems: 499 }; 

const Allies: React.FC = () => {
    let systems: any[]|null = useUniverse();
    // const api = React.useContext(ApiContext);
    // console.log(api)
    let alliedSystems: any[]|null = useAlliedPlanets("Pingwiny Z Madagaskaru");

    if(systems && alliedSystems){
        systems = universeReducer(systems, serverData.galaxies);
        alliedSystems = universeReducer(alliedSystems, serverData.galaxies);
    }

    return (
        <Page>
            <Back/>
            <div style={styles.col}>
                <h3>Allies</h3>
                {
                    systems && alliedSystems
                    ? alliedSystems.map((alliedSystem: any, i: number) => 
                        <SystemOverview key={i} title={`Galaxy ${i+1}`} system={systems![i]} alliedSystem={alliedSystem}/>)
                    : <Spinner/>
                }
            </div>
        </Page>
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
    },
    col: {
        textAlign: "center" as const
    }
};


export default Allies;