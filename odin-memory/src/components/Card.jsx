
import '../styles/Card.css'

function Card({ identifier, trigger, name, image }) {

    const uppercaseName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div onClick={() => trigger(identifier)}
            className="card" id={identifier}
        >
            <img src={image}></img>
            <h3>{uppercaseName}</h3>
        </div>
    )
}

export default Card;