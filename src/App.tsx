import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import { Container } from '../src/styles'
import EstiloGlobal from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
