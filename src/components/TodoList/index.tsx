import { ITodo } from '../../interfaces/todo'

import * as S from './styles'

import { TodoItem } from './TodoItem'

export function TodoList({ todos }: { todos: ITodo[] }) {
  return (
    <S.TodoList
      data={todos}
      renderItem={({ item }) => <TodoItem title={item.name} />}
      keyExtractor={item => item.id}
      contentContainerStyle={{ gap: 16, paddingBottom: 32 }}
    />
  )
}
