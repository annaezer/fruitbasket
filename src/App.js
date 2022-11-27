import React, {useState} from 'react';
import './App.css';

// 1. Eerst section en vier article elementen aanmaken met h4, twee buttons p element. Daaronder maar binnen section nog een button van type reset. Info statisch invullen. Afbeeldingen importeren.
// 2. Buttons met onClick maken, 3 functies aanmaken voor nu met console log om te kijken of het werkt.
// 3. Nu werkend krijgen dat ze bij de counter 1 optellen, 1 aftrekken of alles resetten. Onder 0 mag niet. State gebruiken. Button - met conditie 0 disablen.
// 4. Formulier aanmaken met alle inputs.
// 5. Voor inputs gecombineerder useState aanmaken
// 6. Op alle inputs eventlistener onChange zetten want waardes invoerveld nodig. Ook value toevoegen en daar de huisidge waarde opzetten uit useState.


function App() {

    const [countStrawberry, setCountStrawberry] = useState(0);
    const [countBanana, setCountBanana] = useState(0);
    const [countApple, setCountApple] = useState(0);
    const [countKiwi, setCountKiwi] = useState(0);

    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        age: 0,
        zipcode: "",
        deliveryOptions: "weekly",
        moment: "",
        comments: "",
        termsAndConditions: false
    })

    function handleChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState, `Bananen: ${countBanana} Aardbeien: ${countStrawberry} Kiwi's: ${countKiwi} Appels: ${countApple}`);
    }

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

            <form onSubmit={handleSubmit}>
                <label htmlFor="form-firstname">
                    Voornaam
                    <input
                        type="text"
                        id="form-firstname"
                        name="firstname"
                        value={formState.firstname}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="form-lastname">
                    Achternaam
                    <input
                        type="text"
                        id="form-lastname"
                        name="lastname"
                        value={formState.lastname}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="form-age">
                    Leeftijd
                    <input
                        type="number"
                        id="form-age"
                        name="age"
                        value={formState.age}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="form-zipcode">
                    Postcode
                    <input
                        type="text"
                        id="form-zipcode"
                        name="zipcode"
                        value={formState.zipcode}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="form-delivery-options">
                    Bezorgfrequentie
                    <select
                        id="form-delivery-options"
                        name="deliveryOptions"
                        value={formState.deliveryOptions}
                        onChange={handleChange}
                    >
                        <option value="weekly">Iedere week</option>
                        <option value="two-weeks">Om de week</option>
                        <option value="monthly">Iedere maand</option>
                    </select>
                </label>
                <label htmlFor="form-moment">
                    Overdag
                    <input
                        id="form-moment"
                        type="radio"
                        name="moment"
                        value="day"
                        checked={formState.moment === "day"}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="form-moment">
                    's Avonds
                    <input
                        id="form-moment"
                        type="radio"
                        name="moment"
                        value="evening"
                        checked={formState.moment === "evening"}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="form-comment">
                    Opmerking
                    <textarea
                        id="form-comment"
                        name="comments"
                        rows="10"
                        cols="30"
                        value={formState.comments}
                        onChange={handleChange}
                    >
                    </textarea>
                </label>
                <label htmlFor="form-terms">
                    <input
                        type="checkbox"
                        id="form-terms"
                        name="termsAndConditions"
                        checked={formState.termsAndConditions}
                        onChange={handleChange}
                    />
                    Ik ga akkoord met de voorwaarden
                </label>
                <button type="submit">
                    Verzenden
                </button>
            </form>
        </>
    );
}

export default App;

// Pas wanneer de gebruiker op verzenden drukt, worden de formulier-waardes én de fruit-waardes in de console gelogd!
