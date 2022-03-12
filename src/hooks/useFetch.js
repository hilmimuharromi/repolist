import { useEffect, useState } from "react"

const useFetch = (query) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(
                    `https://api.github.com/users/${query}/repos?sort=updated`, {
                        headers: {
                            accept: 'application/vnd.github.v3+json'
                        }
                    }
                );
                if (response.status === 200) {
                    const data = await response.json();
                    setData({
                        status: 'Found',
                        data: data
                    })
                } else {
                    console.log('masuuuk')
                    setData({
                        status: 'Not Found',
                        data: []
                    })
                }
            } catch (err) {
                console.log('error', err)
                setError(err)
            } finally {
                setLoading(false)
            }
        };

        fetchData();
    }, [query]);

    return { data, loading, error };
}

export default useFetch