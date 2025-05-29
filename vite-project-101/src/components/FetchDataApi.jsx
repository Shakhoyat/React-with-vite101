import { useEffect } from 'react'

const FetchDataApi = () => {
    useEffect(() => {
        const fetchDataFromApi = async () => {
            const apiUrl = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await apiUrl.json();
            console.log("my data = ", data);
        }
        fetchDataFromApi();
    }, [])

    return (
        <div>FetchDataApi</div>
    )
}

export default FetchDataApi