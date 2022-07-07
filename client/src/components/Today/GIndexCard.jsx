import React from "react";

const GIndexCard = (props) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-6 text-base font-Roboto font-light">
        <div className="text-left pt-2"><a href={`https://finance.yahoo.com/quote/${props.symbol}`} target="_blank" rel="noreferrer">{props.name.substring(0,8)}</a></div>
        <div className="text-left pt-2">{props.price}</div>
        <div className="pt-2 font-normal">
          {props.perc > 0 ? <span className='text-green-500'>{Math.floor(props.perc * 100) / 100}%</span> : <span className='text-red-500'>{Math.floor(props.perc * 100) / 100}%</span>}
          
        </div>
      </div>
    </div>
  );
};

export default GIndexCard;
