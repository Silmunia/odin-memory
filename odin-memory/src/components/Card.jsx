
import '../styles/Shared.css'

function Card({ test, trigger }) {

    return (
        <div onClick={trigger} className="card">
            <img></img>
            <h2>Card {test}</h2>
        </div>
    )
}

export default Card;