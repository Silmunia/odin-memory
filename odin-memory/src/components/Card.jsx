
import '../styles/Shared.css'

function Card({ identifier, trigger, name, image }) {

    return (
        <div onClick={(event) => trigger(event.target.id)}
            className="card" id={identifier}
        >
            <img src={image}></img>
            <h2>{name}</h2>
        </div>
    )
}

export default Card;