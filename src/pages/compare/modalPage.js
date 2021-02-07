import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { API } from "../config";

const ModalPage = ({ isModalProduct }) => {
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        setData(res.category.data);
        setContent(res.data.content);
      });
  }, []);

  // console.log("data:", data, "cont:", content);

  return (
    <Fragment>
      <WrapModal isModalProduct={isModalProduct}>
        <Categories>
          <div className="category">예상 창업비용</div>
          <div className="category">예상 월 수익</div>
          <div className="category">보증금</div>
          <div className="category">권리금</div>
          <div className="category">면적</div>
          <div className="category" id="last">
            층
          </div>
        </Categories>
        <PlaceData>
          {content?.map((content, id) => {
            return (
              <Place key={id}>
                <div className="placeimage">
                  <img src={content.src}></img>
                  <img className="placeLogo" src={content.logo}></img>
                </div>
                <div className="placetype">{content.typeBusiness}</div>
                <div className="brand">{content.franchiseBrandName}</div>
                <div className="address">{content.brokerageStoreAddress}</div>
                <div className="container">
                  <div className="info">{content.brokerageStoreAddress}</div>
                  <div className="info">{content.brokerageStoreAddress}</div>
                  <div className="info">{content.brokerageStoreAddress}</div>
                  <div className="info">{content.brokerageStoreAddress}</div>
                  <div className="info">{content.brokerageStoreAddress}</div>
                  <div className="info">{content.brokerageStoreAddress}</div>
                </div>
              </Place>
            );
          })}
        </PlaceData>
      </WrapModal>
    </Fragment>
  );
};

const WrapModal = styled.div`
  display: ${(props) => (props.isModalProduct ? "flex" : "none")};
  justify-content: flex-start;
  margin: 0 208px;
  /* justify-content: center; */
`;

const Categories = styled.div`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 60px;
  /* height: 272px; */
  /* margin: 8px 8px 8px 0; */
  text-align: left;
  padding-top: 186px;
  color: #929292;

  .category {
    padding: 9px 0;
    border-bottom: 1px solid #eeeeee;
  }

  #last {
    margin-bottom: 40px;
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

  .placeimage {
    position: relative;
    margin: 2px 2px 0;
    margin-bottom: 30px;

    img {
      width: 188px;
      height: 76px;
      border-radius: 8px;
    }

    .placeLogo {
      border-radius: 14px;
      position: absolute;
      top: 55px;
      left: 75px;
      width: 40px;
      height: 40px;
    }
  }

  .placetype {
    font-size: 12px;
    font-weight: 500;
    height: 18px;
  }

  .address {
    margin-top: 2px;
  }

  .container {
    text-align: right;
    margin-top: 20px;
    font-weight: 500;

    .info {
      border-bottom: 1px solid #eeeeee;
      padding: 6.5px 30px;
    }
  }
`;

export default ModalPage;

// import React, { Fragment, useState, useEffect } from "react";
// import styled from "styled-components";
// import { API } from "../config";

// const ModalPage = ({ isModalProduct }) => {
//   const [data, setData] = useState([]);
//   const [content, setContent] = useState([]);

//   useEffect(() => {
//     fetch(API)
//       .then((res) => res.json())
//       .then((res) => setData(res.category.data));

//     fetch(API)
//       .then((res) => res.json())
//       .then((res) => setContent(res.data.content));
//   }, []);

//   // console.log(data);

//   return (
//     <Fragment>
//       <WrapModal isModalProduct={isModalProduct}>
//         <Detail>
//           <Container>
//             <Wrapper>
//               <Store src={content.src} alt="store" />
//               <Logo src={content.logo} alt="logo" />
//               <div className="type">{content.typeBusiness}</div>
//               <div className="name">{content.franchiseBrandName}</div>
//               <div className="place">{content.brokerageStoreAddress}</div>
//             </Wrapper>
//           </Container>
//           <Container2>
//             <>
//               <List>{data.text}</List>
//             </>
//             );
//           </Container2>
//         </Detail>
//       </WrapModal>
//     </Fragment>
//   );
// };

// export default ModalPage;

// // const Wrapper = styled.div`
// //   position: relative;
// //   display: flex;
// //   flex-direction: column;
// //   width: 1440px;
// //   height: 422px;

// //   .type {
// //     position: absolute;
// //     margin: 110px 10px 294px;
// //     height: 18px;
// //     width: 172px;
// //     font-weight: 500;
// //     font-size: 12px;
// //     text-align: center;
// //     color: #212121;
// //   }

// //   .name {
// //     position: absolute;
// //     margin: 128px 10px 274px;
// //     height: 20px;
// //     width: 172px;
// //     font-weight: 700;
// //     font-size: 14px;
// //     text-align: center;
// //     color: #212121;
// //   }

// //   .place {
// //     position: absolute;
// //     margin: 150px 10px 252px;
// //     height: 20px;
// //     width: 172px;
// //     font-weight: 700;
// //     font-size: 14px;
// //     text-align: center;
// //     color: #212121;
// //   }
// // `;

// const WrapModal = styled.div`
//   /* position: fixed; */
//   /* left:0; */
//   /* bottom:0; */
//   /* height: 422px; */
//   margin: 2px 0 0;
//   background-color: ivory;
//   display: ${(props) => (props.isModalProduct ? "flex" : "none")};
//   justify-content: center;
// `;

// const Detail = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 1280px;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-right: 20px;
//   position: relative;

//   .type {
//     margin-top: 25px;
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 960px;
//   /* height: 422px; */
//   padding-left: 150px;
// `;

// const Container2 = styled.div`
//   position: relative;
//   width: 1024px;
// `;

// const List = styled.div`
//   font-size: 10px;
//   text-align: left;
//   font-weight: 500;
//   color: #9e9e9e;
//   margin: 11px 0 6px;
//   height: 15px;
//   border-bottom: 1px solid gray;
// `;

// const Store = styled.img`
//   width: 188px;
//   height: 76px;
// `;

// const Logo = styled.img`
//   width: 40px;
//   height: 40px;
//   position: absolute;
//   top: 50px;
// `;

// // const Store = styled.img`
// //   width: 188px;
// //   height: 76px;
// //   border-radius: 8px;
// //   margin: 2px;
// // `;

// // const Logo = styled.img`
// //   position: absolute;
// //   left: 75px;
// //   width: 40px;
// //   height: 40px;
// //   border-radius: 14px;
// //   margin: 56px 18px 10px 0;
// //   border: solid 1px #eeeeee;
// //   justify-content: center;
// // `;

// // const Line = styled.div`
// //   position: absolute;
// //   width: 1440px;
// //   height: 1px;
// //   margin: 216px 88px 32px 0;
// //   background-color: red;
// // `;

// const Category = styled.div`
//   margin: 195px 0 40px;
//   width: 60px;
//   height: 422px;
// `;
