import logo from '../images/logo.svg';

function Header(props) {
    let {email} = props.userData;
    return(
        <header className="header">
            <img src={logo} alt="Логотип" className="header__logo" />
            <div className="user-info">
                <p className="user-info__email">
                    {console.log(email)}
                </p>
                {props.children}
            </div>
        </header>
    );
};

export default Header;
