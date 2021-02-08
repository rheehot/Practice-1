import React from 'react';
import styled from 'styled-components';
import Array from './Array';
import { atom, useRecoilState } from 'recoil';

const Wrapper = styled.section`
    width: 100%;
    max-width: 1680px;

    .button {
        margin: 50px 70px;
        display: none;
    }
`;

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 10px;

    .productContent {
        display: flex;
        justify-content: center;
    }
    .product {
        width: 400px;
        height: 400px;
        margin: 10px;
    }
`;

const OutsideBox = styled.div`
    display: flex;
    justify-content: center;
    border: 2px solid #dfdfdf;
    border-radius: 10px;
    margin: 40px 70px 10px;
    overflow: scroll;
`;

const InsideBox = styled.div`
    padding: 5px 0;
    display: flex;
`;

const Button = styled.div`
    margin: 30px 70px;
    font-size: 18px;

    .input-file-button {
        padding: 6px 25px;
        background-color: #0358ff;
        border-radius: 4px;
        color: white;

        &:hover {
            cursor: pointer;
        }
    }
`;

const Grid = (id, src) => {
    const state = atom({
        key: 'grid',
        default: [],
    });
    const [imageList, setImageList] = useRecoilState(state);

    const onFileChange = (e) => {
        const {
            target: { files },
        } = e;
        // console.log(files);
        const theFile = files[0];
        const reader = new FileReader();
        reader.readAsDataURL(theFile);
        reader.onloadend = (finishedEvent) => {
            const {
                currentTarget: { result },
            } = finishedEvent;
            setImageList((imageList) => [...imageList, { src: result, id: imageList.length, theFile }]);
        };
    };

    const removeItems = (id) => {
        console.log(id);
        setImageList(imageList.filter((imageList) => imageList.id !== id));
    };

    return (
        <Wrapper>
            <OutsideBox>
                <InsideBox id={id} src={src}>
                    {imageList.map((image) => {
                        return <Array id={image.id} removeItems={removeItems} image={image} />;
                    })}
                </InsideBox>
            </OutsideBox>
            <Button>
                <label className='input-file-button' for='input-file'>
                    업로드
                </label>
                <input className='button' id='input-file' type='file' onChange={onFileChange} multiple='multiple' />
            </Button>
            <List>
                {imageList.map((image) => {
                    return (
                        <div className='productContent'>
                            <img className='product' src={image.src} />
                        </div>
                    );
                })}
            </List>
        </Wrapper>
    );
};

export default Grid;
