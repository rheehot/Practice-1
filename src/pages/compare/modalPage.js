import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { API } from '../config';

const ModalPage = ({ isModalProduct }) => {
    const [data, setData] = useState([]);
    const [content, setContent] = useState([]);

    useEffect(() => {
        fetch(API)
            .then((res) => res.json())
            .then((res) => setData(res.category.data));

        fetch(API)
            .then((res) => res.json())
            .then((res) => setContent(res.data.content));
    }, []);

    // console.log(data);

    return (
        <Fragment>
            <WrapModal isModalProduct={isModalProduct}>
                <Detail>
                    <Category>
                        {data.map((item, idx) => {
                            // console.log(item.text);
                            return <List key={idx}>{item.text}</List>;
                        })}
                    </Category>
                    <Container>
                        {content.map((el, idx) => {
                            console.log(el);
                            return (
                                <Wrapper key={idx}>
                                    <Store src={el.src} alt='store' />
                                    <Logo src={el.logo} alt='logo' />
                                    <div className='type'>{el.typeBusiness}</div>
                                    <div className='name'>{el.franchiseBrandName}</div>
                                    <div claasName='a'>{el.brokerageStoreAddress}</div>
                                </Wrapper>
                            );
                        })}
                    </Container>
                    <Line />
                </Detail>
            </WrapModal>
        </Fragment>
    );
};

export default ModalPage;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    .type {
        position: absolute;
        margin: 110px 10px 294px;
        height: 18px;
        width: 172px;
        font-weight: 500;
        font-size: 12px;
        text-align: center;
        color: #212121;
    }

    .name {
        position: absolute;
        margin: 128px 10px 274px;
        height: 20px;
        width: 172px;
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        color: #212121;
    }

    .a {
        position: absolute;
        margin: 150px 10px 252px;
        height: 20px;
        width: 172px;
        font-weight: 700;
        font-size: 14px;
        text-align: center;
        color: #212121;
    }
`;

const Container = styled.div`
    display: flex;
    width: 960px;
    height: 422px;
    margin: 2px;
`;

const Store = styled.img`
    width: 188px;
    height: 76px;
    border-radius: 8px;
    margin: 2px;
`;

const Logo = styled.img`
    position: absolute;
    left: 75px;
    width: 40px;
    height: 40px;
    border-radius: 14px;
    margin: 56px 18px 10px 0;
    border: solid 1px #eeeeee;
    justify-content: center;
`;

const Line = styled.div`
    position: absolute;
    width: 1440px;
    height: 1px;
    margin: 216px 88px 32px 0;
    background-color: red;
`;

const WrapModal = styled.div`
    position: fixed;
    /* left:0; */
    /* bottom:0; */
    width: 1440px;
    height: 422px;
    margin: 2px 0 0;
    padding: 0 208px;
    background-color: ivory;
    display: ${(props) => (props.isModalProduct ? 'block' : 'none')};
`;

const Detail = styled.div`
    display: flex;
    position: relative;
`;

const Category = styled.div`
    margin: 195px 0 40px;
`;

const List = styled.div`
    font-size: 10px;
    text-align: left;
    font-weight: 500;
    color: #9e9e9e;
    margin: 11px 0 6px;
    height: 15px;
`;
