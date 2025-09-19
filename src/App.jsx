import { useDispatch, useSelector } from 'react-redux'
import { add, subtract, multiply, divide, reset } from './features/counter/counterSlice'
import { useState } from 'react'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const result = useSelector((state) => state.counter.value)

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)

  function handleAdd() {
    dispatch(add({ num1, num2 }))
  }

  function handleSubtract() {
    dispatch(subtract({ num1, num2 }))
  }

  function handleMultiply() {
    dispatch(multiply({ num1, num2 }))
  }

  function handleDivide() {
    dispatch(divide({ num1, num2 }))
  }

  function handleReset() {
    dispatch(reset())
    setNum1(0)
    setNum2(0)
  }

  return (
    <div className="container">
      <h2>Redux Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      />

      <div className="buttons">
        <button onClick={handleAdd}>+</button>
        <button onClick={handleSubtract}>-</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleDivide}>/</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <h3>Result: {result}</h3>
    </div>
  )
}

export default App
