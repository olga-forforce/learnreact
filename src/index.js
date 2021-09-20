import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Clock from "./components/Clock/Clock";

const App = function () {
    const [isLogin, setIsLogin] = useState(false);

    const onLogin = () => {
        setIsLogin(true)
    };
    const onLogOut = () => {
        setIsLogin(false)
    };

    return <>
        <Header isLogin={isLogin} onLogOut={onLogOut} onLogin={onLogin}/>
        <Search/>
    </>
}


ReactDOM.render(
    <>
        <App/>
        <Clock date={new Date()} />
    </>,
    document.getElementById('root')
);