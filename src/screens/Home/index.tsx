import { useHome } from './useHome'

import { Button } from '../../components/Button'
import { Loading } from '../../components/Loading'
import { TodoList } from '../../components/TodoList'

import * as S from './styles'

export function Home() {
  const { todos, todoName, isLoading, setTodoName, handleAddTodo } = useHome()

  return (
    <S.Container>
      <S.Todos>
        {isLoading && <Loading />}
        {!isLoading && <TodoList todos={todos} />}
      </S.Todos>

      <S.Form>
        <S.TextInput
          value={todoName}
          placeholder='Digite sua tarefa'
          onChangeText={(e) => setTodoName(e)}
        />

        <Button
          title='Adicionar'
          onPress={handleAddTodo}
        />
      </S.Form>
    </S.Container>
  )
}
