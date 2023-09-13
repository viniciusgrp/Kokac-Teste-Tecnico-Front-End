import { HeaderStyle } from "./style"
import Kukac from "../../assets/kukac.jpeg"
import {AiOutlineMenu} from "react-icons/ai"
import { useState, useContext } from "react"
import { GlobalContext } from "../../providers/global"

export const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const {setComponent} = useContext(GlobalContext)
    return (
        <HeaderStyle showMenu={showNavbar}>
            <img src={Kukac} alt="Kukac logo" />
            <button className="mobileButton" onClick={() => setShowNavbar(!showNavbar)}><AiOutlineMenu/></button>
            <nav>
                <button onClick={() => setComponent("palindromo")}>Palindromo</button>
                <button onClick={() => setComponent("caixa")}>Caixa</button>
                <button onClick={() => setComponent("veiculos")}>Cadastro Veículos</button>
                <button onClick={() => setComponent("cep")}>Consulta CEP</button>
            </nav>
        </HeaderStyle>
    )
}