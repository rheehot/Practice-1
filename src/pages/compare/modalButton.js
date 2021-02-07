import React, { Fragment, useState } from "react";
import styled, { css } from "styled-components";
import ModalPage from "./ModalPage";

const ModalButton = (props, data, content) => {
  const [toggle, setToggle] = useState(false);
  const [isModalProduct, setIsModalProduct] = useState(false);

  const handleModalProduct = () => {
    setIsModalProduct(!isModalProduct);
  };

  return (
    <Fragment>
      <Container>
        <Toggle toggle={toggle}>
          <Compare onClick={() => handleModalProduct()}>
            <span>견적 비교하기</span>
            <span>({data.length}/5)</span>
            <Arrow />
          </Compare>
          <Line />
          <ModalPage isModalProduct={isModalProduct} />
        </Toggle>
      </Container>
    </Fragment>
  );
};

export default ModalButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
`;
const Toggle = styled.div`
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
    color: ${(props) => (props.isModalProduct ? "#ffffff" : "ff5b29")};
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

const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #212121;
`;

const Up = css`
  content: "";
  width: 7px;
  height: 7px;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  display: inline-block;
  transform: rotate(315deg);
  position: absolute;
  top: 12px;
  right: 35px;
`;

const Down = css`
  content: "";
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
  ::after {
    ${(props) => (props.isModalProduct ? `${Up}` : `${Down}`)}
  }
`;
