import React from 'react';
import styled from 'styled-components';

const Baby = ({ id, content, removeText }) => {
    return (
        <Container onClick={() => removeText(id)}>
            <div>{content}</div>
            <div className='delete'>삭제</div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    font-size: 22px;

    .delete {
        margin-left: 10px;
        border: 3px solid orange;
        border-radius: 5px;

        &:hover {
            cursor: pointer;
        }
    }
`;

export default Baby;
