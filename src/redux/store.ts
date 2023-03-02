import { configureStore } from '@reduxjs/toolkit'
import search from './search/slice'
import sort from './sort/slice'
import pizza from './pizza/slice'
import cart from './cart/slice'
import { useDispatch } from 'react-redux'


export const store = configureStore({
  reducer: {
    search,
    sort,
    pizza,
    cart,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
 export const useAppDispatch = () => useDispatch<AppDispatch>();