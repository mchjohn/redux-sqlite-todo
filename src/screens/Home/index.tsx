import uuid from 'react-native-uuid'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addTodo, selectTodos } from '../../redux/features/todo-slice'
import { useAppSelector } from '../../hooks/useSelector'

import { Button } from '../../components/Button'
import { TodoList } from '../../components/TodoList'

import * as S from './styles'

export function Home() {
  const dispatch = useDispatch()
  const todos = useAppSelector(selectTodos)

  const [todoTitle, setTodoTitle] = useState('')

  const handleAddTodo = () => {
    const todo = { id: uuid.v4().toString(), name: todoTitle, isDone: false }

    dispatch(addTodo(todo))
  }

  return (
    <S.Container>
      <S.Todos>
        <TodoList todos={todos} />
      </S.Todos>

      <S.Form>
        <S.TextInput
          placeholder='Digite sua tarefa'
          onChangeText={(e) => setTodoTitle(e)}
        />

        <Button
          title='Adicionar'
          onPress={handleAddTodo}
        />
      </S.Form>
    </S.Container>
  )
}
