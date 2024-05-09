
import { useState } from 'react';
import Card from './Card'

function CardContainer() {

    const shuffleCards = (cards) => {
        let copyCards = [...cards];

        for (let i = copyCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [copyCards[i], copyCards[j]] = [copyCards[j], copyCards[i]];
        }

        return copyCards;
    }

    const triggerShuffle = () => {
        setCards([...shuffleCards(cardArray)]);
    }

    const makeCards = () => {
        const cardNumber = 5;

        let tempCards = [];

        for (let i = 0; i < cardNumber; i++) {
            tempCards.push(<Card key={i} test={i + 1} trigger={triggerShuffle} />);
        }

        return shuffleCards(tempCards);
    }

    let [cardArray, setCards] = useState(makeCards());
    let score = 0;
    let highScore = 0;

    return (
        <>
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
            <div className="card-container">
                {cardArray}
            </div>
        </>
    )
}

export default CardContainer;