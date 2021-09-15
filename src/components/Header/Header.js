import './header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="logo"></div>
                <div className="name">Booking</div>
                <div>
                <button>About</button>
                <button>My Booking</button>
                <button>Sing in</button></div>
            </div>
        </header>
    );
}


