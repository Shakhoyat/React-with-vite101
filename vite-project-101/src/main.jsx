import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Moneystate from "./context/Moneystate.jsx";
// Create a root element and render the App component
createRoot(document.getElementById('root')).render(
    <Moneystate>
        <App />
    </Moneystate>,)