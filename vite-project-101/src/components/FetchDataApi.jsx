import { useEffect } from 'react'
import React, { useState } from 'react'
const FetchDataApi = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        const fetchDataFromApi = async () => {
            const apiUrl = await fetch("https://jsonplaceholder.typicode.com/todos");
            const data = await apiUrl.json();
            setApiData(data);
            // console.log("my data = ", data);
        }
        fetchDataFromApi();
    }, [])

    return (
        <div style={{ padding: "30px", background: "linear-gradient(135deg, #ece9e6, #ffffff)", minHeight: "100vh" }}>
            <h2 style={{ textAlign: "center", color: "#333", marginBottom: "24px" }}>Todo List</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
                {apiData.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            background: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                            padding: "18px 24px",
                            width: "260px",
                            borderLeft: item.completed ? "6px solid #4caf50" : "6px solid #f44336",
                            transition: "transform 0.2s",
                        }}
                    >
                        <h3 style={{ color: "#222", marginBottom: "10px", fontSize: "1.1rem" }}>{item.title}</h3>
                        <p style={{ color: item.completed ? "#4caf50" : "#f44336", fontWeight: "bold" }}>
                            {item.completed ? "Completed" : "Not Completed"}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FetchDataApi