import { useEffect, useState } from "react"


const useFetch = (query) => {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        if (!query) return;

        const fetchData = async () => {
            try {
                setLoading(true)
                setStatus('fetching');
                const response = await fetch(
                    `https://api.github.com/users/${query}/repos`
                );
                const data = await response.json();
                setData(data.hits);
                setStatus('fetched');
            } catch(err) {
                setError(err)
            } finally {
            setLoading(false)
            }
        };

        fetchData();
    }, [query]);

    return { status, data, loading, error };
}

export default useFetch