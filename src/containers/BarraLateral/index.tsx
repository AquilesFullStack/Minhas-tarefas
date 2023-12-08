import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../stores'
import { alteraTermo } from '../../stores/reducers/filtro'
import * as S from '../BarraLateral/styles'
import * as enums from '../../utils/enums/Tarefa'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
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
      </div>
    </S.Aside>
  )
}

export default BarraLateral
