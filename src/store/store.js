import { configureStore } from '@reduxjs/toolkit'
import expenditureReducer from "../redux/expSlice"

export const store = configureStore({
  reducer: {
    //providing name for reducer as myExpenditure
   myExpenditure: expenditureReducer
  },
})