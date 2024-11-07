import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [error, setError] = useState("");

    const handleNameChange = (e) => setName(e.target.value);
    const handleColorChange = (e) => setColor(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.length < 3 || name.startsWith(" ") || color.length < 6) {
            setError("Por favor chequea que la información sea correcta.");
        } else {
            setError("");
            onSubmit(name, color);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            style={{
                backgroundColor: "#f0f0f0",
                padding: "20px",
                display: "inline-block",
            }}
        >
            <input
                type="text"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={handleNameChange}
            />
            <br />
            <input
                type="text"
                placeholder="Ingresa tu color favorito"
                value={color}
                onChange={handleColorChange}
            />
            <br />
            <button
                type="submit"
                style={{
                    backgroundColor: "#007bff",
                    color: "#fff",
                    padding: "10px",
                    border: "none",
                    cursor: "pointer",
                }}
            >
                ENVIAR
            </button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
};

export default Form;
