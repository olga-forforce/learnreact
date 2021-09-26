import React, {useState} from "react";
import Header from "../conteiners/Header/Header";
import Search from "../conteiners/Search/Search";

export default function Main() {
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