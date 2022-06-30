import React from 'react'
import StockCard from './StockCard'
const Trade = () => {

  return (
    <div className=" bg-slate-200 rounded-lg p-4 text-center shadow-xl hover:bg-slate-300">
    <p className="text-3xl font-Yanone pb-1 col-span-4">Focus</p>
    <StockCard />
    </div>
  )
}

export default Trade