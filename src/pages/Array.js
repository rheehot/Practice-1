import React from 'react';
import styled from 'styled-components';

const Image = styled.div`
    font-size: 15px;
    color: #4c4c4c;
    margin: 10px 5px;
    border: 2px solid #c5c5c5;
    border-radius: 5px;
    padding: 0 10px;

    &:hover {
        cursor: pointer;
    }
`;

const Array = ({ image, removeItems, id }) => {
    return (
        <>
            <Image onClick={() => removeItems(id)}>{`${image.id} - ${image.theFile.name}`}</Image>
        </>
    );
};

export default Array;
