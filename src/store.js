import { configureStore } from '@reduxjs/toolkit';  //importing redux toolkit library
import habitsReducer from './features/habitsSlice';  //importing reducer function
const store = configureStore({                        //for creating a redux store using this fun
  reducer: {
    allHabits: habitsReducer,
  },
})

export default store;           //exproting a store 
