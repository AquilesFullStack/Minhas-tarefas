import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../stores'
import { alteraTermo } from '../../stores/reducers/filtro'
import * as S from '../BarraLateral/styles'
import * as enums from '../../utils/enums/Tarefa'
import { Botao, Campo } from '../../styles'

type Props = {
  mostrarFiltros: boolean
}

const BarraLateral = ({ mostrarFiltros }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                criterio="status"
                valor={enums.Status.PENDENTE}
                legenda="pendentes"
              />
              <FiltroCard
                criterio="status"
                valor={enums.Status.CONCLUIDA}
                legenda="concluídas"
              />
              <FiltroCard
                criterio="prioridade"
                valor={enums.Prioridade.URGENTE}
                legenda="urgentes"
              />
              <FiltroCard
                criterio="prioridade"
                valor={enums.Prioridade.IMPORTANTE}
                legenda="importantes"
              />
              <FiltroCard
                criterio="prioridade"
                valor={enums.Prioridade.NORMAL}
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>voltar a lista de tarefas</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default BarraLateral
