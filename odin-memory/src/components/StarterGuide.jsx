import '../styles/StarterGuide.css'
import { useState } from 'react';

function StarterGuide() {

    const DIALOG_KEY = "DIALOG_KEY";
    const dialogSettings = localStorage.getItem(DIALOG_KEY) ?? true;

    let [dialogIsOpen, setDialog] = useState(Boolean(dialogSettings));

    const setDialogDisplay = (checkbox) => {
        localStorage.setItem(DIALOG_KEY, checkbox.checked ? "" : "true");
    }

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
                    <div className="dialog-input">
                        <label><input type="checkbox" onChange={(event) => setDialogDisplay(event.target)}></input>Do not show this message again</label>
                        <button onClick={() => { setDialog(false) }}>Play!</button>
                    </div>
                </form>
            </dialog>
        </>
    );
}

export default StarterGuide