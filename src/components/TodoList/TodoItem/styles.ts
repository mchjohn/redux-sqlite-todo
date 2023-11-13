import { Animated } from 'react-native'
import styled from 'styled-components/native'

type Props = {
  isDone: boolean;
}

export const Container = styled(Animated.View)`
  padding: 14px;
  align-items: center;
  border-radius: 4px;
  flex-direction: row;
  background-color: #DCDAE2;
`

export const Right = styled.View`
  flex: 1;
  gap: 12px;
`

export const Text = styled.Text<Props>`
  color: #041E24;
  font-size: 18px;
  margin-right: 12px;
  text-decoration: ${({ isDone }) => isDone ? 'line-through' : 'none'};
`

export const Footer = styled.View`
  gap: 14px;
  align-items: center;
  flex-direction: row;
`

export const Date = styled.Text`
  color: #6D6875;
  font-size: 14px;
`
