import React from 'react';
import styled from 'styled-components';
import modalPage from './modalPage';

const modalButton = () => {
    return (
        <Modal>
            <Container>
                <Button>
                    <span>견적 비교하기</span>
                    <span>(2/5)</span>
                    <Img src='https://i.esdrop.com/d/HWwHinrXHN.png' alt='arrow' />
                </Button>
            </Container>
            <Line />
            <modalPage />
        </Modal>
    );
};

export default modalButton;

const Modal = styled.div``;

const Container = styled.div`
    display: flex;
`;

const Button = styled.button`
    display: flex;
    box-sizing: border-box;
    width: 200px;
    height: 44px;
    outline-style: none;
    margin: 0 0 -1px 60px;
    border-radius: 8px;
    background-color: #212121;
    color: #ffffff;
    font-size: 10px;
    font-weight: 500;
    /* padding: 10px 24px 3px 10px; */

    span {
        &:nth-child(2) {
            font-family: NotoSansKR;
            color: #ff5b29;
            text-align: center;
            margin: 0 0 7px;
            /* width: 128px; */
            height: 24px;
            line-height: normal;
        }
    }

    &:hover {
        cursor: pointer;
    }
`;

const Img = styled.img`
    width: 24px;
    height: 24px;
    margin: 0 0 7px;
    /* padding: 8px 6px 9px; */
`;

const Line = styled.div`
    height: 2px;
    width: 100%;
    background-color: #212121;
`;
