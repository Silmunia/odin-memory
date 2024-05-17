
import '../styles/Card.css'

function Card({ identifier, trigger, name, image }) {

    const uppercaseName = name.charAt(0).toUpperCase() + name.slice(1);

    let parsedName = uppercaseName;

    if (parsedName.length > 10) {
        const dashIndex = parsedName.indexOf('-');

        parsedName = parsedName.slice(0, dashIndex);
    }

    return (
        <div onClick={() => trigger(identifier)}
            className="card" id={identifier}
        >
            <img src={image}></img>
            <h3>{parsedName}</h3>
        </div>
    )
}

export default Card;