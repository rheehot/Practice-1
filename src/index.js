import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <>
        <RecoilRoot>
            <Routes />
        </RecoilRoot>
    </>,
    document.getElementById('root')
);
