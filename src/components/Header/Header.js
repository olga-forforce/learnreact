import './header.css';


function Header({isLogin, onLogOut, onLogin}) {
    return (
        <header className="header">
            <div className="container">
                <div className="logo"></div>
                <div className="name">Booking</div>
                <div>
                    <button>About</button>
                    <button>My Booking</button>
                    {!isLogin ? <button onClick={onLogin}>Войти</button> : (
                        <>
                            <p>Ольга</p>
                            <button onClick={onLogOut}>Выход</button>
                        </>)}
                </div>
            </div>
        </header>
    );
}

export default Header;

