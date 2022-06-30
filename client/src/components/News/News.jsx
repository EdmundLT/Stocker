import React from 'react'
import {NewsList} from '../../data/data'
const News = () => {
  return (
    <div className=" bg-slate-200 rounded-lg p-4 justify-center text-center shadow-xl hover:bg-slate-300">
    <p className="text-3xl font-Yanone pb-2">News</p>
    {NewsList.map((news)=>{
      return (
        <div className='text-left pb-4 cursor-pointer'>
        <a href={news.link}>
      <p className='text-2xl'>{news.title}</p>
      <p className='pt-2'>{news.content.substring(0, 50)+ "..."}</p>
      </a>
    </div>
      )
    })}


    </div>
  )
}

export default News