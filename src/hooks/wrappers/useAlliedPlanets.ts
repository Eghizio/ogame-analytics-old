import { useState, useEffect } from "react";


const useAlliedPlanets = (allianceName: string) => {
    const [alliedPlanets, setAlliedPlanets] = useState<any[]|null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        (async () => {
            const ids = await fetchAlliancePlayerIDs(allianceName);
            const allied = await fetchAlliedPlanets(ids);

            if(!signal.aborted) setAlliedPlanets(allied);
        })();

        return () => { abortController.abort(); };
    }, [allianceName]);

    return alliedPlanets;
};

const fetchAlliancePlayerIDs = async (allianceName: string) => {
    const alliedIDs: string[] = await fetch("/api/alliances")
        .then(res => res.json())
        .then(json => json.alliances.filter((a: any) => a.name === allianceName)[0].players.map((p: any) => p.id))
        .catch(err => console.warn(err));

    return alliedIDs;
};

const fetchAlliedPlanets = async (alliedPlayers: string[]) => {
    const alliedPlanets: any[] = await fetch("/api/universe")
        .then(res => res.json())
        .then((json: any) => json.planets.filter((p: any) => alliedPlayers.includes(p.player)))
        .catch(err => console.warn(err));

    return alliedPlanets;
};


export default useAlliedPlanets;