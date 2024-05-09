
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

    const triggerShuffle = (cardIdentifier) => {
        setGame((oldInfo) => {
            if (oldInfo.cardsClicked.includes(cardIdentifier)) {
                return ({
                    score: 0,
                    highScore: oldInfo.score > oldInfo.highScore
                        ? oldInfo.score : oldInfo.highScore,
                    cardsClicked: [],
                    cardArray: shuffleCards(oldInfo.cardArray)
                });
            } else {
                return ({
                    score: oldInfo.score + 1,
                    highScore: oldInfo.highScore,
                    cardsClicked: [...oldInfo.cardsClicked, cardIdentifier],
                    cardArray: shuffleCards(oldInfo.cardArray)
                });
            }
        });
    }

    const makeCards = () => {
        const cardNumber = 5;

        let tempCards = [];

        for (let i = 0; i < cardNumber; i++) {
            tempCards.push(
                <Card key={i + 1} identifier={i + 1} trigger={triggerShuffle} />
            );
        }

        return shuffleCards(tempCards);
    }

    let [gameInfo, setGame] = useState(
        { score: 0, highScore: 0, cardsClicked: [""], cardArray: makeCards() }
    );

    return (
        <>
            <p>Score: {gameInfo.score}</p>
            <p>High Score: {gameInfo.highScore}</p>
            <div className="card-container">
                {gameInfo.cardArray}
            </div>
        </>
    )
}

export default CardContainer;