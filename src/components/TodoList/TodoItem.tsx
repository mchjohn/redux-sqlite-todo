import * as S from './styles'

export const TodoItem = ({ title }: { title: string }) => (
  <S.Item>
    <S.Text>{title}</S.Text>
  </S.Item>
)
