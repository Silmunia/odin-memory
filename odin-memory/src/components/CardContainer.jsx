
import { useEffect, useState } from 'react';
import '../styles/CardContainer.css'
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

    const makeRandomIds = (quantity) => {
        const identifierArray = [];

        while (identifierArray.length < quantity) {
            const randomId = Math.ceil(Math.random() * 493);

            if (identifierArray.includes(randomId)) {
                continue;
            }

            identifierArray.push(randomId);
        }

        return identifierArray;
    }

    const fetchData = async (cardNumber) => {
        const cardData = [];

        const cardIdentifiers = makeRandomIds(cardNumber);

        for (let i = 0; i < cardNumber; i++) {
            const fetchResult = await fetch(`https://pokeapi.co/api/v2/pokemon/${cardIdentifiers[i]}`);

            if (fetchResult.status != 200) {
                setFeedback("Unable to show images!");
                return [];
            }

            const resultJSON = await fetchResult.json();

            cardData.push({
                name: resultJSON.name,
                image: resultJSON.sprites.front_default
            });
        }

        return cardData;
    }

    const numberOfCards = 12;
    let [feedbackMessage, setFeedback] = useState("Loading");

    let [gameInfo, setGame] = useState({
        score: 0,
        highScore: 0,
        cardsClicked: [""],
        cardArray: []
    });

    useEffect(() => {
        fetchData(numberOfCards).then(data => {
            setGame((oldInfo) => ({
                ...oldInfo,
                cardArray: makeCards(data)
            }));
        });
    }, []);

    return (
        <>
            <section className="score-container">
                <p>Score: {gameInfo.score}</p>
                <p>High Score: {gameInfo.highScore}</p>
            </section>
            <section className="card-container">
                {gameInfo.cardArray.length > 0
                    ? gameInfo.cardArray
                    : (<h3 className="message-label">{feedbackMessage}</h3>)
                }
            </section>
        </>
    )
}

export default CardContainer;