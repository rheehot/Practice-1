import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalButton from './ModalButton';
import { API } from '../config';
import { atom, useRecoilState } from 'recoil';

export const compareState = atom({
    key: 'CompareButton',
    default: [],
});

const CompareButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalProduct, setIsModalProduct] = useState(false);
    const [data, setData] = useRecoilState(compareState);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((res) => setData(res.data.content));
    }, []);

    // data.forEach((el) => console.log(el));
    // const newArr = data.map((x) => x.estimatedInitialInvestmentCost);
    // const min = Math.min.apply(null, newArr);
    // console.log(min);

    const minNumber = () => {
        const cost = data.map((x) => x.estimatedInitialInvestmentCost);
        const min = Math.min.apply(null, cost);
        console.log(min);
    };

    const handleShowModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleModalProduct = () => {
        setIsModalProduct(!isModalProduct);
    };

    const handleCheck = (e) => {
        const item = data[2];
        const { checked } = e.target;
        if (checked) {
            // add item
            addItem(new Date().getMilliseconds(), item);
        } else {
            removeItem(item.id);
        }
    };

    const addItem = (id, item) => {
        setData((data) => [...data, { ...item, id }]);
    };

    const removeItem = (id) => {
        setData(data.filter((data) => data.id !== id));
    };

    return (
        <Fragment>
            <Container>
                <input type='checkbox' onChange={handleCheck} />
                <Wrapper>비교</Wrapper>
            </Container>
            <ModalButton
                handleCheck={handleCheck}
                handleAddItem={addItem}
                isModalProduct={isModalProduct}
                removeItem={removeItem}
                data={data}
                minNumber={minNumber}
                isModalOpen={isModalOpen}
                handleshowModal={handleShowModal}
                handleModalProduct={handleModalProduct}
            />
        </Fragment>
    );
};

export default CompareButton;

const Wrapper = styled.div`
    margin: 10px;
    font-size: 15px;
`;

const Container = styled.div`
    display: flex;

    input {
        width: 15px;
        height: 15px;
        margin-top: 10px;
    }
`;
