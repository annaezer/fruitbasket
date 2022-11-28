import React from 'react';

function Button ({children, buttonType, name, clickHandler}) {
    return (
        <button
            type={buttonType}
            className={name}
            onClick={clickHandler}
                >
            {children}
        </button>
    );
};

export default Button;
