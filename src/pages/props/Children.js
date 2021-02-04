import React from 'react';
import styled from 'styled-components';

const Children = ({ text, removeItems, id }) => {
    return (
        <Container onClick={() => removeItems(id)}>
            <div>{text}</div>
            <div className='space'>X</div>
        </Container>
    );
};

export default Children;

const Container = styled.div`
    display: flex;
    font-size: 20px;
    margin-bottom: 20px;

    .space {
        margin-left: 10px;
        font-weight: 700;
    }
    &:hover {
        cursor: pointer;
    }
`;
