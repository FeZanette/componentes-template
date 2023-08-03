import logo from "../img/logo.png";

export function Header () {
    const headerTexto = "EU SOU UM HEADER"

    return (
        <div>
            <header className="header">
                <img className="logo" src={logo}/>
                <h1 className="header-texto">{headerTexto}</h1>
            </header>
        </div>
    )
}