import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const TodoList = (styled.FlatList`
  gap: 24px;
  background-color: 'white';
` as unknown) as typeof FlatList

export const Item = styled.View`
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 4px;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #14213d;
`

export const Text = styled.Text`
  color: #FFC300;
  font-size: 18px;
`
