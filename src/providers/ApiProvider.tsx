import React, { createContext } from "react";
import { FetchStatus } from "../hooks/useFetch";
import { Alliances, Localization, Players, ServerData, Universe, Universes } from "../types/api";
import { Spinner } from "../components";
import useCachedAPI from "../hooks/useCachedAPI";


export interface API{
    alliances: FetchStatus<Alliances>["response"]
    localization: FetchStatus<Localization>["response"]
    players: FetchStatus<Players>["response"]
    serverData: FetchStatus<ServerData>["response"]
    universe: FetchStatus<Universe>["response"]
    universes: FetchStatus<Universes>["response"]
}

const ApiContext = createContext<API|null>(null);

export interface ApiProviderProps{
    children: any
}

// Maybe it should be called GlobalProvider and GlobalContext ?
const ApiProvider: React.FC<ApiProviderProps> = ({children}) => {
    const ApiData = useCachedAPI();

    if(!ApiData) return <Spinner/>
    return (
        <ApiContext.Provider value={ApiData}>
            {children}
        </ApiContext.Provider>
    );

};

export default ApiProvider;

export {
    ApiContext
};