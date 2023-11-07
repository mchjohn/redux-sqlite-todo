import { useHome } from './useHome'

import { Button } from '../../components/Button'
import { TodoList } from '../../components/TodoList'

import * as S from './styles'

export function Home() {
  const { todos, setTodoTitle, handleAddTodo } = useHome()

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
