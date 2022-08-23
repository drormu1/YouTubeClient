import React , {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment , getRandomNumber } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const loading = useSelector((state) => state.counter.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRandomNumber())
  }, [])

  if (loading) return <p>Loading...</p>


  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}