
import '../styles/Shared.css'

function Card({ identifier, trigger, name, image }) {

    const uppercaseName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div onClick={(event) => trigger(event.target.id)}
            className="card" id={identifier}
        >
            <img src={image}></img>
            <h2>{uppercaseName}</h2>
        </div>
    )
}

export default Card;