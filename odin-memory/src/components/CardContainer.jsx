
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

    const makeCards = (cardNumber) => {
        let tempCards = [];

        for (let i = 0; i < cardNumber; i++) {
            tempCards.push(
                <Card key={i + 1} identifier={i + 1} trigger={triggerShuffle} name="Jolteon" image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png" />
            );
        }

        return shuffleCards(tempCards);
    }

    const numberOfCards = 9;
    let [gameInfo, setGame] = useState({
        score: 0,
        highScore: 0,
        cardsClicked: [""],
        cardArray: makeCards(numberOfCards)
    });

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