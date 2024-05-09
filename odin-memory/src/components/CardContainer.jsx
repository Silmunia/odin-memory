
import Card from './Card'

function CardContainer() {

    const makeCards = () => {
        const cardNumber = 5;

        const cardArray = [];

        for (let i = 0; i < cardNumber; i++) {
            cardArray.push(<Card key={i} />);
        }

        return cardArray;
    }

    return (
        <div className="card-container">
            {makeCards()}
        </div>
    )
}

export default CardContainer;