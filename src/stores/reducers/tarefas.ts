import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JS',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar HTML',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Rever aula 2',
      2
    ),
    new Tarefa(
      'Estudar TS',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Estudar urgentemente',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
