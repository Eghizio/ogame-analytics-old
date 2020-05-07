import { useState, useEffect } from "react";
// eslint-disable-next-line
import useLocalStorage from "./useLocalStorage";
import { API } from "../providers/ApiProvider";
import { OGameAPI } from "../types/api";



// eslint-disable-next-line
const defaultAPI: API = {
    alliances: null,
    localization: null,
    players: null,
    serverData: null,
    universe: null,
    universes: null
};

// eslint-disable-next-line
const isValidAPI = (apiObj: Object): apiObj is API => {
    return  (apiObj as API).alliances !== undefined
        &&  (apiObj as API).localization !== undefined
        &&  (apiObj as API).players !== undefined
        &&  (apiObj as API).serverData !== undefined
        &&  (apiObj as API).universe !== undefined
        &&  (apiObj as API).universes !== undefined;
};


// temp client side caching for development. need to implement it server side (just storing it localy not to spin up server every time i wanna dev. front)
// prolly will rewrite it with implementation of Cache Web API, maybe even service workers
const useCachedAPI = () => {
    // const [cachedApi, setCachedApi] = useLocalStorage("ogame-api", defaultAPI);
    const [cachedApi, setCachedApi] = useState<any>(defaultAPI);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        // if(Object.values(cachedApi).every(prop => prop !== null) && isValidAPI(cachedApi)) //fails for some reason
        if(!Object.values(cachedApi).every(prop => prop !== null)){
            // return cachedApi; //now with useEffect, ommitting conditional hook usage

            console.log("Using Cache");


            // TODO: cache.put(url, responseFromLocal)

            try{ // temporary err handling, maybe i dont wanna delete that fetchAPI functionality xd
                // [Fetch] and Cache data
                (async () => {
                    const base_url = "http://localhost:3000";
                    const urls = ["/api/alliances", "/api/localization", "/api/players", "/api/serverData", "/api/universe", "/api/universes"];

                    caches.open("ogame-api").then(async cache => {
                        const existingCaches = await cache.keys();
                        const cachedUrls = existingCaches.map(c => c.url);

                        for(const url of urls)
                            if(!cachedUrls.includes(base_url+url)) cache.add(url);
                        
                        // cache.addAll(urls);
                    });
                    
                    // assuming that its cached by these keys
                    const cachedData = await Promise.all(urls.map(url => caches.match(url).then(res => res && res.json()).then((res: OGameAPI) => ({[url.split("/").pop()!]: res}))));
                    const cachedObj = cachedData.reduce((acc, el) => ({ ...acc, ...el }), {});

                    // returnes incomplete data before the missing data gets refetched to cache
                    
                    if(!signal.aborted) setCachedApi(cachedObj);
                })();

            }catch(error){

                console.warn("Failed to retrieve cache. ", error.message);
                // Fetch data
                (async () => {
                    const apiData = await fetchAPI();
                    if(!signal.aborted) setCachedApi(apiData);
                })();
                
            }
        }

        return () => {
            abortController.abort();
        };
    });

    return cachedApi;
};

// eslint-disable-next-line
const fetchAPI = async () => {
    const alliances = await fetch("/api/alliances").then(res => res.json());
    const localization = await fetch("/api/localization").then(res => res.json());
    const players = await fetch("/api/players").then(res => res.json());
    const serverData = await fetch("/api/serverData").then(res => res.json());
    const universe = await fetch("/api/universe").then(res => res.json());
    const universes = await fetch("/api/universes").then(res => res.json());

    const API = { alliances, localization, players, serverData, universe, universes };
    
    return API;
};


export default useCachedAPI;