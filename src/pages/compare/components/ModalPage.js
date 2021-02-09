import React from 'react';
import Building from './Building';
import NothingPage from './NothingPage';

function Matching({ id, removeItem, isModalProduct }) {
    switch (isModalProduct) {
        case true:
            return <Building isModalProduct={isModalProduct} id={id} removeItem={removeItem} />;
        case false:
            return <NothingPage isModalProduct={isModalProduct} id={id} removeItem={removeItem} />;
        default:
            return <></>;
    }
}

export default Matching;
