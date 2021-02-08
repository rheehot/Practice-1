import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Routes />
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
);
