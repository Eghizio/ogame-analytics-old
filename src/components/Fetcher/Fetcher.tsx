import React from 'react';
// import './Fetcher.css';
import useFetch from '../../hooks/useFetch';
import Loader from "./Loader";
import Error from "./Error";


export interface FetcherProps{
    url: string
    children: any
}

const Fetcher: React.FC<FetcherProps> = ({url, children}) => {
    const { loading, error, response } = useFetch<any>(url);
    return (
        <>
            {(loading && !error && !response)
                ? <Loader message="Loading data..."/>
                : (!loading && error && !response) 
                ? <Error error={error}/>
                : (!loading && !error && response)
                && children(response)}
        </>
    );
};

// eslint-disable-next-line
const styles = {

};

export default Fetcher;