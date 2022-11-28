import React from 'react';

function Article({name,clickHandlerMin, clickHandlerPlus, fruitNameCounter}) {
    return (
            <article className="fruit-option">
                <h4 className="fruit-name">{name}</h4>
                <button
                    type="button"
                    className="min-one"
                    onClick={clickHandlerMin}
                    disabled={fruitNameCounter === 0}
                > -
                </button>
                <p className="counter"> {fruitNameCounter} </p>
                <button
                    type="button"
                    className="add-one"
                    onClick={clickHandlerPlus}
                > +
                </button>
            </article>
    );
};

export default Article;
