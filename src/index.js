import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './pages/main';

function App(){
    return (
        <div>
            <MainPage />
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode><App /></React.StrictMode>,
    document.getElementById('root')
);