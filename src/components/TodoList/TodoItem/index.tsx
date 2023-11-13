import { Animated } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import { ITodo } from '../../../interfaces/todo'

import { AppDispatch } from '../../../redux/store'
import { removeTodoAsync, toggleTodoIsDoneAsync } from '../../../redux/features/todo'

import * as S from './styles'

export function TodoItem({ task }: { task: ITodo }) {
  const dispatch = useDispatch<AppDispatch>()

  const fadeAnimation = useRef(new Animated.Value(0)).current
  useEffect(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()
  }, []) // eslint-disable-line

  const isDone = task.isDone > 0

  const handleToggle = () => {
    dispatch(toggleTodoIsDoneAsync(task))
  }

  const handleRemove = () => {
    dispatch(removeTodoAsync(task.id))
  }

  return (
    <S.Container style={{ opacity: fadeAnimation }}>
      <S.Right>
        <S.Text isDone={isDone}>{task.name}</S.Text>

        <S.Footer>
          <S.Date>14:06 13/11/2023</S.Date>
          <Octicons
            name="trash"
            size={20}
            color="#6D6875"
            onPress={handleRemove}
          />
        </S.Footer>
      </S.Right>

      <Octicons
        size={32}
        name={isDone ? 'check-circle' : 'circle'}
        color={isDone ? '#2F9363' : '#5a8f75'}
        onPress={handleToggle}
      />
    </S.Container>
  )
}
