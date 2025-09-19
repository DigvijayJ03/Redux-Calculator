import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = Number(action.payload.num1) + Number(action.payload.num2)
    },
    subtract: (state, action) => {
      state.value = Number(action.payload.num1) - Number(action.payload.num2)
    },
    multiply: (state, action) => {
      state.value = Number(action.payload.num1) * Number(action.payload.num2)
    },
    divide: (state, action) => {
      state.value = Number(action.payload.num2) !== 0
        ? Number(action.payload.num1) / Number(action.payload.num2)
        : 0 // avoid divide by zero error
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

export const { add, subtract, multiply, divide, reset } = counterSlice.actions

export default counterSlice.reducer
