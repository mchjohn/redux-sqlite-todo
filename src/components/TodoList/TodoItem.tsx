import { Octicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'

import { ITodo } from '../../interfaces/todo'

import { AppDispatch } from '../../redux/store'
import { removeTodoAsync, toggleTodoIsDoneAsync } from '../../redux/features/todo'

import * as S from './styles'

export function TodoItem({ task }: { task: ITodo }) {
  const dispatch = useDispatch<AppDispatch>()

  const isDone = task.isDone > 0

  return (
    <S.Item>
      <S.Text isDone={isDone}>{task.name}</S.Text>

      <S.Actions>
        <Octicons
          size={32}
          name={isDone ? 'check-circle' : 'circle'}
          color={isDone ? '#2F9363' : '#5bac85'}
          onPress={() => dispatch(toggleTodoIsDoneAsync(task))}
        />
        <Octicons
          name="trash"
          size={32}
          color="#E96D3A"
          onPress={() => dispatch(removeTodoAsync(task.id))}
        />
      </S.Actions>
    </S.Item>
  )
}
