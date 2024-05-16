export default class DataService {

    makeRandomIds(quantity) {
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

    async fetchData(cardNumber) {
        const cardData = [];

        const cardIdentifiers = this.makeRandomIds(cardNumber);

        for (let i = 0; i < cardNumber; i++) {
            const fetchResult = await fetch(`https://pokeapi.co/api/v2/pokemon/${cardIdentifiers[i]}`);

            if (fetchResult.status != 200) {
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
}