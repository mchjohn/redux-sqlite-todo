import { Octicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { ITodo } from '../../interfaces/todo'
import { toggleDoneTodo } from '../../redux/features/todo-slice'


export function TodoItem({ todo }: { todo: ITodo }) {
  const dispatch = useDispatch()

  const handleDoneTodo = () => {
    dispatch(toggleDoneTodo(todo))
  }

  return (
    <S.Item>
      <S.Text isDone={todo.isDone}>{todo.name}</S.Text>

      <S.Actions>
        <Octicons
          size={32}
          name={todo.isDone ? 'check-circle' : 'circle'}
          color={todo.isDone ? '#2F9363' : '#5bac85'}
          onPress={handleDoneTodo}
        />
        <Octicons name="trash" size={32} color="#E96D3A" />
      </S.Actions>
    </S.Item>
  )
}
