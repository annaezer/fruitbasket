import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Article from "./components/Article";
import Input from "./components/Input";

// 1. Eerst section en vier article elementen aanmaken met h4, twee buttons p element. Daaronder maar binnen section nog een button van type reset. Info statisch invullen.
// 2. Buttons met onClick maken, console log om te kijken of het werkt.
// 3. Nu werkend krijgen dat ze bij de counter 1 optellen, 1 aftrekken of alles resetten. Onder 0 mag niet. State gebruiken. Button - met conditie 0 disablen.
// 4. Formulier aanmaken met alle inputs.
// 5. Voor inputs gecombineerde useState aanmaken
// 6. Op alle inputs eventlistener onChange zetten want waardes invoerveld nodig. Ook value toevoegen en daar de huidige waarde opzetten uit useState.
// 7.Componenten maken; van buttons, articles en een aantal inputs. Verder lijkt me niet handig voor bijv select, radio en checkbox


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
        console.log(formState, `Fruitmand bestelling: Bananen: ${countBanana} Aardbeien: ${countStrawberry} Kiwi's: ${countKiwi} Appels: ${countApple}`);
    }

    function reset() {
        setCountStrawberry(0);
        setCountBanana(0);
        setCountApple(0);
        setCountKiwi(0);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <section className="fruit-basket">
                <Article
                    name="🍓 Aardbeien"
                    clickHandlerMin={() => setCountStrawberry(countStrawberry - 1)}
                    fruitNameCounter={countStrawberry}
                    clickHandlerPlus={() => setCountStrawberry(countStrawberry + 1)}
                />
                <Article
                    name="🍌 Bananen"
                    clickHandlerMin={() => setCountBanana(countBanana - 1)}
                    fruitNameCounter={countBanana}
                    clickHandlerPlus={() => setCountBanana(countBanana + 1)}
                />
                <Article
                    name="🍏 Appels"
                    clickHandlerMin={() => setCountApple(countApple - 1)}
                    fruitNameCounter={countApple}
                    clickHandlerPlus={() => setCountApple(countApple + 1)}
                />
                <Article
                    name="🥝 Kiwi's"
                    clickHandlerMin={() => setCountKiwi(countKiwi - 1)}
                    fruitNameCounter={countKiwi}
                    clickHandlerPlus={() => setCountKiwi(countKiwi + 1)}
                />
                <Button
                    buttonType="reset"
                    name="reset-button"
                    clickHandler={reset}
                >
                    Reset
                </Button>
            </section>

            <form onSubmit={handleSubmit}>
                <Input
                    id="form-firstname"
                    type="text"
                    name="firstname"
                    change={handleChange}
                    value={formState.firstname}
                >
                    Voornaam
                </Input>
                <Input
                    id="form-lastname"
                    type="text"
                    name="lastname"
                    change={handleChange}
                    value={formState.lastname}
                >
                    Achternaam
                </Input>
                <Input
                    id="form-age"
                    type="number"
                    name="age"
                    change={handleChange}
                    value={formState.age}
                >
                    Leeftijd
                </Input>
                <Input
                    id="form-zipcode"
                    type="text"
                    name="zipcode"
                    onChange={handleChange}
                    value={formState.zipcode}
                >
                    Postcode
                </Input>
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
                <Button
                    buttonType="submit"
                    name="submit-button"
                >
                    Verzenden
                </Button>
            </form>
        </>
    );
}

export default App;
