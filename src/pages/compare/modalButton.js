import React, { Fragment, useState } from 'react';
import styled, { css } from 'styled-components';
import BrandBuildingPage from './BrandBuildingPage';
import BrandPage from './BrandPage';
import BuildingPage from './BuildingPage';
import ModalPage from './components/ModalPage';

const ModalButton = ({ id, data, removeItem, isModalOpen }) => {
    const [isModalProduct, setIsModalProduct] = useState(false);

    const handleModalProduct = () => {
        setIsModalProduct(!isModalProduct);
    };

    return (
        <Fragment>
            <Toggle isModalOpen={isModalOpen}>
                <Compare onClick={() => handleModalProduct()}>
                    <span>견적 비교하기</span>
                    <PlaceNumber data={data}>({!data ? 0 : data?.length}/5)</PlaceNumber>
                    <Arrow />
                </Compare>
                <Line />
                <ModalPage id={id} removeItem={removeItem} isModalProduct={isModalProduct} />
                {/* <BrandPage id={id} removeItem={removeItem} isModalProduct={isModalProduct} /> */}
                {/* <BuildingPage id={id} removeItem={removeItem} isModalProduct={isModalProduct} /> */}
                {/* <BrandBuildingPage id={id} removeItem={removeItem} isModalProduct={isModalProduct} /> */}
            </Toggle>
        </Fragment>
    );
};

export default ModalButton;

const Toggle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
`;

const Compare = styled.button`
    position: relative;
    justify-content: center;
    box-sizing: border-box;
    width: 200px;
    height: 44px;
    outline-style: none;
    margin: 0 0 -1px 208px;
    border-radius: 8px;
    background-color: #212121;
    color: #ffffff;
    font-weight: 500;
    padding: 10px 48px 10px 24px;

    span {
        color: ${(props) => (props.isModalProduct ? '#ffffff' : 'ff5b29')};
        font-size: 14px;
        text-align: center;
        font-family: NotoSansKR;
        margin: 0 0 7px;
        width: 128px;
        height: 24px;
        line-height: normal;
    }

    &:hover {
        cursor: pointer;
    }
`;

const PlaceNumber = styled.span`
    color: ${(props) => (!props.data ? 'white' : '#ff5b29')};
`;

const Line = styled.div`
    width: 100%;
    height: 2px;
    background-color: #212121;
`;

const Up = css`
    content: '';
    width: 7px;
    height: 7px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    display: inline-block;
    transform: rotate(315deg);
    position: absolute;
    top: 17px;
    right: 35px;
`;

const Down = css`
    content: '';
    width: 7px;
    height: 7px;
    border-top: 3px solid #fff;
    border-right: 3px solid #fff;
    display: inline-block;
    transform: rotate(135deg);
    position: absolute;
    top: 12px;
    right: 35px;
`;

const Arrow = styled.div`
    display: ${(props) => (props.isModalOpen ? `${Down}` : `${Up}`)};
`;
