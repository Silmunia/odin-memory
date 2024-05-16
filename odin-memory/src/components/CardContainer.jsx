
import '../styles/CardContainer.css'
import { useEffect, useState } from 'react';
import Card from './Card'
import DataService from '../services/DataService';

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
        window.scrollTo(0, 0);
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

    const numberOfCards = 12;
    let [feedbackMessage, setFeedback] = useState("Loading");

    let [gameInfo, setGame] = useState({
        score: 0,
        highScore: 0,
        cardsClicked: [""],
        cardArray: []
    });

    useEffect(() => {
        const dataService = new DataService();

        dataService.fetchData(numberOfCards).then(dataArray => {
            if (dataArray.length < numberOfCards) {
                setFeedback("Unable to show images!");
            }

            setGame((oldInfo) => ({
                ...oldInfo,
                cardArray: makeCards(dataArray)
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