
import '../styles/Shared.css'

function Card({ identifier, trigger }) {

    return (
        <div onClick={(event) => trigger(event.target.id)}
            className="card" id={identifier}
        >
            <img></img>
            <h2>Card {identifier}</h2>
        </div>
    )
}

export default Card;