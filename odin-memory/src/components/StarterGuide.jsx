import '../styles/StarterGuide.css'
import { useState } from 'react';

function StarterGuide() {

    let [dialogIsOpen, setDialog] = useState(true);

    return (
        <>
            <div className="dialog-container" hidden={!dialogIsOpen}></div>
            <dialog open={dialogIsOpen}>
                <form method="dialog">
                    <h2>Poké-Memory Instructions</h2>
                    <ol>
                        <li>Click on as many Pokémon as you can without clicking twice on the same Pokémon.</li>
                        <li>If you make a repeated click, the game ends.</li>
                        <li>Reloading the page will make cards with different Pokémon.</li>
                        <li>Go for the high score!</li>
                    </ol>
                    <button onClick={() => { setDialog(false) }}>Play!</button>
                </form>
            </dialog>
        </>
    );
}

export default StarterGuide