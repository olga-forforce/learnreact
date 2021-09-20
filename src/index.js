import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Clock from "./components/Search/Search";

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
    <React.StrictMode><App/>
    <Clock date={new Date()} />
    </React.StrictMode>,
    document.getElementById('root')
);