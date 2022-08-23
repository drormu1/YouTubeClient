import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import initReducer from  '../features/init/initSlice'
import operationsReducer from  '../features/operations/operationsSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    operations:operationsReducer,
    init:initReducer,
   
  },
})
