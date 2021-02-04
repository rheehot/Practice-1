import React, { useState } from 'react';
import Baby from './Baby';
import styled from 'styled-components';

const Mother = () => {
    const [value, setValue] = useState('');
    const [array, setArray] = useState([
        {
            id: 0,
            content: '졸려요🥺',
        },
        {
            id: 1,
            content: '배고파유🥺',
        },
        {
            id: 2,
            content: '집갈래요🥺',
        },
        {
            id: 3,
            content: '피고내🥺',
        },
    ]);

    const handleChangeContent = (e) => {
        setValue(e.target.value);
    };

    const removeText = (id) => {
        console.log(id);
        setArray(array.filter((array) => array.id !== id));
    };

    const handleAddText = (e) => {
        e.preventDefault(); //새로고침 방지
        setArray((array) => [...array, { id: array.length, content: value }]); //버튼을 눌러야 기존 배열에 키값을 가지고있게해서 배열 추가
        setValue(''); //엔터나 클릭하면 Input창에 빈값으로 나오게 값을 변경
    };
    return (
        <>
            {array.map((item, idx) => {
                // console.log(item);
                return <Baby key={idx} id={item.id} content={item.content} removeText={removeText} />;
            })}
            <Input>
                <form>
                    <input type='text' value={value} onChange={handleChangeContent} />
                    <button onClick={handleAddText}>버튼</button>
                </form>
            </Input>
        </>
    );
};

const Input = styled.div`
    margin-top: 20px;

    input {
        height: 30px;
        width: 200px;
        font-size: 16px;
    }

    button {
        height: 40px;
        width: 60px;
        border: 1px solid #ffffff;
        border-radius: 10px;
        margin-left: 20px;
        background-color: #dfdfdf;

        &:hover {
            cursor: pointer;
        }
    }
`;

export default Mother;
