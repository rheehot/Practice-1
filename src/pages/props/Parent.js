import React, { useState } from 'react';
import styled from 'styled-components';
import Children from './Children';

const Parent = (id, text) => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([
        {
            id: 0,
            text: '안녕하세요1',
        },
        {
            id: 1,
            text: '안녕하세요2',
        },
        {
            id: 2,
            text: '안녕하세요3',
        },
    ]);

    const handleChangetext = (e) => {
        setValue(e.target.value);
    };

    const removeItems = (id) => {
        // console.log(id);
        setData(data.filter((data) => data.id !== id));
    };

    const handleAddText = (e) => {
        e.preventDefault();
        setData((data) => [...data, { id: data.length, text: value }]);
        setValue('');
    };

    return (
        <>
            {data.map((item, idx) => {
                // console.log(item);
                return <Children key={idx} id={item.id} text={item.text} item={item} removeItems={removeItems} />;
            })}
            <Input>
                <form>
                    <input type='text' value={value} onChange={handleChangetext} />
                    <button onClick={handleAddText}>버튼</button>
                </form>
            </Input>
        </>
    );
};

export default Parent;

const Input = styled.div`
    display: flex;
`;
