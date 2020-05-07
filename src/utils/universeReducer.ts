import { Universe } from "../types/api";

const universeReducer = (universe: Universe["planets"] ,galaxiesInUniverse: number) => {
    return universe.reduce((acc: any[], p) => {
        const galaxyNumber = Number(p.coords.substring(0,1));
        acc[galaxyNumber-1].push(p);
        return acc;
    },  Array.from(Array(galaxiesInUniverse), () => []));
};

export default universeReducer;