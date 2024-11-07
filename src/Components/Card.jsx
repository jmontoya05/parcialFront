// eslint-disable-next-line react/prop-types
const Card = ({ name, color }) => {
    return (
        <div
            style={{
                marginTop: "20px",
                padding: "10px",
                border: "1px solid #000",
            }}
        >
            <h2>Hola {name}!</h2>
            <p>Sabemos que tu color favorito es:</p>
            <div
                style={{
                    backgroundColor: "red",
                    color: "#fff",
                    padding: "10px",
                    borderRadius: "5px",
                }}
            >
                {color}
            </div>
        </div>
    );
};

export default Card;
