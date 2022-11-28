import React from 'react';

function Input({id, name, type, change, value, children, minAge}) {
    return (
            <label htmlFor={id}>
                {children}
                <input
                    type={type}
                    id={id}
                    name={name}
                    onChange={change}
                    value={value}
                    min={minAge}
                />
            </label>
    );
};

export default Input;
