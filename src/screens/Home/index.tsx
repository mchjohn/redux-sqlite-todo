import { useEffect } from 'react'

import { Button } from '../../components/Button'
import { TodoList } from '../../components/TodoList'

import * as S from './styles'
import { useTodo } from '../../hooks/useTodo'
import { Loading } from '../../components/Loading'

export function Home() {
  const {
    todos,
    todoTitle,
    isLoading,
    fetchTodos,
    handleAddTodo,
    setTodoTitle
  } = useTodo()

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <S.Container>
      <S.Todos>
        {isLoading && <Loading />}
        {!isLoading && <TodoList todos={todos} />}
      </S.Todos>

      <S.Form>
        <S.TextInput
          value={todoTitle}
          placeholder='Digite sua tarefa'
          onChangeText={(e) => setTodoTitle(e)}
        />

        <Button
          title='Adicionar'
          onPress={() => handleAddTodo(todoTitle)}
        />
      </S.Form>
    </S.Container>
  )
}
