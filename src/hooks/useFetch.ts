import { useState, useEffect } from "react";

export interface FetchStatus<T>{
    loading: boolean
    error: Error | null
    response: T | null
}

const useFetch = <T>(url: string): FetchStatus<T> => {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error|null>(null);
    const [response, setResponse] = useState<T|null>(null);

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        fetch(url)
            .then(res => res.json())
            .then(json => !signal.aborted && setResponse(json))
            .catch(err => !signal.aborted && setError(err))
            .finally(() => !signal.aborted && setLoading(false));

        return () => { abortController.abort(); };
    }, [url]);

    const status: FetchStatus<T> = { loading, error, response };

    return status;
};

export default useFetch;