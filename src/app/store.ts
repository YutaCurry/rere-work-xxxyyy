import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createBrowserHistory } from 'history'
import counterReducer from '../features/counter/counterSlice'

export const history = createBrowserHistory()

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch