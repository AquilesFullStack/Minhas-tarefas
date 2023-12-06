import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

type TarefaState = {
  itens: Tarefa[]
}

const initialState: TarefaState = {
  itens: [
    {
      id: 1,
      descricao: 'estudar materia A',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'estudar java'
    },
    {
      id: 2,
      descricao: 'estudar materia B',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'estudar javaS'
    },
    {
      id: 3,
      descricao: 'estudar materia C',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDA,
      titulo: 'estudar javaB'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
