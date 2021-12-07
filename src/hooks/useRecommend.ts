import React, {useEffect, useState} from 'react'
import { _stock } from '../../interfaces'

export default function useRecommend({stock}: {stock: _stock}) {
    const [recommendation, setRecommendation] = useState<string>("")

    const average: number = (stock.datasets[0].data.reduce((a: number, b: number) => a + b) / stock.datasets[0].data.length)
    const todayPrice: number = stock.datasets[0].data[stock.datasets[0].data.length-1]
    const bottomThreshold: number = average * 0.7
    const topThreshold: number = average * 1.3

    useEffect(() => {
        if(todayPrice > topThreshold){
            setRecommendation("SELL")
        } else if(todayPrice < bottomThreshold){
            setRecommendation("BUY")
        } else {
            setRecommendation("HOLD")
        }
    }, [])

    return {recommendation, bottomThreshold, topThreshold}
   
}
