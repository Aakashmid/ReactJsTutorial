import React, { useEffect } from 'react'

const useFetch = ( url, options={} ) => {

    const [data, setData] = React.useState(null);
    const [pending, setPending] = React.useState(true)
    const [error, setError] = React.useState(null);

    async function fetchData() {
        setPending(true);
        try {
            const response = await fetch(url, { ...options });
            if (!response.ok) throw new Error(response.statusText);

            const result = await response.json();
            setData(result);
            setError(null);
            setPending(false);
        } catch (e) {
            setError(`${e}. Some Error Occured`);
            setPending(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);


    return { data, pending, error };
}

export default useFetch;