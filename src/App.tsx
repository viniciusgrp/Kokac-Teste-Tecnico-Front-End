import { Caixa } from "./components/Caixa"
import { Header } from "./components/Header"
import { Palindromo } from "./components/Palindromo"
import { Veiculos } from "./components/Veiculos"
import {useContext} from "react"
import { GlobalContext } from "./providers/global"
import { Cep } from "./components/Cep"

function App() {
    const {component} = useContext(GlobalContext)

    return (
    <>
      <Header/>
      {component === 'palindromo' && <Palindromo/>}
      {component === 'caixa' && <Caixa/>}
      {component === 'veiculos' && <Veiculos/>}
      {component === 'cep' && <Cep/>}
    </>
  )
}

export default App
