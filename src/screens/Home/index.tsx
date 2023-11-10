import { useEffect } from 'react'

import { useTodoContext } from '../../contexts/useTodo'

import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading'
import { TodoList } from '../../components/TodoList'

import * as S from './styles'

export function Home() {
  const { todo } = useTodoContext()

  useEffect(() => {
    todo.fetchAll()
  }, []) // eslint-disable-line

  return (
    <S.Container>
      <S.Todos>
        {todo.isLoading && <Loading />}
        {!todo.isLoading && <TodoList todos={todo.all} />}
      </S.Todos>

      <S.Form>
        <S.TextInput
          value={todo.name}
          placeholder='Digite sua tarefa'
          onChangeText={(e) => todo.setName(e)}
        />

        <Button
          title='Adicionar'
          onPress={() => todo.handleAdd(todo.name)}
        />
      </S.Form>
    </S.Container>
  )
}
