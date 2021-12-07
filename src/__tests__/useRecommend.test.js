import { renderHook } from '@testing-library/react-hooks'
import useRecommend from '../hooks/useRecommend'

test('Should recommend SELL', () => {
  let stock =  {
    datasets: [
        {
            data: [100, 200, 100, 200, 100, 200, 100, 200, 100, 210]
        }
    ]
} 

const { result } = renderHook(() => useRecommend({stock}))

expect(result.current.recommendation).toBe("SELL")

})

test('Should recommend BUY', () => {
  let stock =  {
    datasets: [
        {
            data: [100, 200, 100, 200, 100, 200, 100, 200, 100, 50]
        }
    ]
} 

const { result } = renderHook(() => useRecommend({stock}))

expect(result.current.recommendation).toBe("BUY")

})

test('Should recommend HOLD', () => {
  let stock =  {
    datasets: [
        {
            data: [100, 200, 100, 200, 100, 200, 100, 200, 100, 150]
        }
    ]
} 

const { result } = renderHook(() => useRecommend({stock}))

expect(result.current.recommendation).toBe("HOLD")

})
