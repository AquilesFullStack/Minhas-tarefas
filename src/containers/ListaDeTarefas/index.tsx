import Tarefa from '../../components/Tarefa'
import { Container } from './style'

const Tarefas = [
  {
    titulo: 'ir para ceu',
    descricao: 'fazer treino B',
    prioridade: 'alta',
    status: 'pendente'
  },
  {
    titulo: 'ir para academia',
    descricao: 'fazer treino A',
    prioridade: 'baixa',
    status: 'pendente'
  },
  {
    titulo: 'ir para smart',
    descricao: 'fazer treino C',
    prioridade: 'baixa',
    status: 'pendente'
  },
  {
    titulo: 'ir para rua',
    descricao: 'fazer treino D',
    prioridade: 'media',
    status: 'pendente'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {Tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
