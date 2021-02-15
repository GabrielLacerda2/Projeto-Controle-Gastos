function Header(props){
    return(
    <div className="header">
        <h1 className="hello-user">Olá {props.user}</h1>
        <img className="wallet" />
        <navbar className="navbar-header">
        <ul className="lista-options">
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
        </navbar>
    </div>
    );
}

export default Header;