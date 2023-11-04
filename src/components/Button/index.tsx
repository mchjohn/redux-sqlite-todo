import * as S from './styles'

interface Props {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress }: Props) {
  return (
    <S.Pressable onPress={onPress}>
      <S.Text>{title}</S.Text>
    </S.Pressable>
  )
}
