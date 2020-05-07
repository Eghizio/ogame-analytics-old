import { useState, useEffect } from "react";
import { Universe, Planet } from "../../types/api";


const useUniverse = () => {
    const [universe, setUniverse] = useState<(Planet & { player: string})[]|null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch("/api/universe")
            .then(res => res.json())
            .then((json: Universe) => !signal.aborted && setUniverse(json.planets))
            .catch(err => !signal.aborted && console.warn(err));

        return () => { abortController.abort(); };
    },[]);

    return universe;
};


export default useUniverse;