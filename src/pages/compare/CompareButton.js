import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import ModalButton from './ModalButton';
import { API } from '../config';

const Button = styled.button``;

const CompareButton = () => {
    const [toggle, setToggle] = useState(false);
    const [isModal, setIsModal] = useState(false);
    const [isModalProduct, setIsModalProduct] = useState(false);
    const [data, setData] = useState();

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((res) => setData(res.data.content));
    }, []);

    const handleShowModal = () => {
        setIsModal(!isModal);
    };

    const handleModalProduct = () => {
        setIsModalProduct(!isModalProduct);
    };

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <Fragment>
            <Button
                data={data}
                onClick={handleToggle}
                isModal={isModal}
                handleshowModal={handleShowModal}
                handleModalProduct={handleModalProduct}
            >
                비교
            </Button>
            <ModalButton />
        </Fragment>
    );
};

export default CompareButton;
