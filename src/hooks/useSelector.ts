import { useSelector, TypedUseSelectorHook } from 'react-redux'

import { RootState } from '../redux/store'

// Define uma tipagem para o useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
