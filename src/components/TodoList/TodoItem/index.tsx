import { Octicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'

import { ITodo } from '../../../interfaces/todo'

import { AppDispatch } from '../../../redux/store'
import { removeTodoAsync, toggleTodoIsDoneAsync } from '../../../redux/features/todo'

import * as S from './styles'

export function TodoItem({ task }: { task: ITodo }) {
  const dispatch = useDispatch<AppDispatch>()

  const isDone = task.isDone > 0

  return (
    <S.Container>
      <S.Right>
        <S.Text isDone={isDone}>{task.name}</S.Text>

        <S.Footer>
          <S.Date>14:06 13/11/2023</S.Date>
          <Octicons
            name="trash"
            size={20}
            color="#6D6875"
            onPress={() => dispatch(removeTodoAsync(task.id))}
          />
        </S.Footer>
      </S.Right>

      <Octicons
        size={32}
        name={isDone ? 'check-circle' : 'circle'}
        color={isDone ? '#2F9363' : '#5bac85'}
        onPress={() => dispatch(toggleTodoIsDoneAsync(task))}
      />
    </S.Container>
  )
}
