import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const TodoList = (styled.FlatList`
  gap: 24px;
` as unknown) as typeof FlatList

export const Item = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 4px;
  background-color: #DCDAE2;
  padding-vertical: 8px;
  padding-horizontal: 16px;
`

export const Actions = styled.View`
  gap: 14px;
  flex-direction: row;
`

type Props = {
  isDone: boolean;
}

export const Text = styled.Text<Props>`
  flex: 1;
  color: #041E24;
  font-size: 18px;
  margin-right: 12px;
  text-decoration: ${({ isDone }) => isDone ? 'line-through' : 'none'};
`
