
import { useEffect, useState } from 'react';
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

    const makeCards = (cardData) => {
        let tempCards = [];

        for (let i = 0; i < cardData.length; i++) {
            tempCards.push(
                <Card key={i + 1} identifier={i + 1} trigger={triggerShuffle} name={cardData[i].name} image={cardData[i].image} />
            );
        }

        return shuffleCards(tempCards);
    }

    const fetchData = async (cardNumber) => {
        const cardData = [];

        for (let i = 0; i < cardNumber; i++) {
            const randomId = Math.floor(Math.random() * 300);

            const fetchResult = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);

            const resultJSON = await fetchResult.json();

            cardData.push({
                name: resultJSON.name,
                image: resultJSON.sprites.front_default
            });
        }

        return cardData;
    }

    const numberOfCards = 12;

    let [gameInfo, setGame] = useState({
        score: 0,
        highScore: 0,
        cardsClicked: [""],
        cardArray: []
    });

    useEffect(() => {
        fetchData(numberOfCards).then(data => {
            setGame({
                score: 0,
                highScore: 0,
                cardsClicked: [""],
                cardArray: makeCards(data)
            });
        });
    }, []);

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