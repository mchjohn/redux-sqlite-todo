import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const TodoList = (styled.FlatList`
  gap: 24px;
` as unknown) as typeof FlatList
