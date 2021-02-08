import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../config';

const ModalPage = ({ id, isModalProduct, removeItem }) => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((res) => {
                setContent(res.data.content);
            });
    }, []);

    const countNumber = (number) => {
        var inputNumber = number < 0 ? false : number;
        var unitWords = ['', '만원'];
        var splitUnit = 10000;
        var splitCount = unitWords.length;
        var resultArray = [];
        var resultString = '';

        for (var i = 0; i < splitCount; i++) {
            var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
            unitResult = Math.floor(unitResult);
            if (unitResult > 0) {
                resultArray[i] = unitResult;
            }
        }

        for (var i = 0; i < resultArray.length; i++) {
            if (!resultArray[i]) continue;
            resultString = String(resultArray[i]) + unitWords[i] + resultString;
        }

        return resultString;
    };

    return (
        <Fragment>
            <WrapModal isModalProduct={isModalProduct}>
                <Categories>
                    <div className='category'>예상 창업비용</div>
                    <div className='category'>예상 월 수익</div>
                </Categories>
                <PlaceData>
                    {content?.map((content, idx) => {
                        return (
                            <Place key={idx} onClick={() => removeItem(id)}>
                                <img className='placeLogo' src={content.logo} alt='logo'></img>
                                <div className='delete'>X</div>
                                <div className='placetype'>{content.typeBusiness}</div>
                                <div className='brand'>{content.franchiseBrandName}</div>
                                <div className='container'>
                                    <div className='info'>
                                        {countNumber(content.estimatedInitialInvestmentCost)
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    </div>
                                    <div className='info'>
                                        {countNumber(content.expectationProfit)
                                            .toString()
                                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    </div>
                                </div>
                            </Place>
                        );
                    })}
                </PlaceData>
            </WrapModal>
            <EmptyContainer></EmptyContainer>
        </Fragment>
    );
};

const EmptyContainer = styled.div``;
const WrapModal = styled.div`
    display: ${(props) => (props.isModalProduct ? 'flex' : 'none')};
    justify-content: flex-start;
    margin: 0 208px;
`;

const Categories = styled.div`
    font-size: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 60px;
    text-align: left;
    padding-top: 186px;
    color: #929292;

    .category {
        padding: 9px 0;
        border-bottom: 1px solid #eeeeee;
    }
`;

const PlaceData = styled.div`
    display: flex;
`;

const Place = styled.div`
    justify-content: center;
    text-align: center;
    font-size: 14px;
    height: 20px;
    font-weight: 700;

    .placeLogo {
        border-radius: 14px;
        position: absolute;
        top: 55px;
        left: 75px;
        width: 40px;
        height: 40px;
    }

    .delete {
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 15px;
        color: white;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 100%;
        width: 20px;
        height: 20px;

        &:hover {
            cursor: pointer;
        }
    }

    .placetype {
        font-size: 12px;
        font-weight: 500;
        height: 18px;
    }

    .container {
        text-align: right;
        margin-top: 20px;
        font-weight: 500;

        .info {
            border-bottom: 1px solid #eeeeee;
            padding: 6.5px 50px 6.5px 30px;
            font-weight: 600;
            color: #212121;
        }
    }
`;

export default ModalPage;
