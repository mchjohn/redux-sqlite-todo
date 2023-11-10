import { Octicons } from '@expo/vector-icons'

import { ITodo } from '../../interfaces/todo'

import { useTodoContext } from '../../contexts/useTodo'

import * as S from './styles'

export function TodoItem({ task }: { task: ITodo }) {
  const { todo } = useTodoContext()

  const isDone = task.isDone > 0

  return (
    <S.Item>
      <S.Text isDone={isDone}>{task.name}</S.Text>

      <S.Actions>
        <Octicons
          size={32}
          name={isDone ? 'check-circle' : 'circle'}
          color={isDone ? '#2F9363' : '#5bac85'}
          onPress={() => todo.handleUpdate(task)}
        />
        <Octicons
          name="trash"
          size={32}
          color="#E96D3A"
          onPress={() => todo.handleDelete(task)}
        />
      </S.Actions>
    </S.Item>
  )
}
