import React, {useState} from 'react';
import './App.css';

// 1. Eerst section en vier article elementen aanmaken met h4, twee buttons p element. Daaronder maar binnen section nog een button van type reset. Info statisch invullen. Afbeeldingen importeren.
// 2. Buttons met onClick maken, 3 functies aanmaken voor nu met console log om te kijken of het werkt.
// 3. Nu werkend krijgen dat ze bij de counter 1 optellen, 1 aftrekken of alles resetten. Onder 0 mag niet. State gebruiken.


function App() {

    const [countStrawberry, setCountStrawberry] = useState(0);
    const [countBanana, setCountBanana] = useState(0);
    const [countApple, setCountApple] = useState(0);
    const [countKiwi, setCountKiwi] = useState(0);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section className="fruit-basket">
                <article className="fruit-option">
                    <h4 className="fruit-name">🍓 Aardbeien</h4>
                    <button
                        type="button"
                        className="min-one"
                        onClick={() => setCountStrawberry(countStrawberry - 1)}
                        disabled={countStrawberry === 0}
                    > -
                    </button>
                    <p className="counter"> {countStrawberry} </p>
                    <button
                        type="button"
                        className="add-one"
                        onClick={() => setCountStrawberry(countStrawberry + 1)}
                    > +
                    </button>
                </article>

                <article className="fruit-option">
                    <h4 className="fruit-name">🍌 Bananen</h4>
                    <button
                        type="button"
                        className="min-one"
                        onClick={() => setCountBanana(countBanana - 1)}
                        disabled={countBanana === 0}
                    > -
                    </button>
                    <p className="counter"> {countBanana} </p>
                    <button
                        type="button"
                        className="add-one"
                        onClick={() => setCountBanana(countBanana + 1)}
                    > +
                    </button>
                </article>

                <article className="fruit-option">
                    <h4 className="fruit-name">🍏 Appels</h4>
                    <button
                        type="button"
                        className="min-one"
                        onClick={() => setCountApple(countApple - 1)}
                        disabled={countApple === 0}
                    > -
                    </button>
                    <p className="counter"> {countApple} </p>
                    <button
                        type="button"
                        className="add-one"
                        onClick={() => setCountApple(countApple + 1)}
                    > +
                    </button>
                </article>

                <article className="fruit-option">
                    <h4 className="fruit-name">🥝 Kiwi's</h4>
                    <button
                        type="button"
                        className="min-one"
                        onClick={() => setCountKiwi(countKiwi - 1)}
                        disabled={countKiwi === 0}
                    > -
                    </button>
                    <p className="counter"> {countKiwi} </p>
                    <button
                        type="button"
                        className="add-one"
                        onClick={() => setCountKiwi(countKiwi + 1)}
                    > +
                    </button>
                </article>

                <button type="reset"
                        className="reset-button"
                        onClick={() => setCountStrawberry(0) + setCountBanana(0) + setCountApple(0) + setCountKiwi(0)}
                > Reset
                </button>
            </section>
        </>
    );
}

export default App;
