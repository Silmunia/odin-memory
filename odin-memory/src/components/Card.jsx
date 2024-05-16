
import '../styles/Card.css'

function Card({ identifier, trigger, name, image }) {

    const uppercaseName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div onClick={() => trigger(identifier)}
            className="card" id={identifier}
        >
            <img src={image}></img>
            <h2>{uppercaseName}</h2>
        </div>
    )
}

export default Card;