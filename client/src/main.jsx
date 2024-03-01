import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { StateContextProvider } from './context';
import { Sepolia } from "@thirdweb-dev/chains";
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render (
    <ThirdwebProvider 
    //desiredChainId = {ChainId.Sepolia}
        activeChain={ Sepolia }
        clientId="636d981a2de4d9340a289007e6b16e4f"
        >
        <Router>
        <StateContextProvider>
            <App />
        </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)