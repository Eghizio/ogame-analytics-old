import React from 'react';
import { OGameAPI } from "../types/api";
import useFetch from '../hooks/useFetch';
import { JSONView, Loader, Error, Back } from '.';

export interface ExplorerAPIProps{
    url: string
}

const ExplorerAPI: React.FC<ExplorerAPIProps> = ({url}) => {
    const { loading, error, response } = useFetch<OGameAPI>(url);

    return (
        <main style={styles.main}>
            <Back/>
            <h2 style={styles.header}>{url}</h2>
            
            {(loading && !error && !response)
                ? <Loader message="Loading API"/>
                : (!loading && error && !response) 
                ? <Error error={error}/>
                : (!loading && !error && response)
                && <JSONView src={response} name={url}/>
            }
        </main>
    );
};

// eslint-disable-next-line
const styles = {
    main: {
        padding: "20px"
    },
    header: {
        color: "white"
    }
};

export default ExplorerAPI;