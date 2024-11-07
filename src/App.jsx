import "./App.css";
import { useState } from "react";
import Card from "./Components/Card";
import Form from "./Components/Form";

function App() {
    const [userData, setUserData] = useState(null);

    const handleFormSubmit = (name, color) => {
        setUserData({ name, color });
    };
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Elige un color</h1>
            <Form onSubmit={handleFormSubmit} />
            {userData && <Card name={userData.name} color={userData.color} />}
        </div>
    );
}

export default App;
