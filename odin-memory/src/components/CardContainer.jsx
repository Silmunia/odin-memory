
import { useState } from 'react';
import Card from './Card'

function CardContainer() {

    const shuffleCards = (cards) => {
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }

    const triggerShuffle = () => {
        let copyCards = [...cardArray];

        shuffleCards(copyCards);

        setCards([...copyCards]);
    }

    const makeCards = () => {
        const cardNumber = 5;

        let tempCards = [];

        for (let i = 0; i < cardNumber; i++) {
            tempCards.push(<Card key={i} test={i + 1} trigger={triggerShuffle} />);
        }

        shuffleCards(tempCards);

        return tempCards;
    }

    let [cardArray, setCards] = useState(makeCards());

    return (
        <div className="card-container">
            {cardArray}
        </div>
    )
}

export default CardContainer;