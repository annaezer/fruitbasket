import React from 'react';

function Input({id, name, type, change, value, children}) {
    return (
            <label htmlFor={id}>
                {children}
                <input
                    type={type}
                    id={id}
                    name={name}
                    onChange={change}
                    value={value}
                />
            </label>
    );
};

export default Input;
