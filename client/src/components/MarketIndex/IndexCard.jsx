import React, { useState } from 'react'
import { USIndex } from '../../data/data';
const IndexCard = (props) => {
  return (
    <div>
        {USIndex.map((index, i) => {
          return (
            <div className="grid grid-cols-3 gap-4">
            <div className='text-left'>{index.name}</div>
            <div className='text-left'>{index.now}</div>
            <div>1.43%</div>
            
            </div>
          );
        })}
    </div>
  )
}

export default IndexCard