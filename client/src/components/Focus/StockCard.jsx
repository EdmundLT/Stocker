import React from "react";

const StockCard = (props) => {
  return (
    <div>
      <div className="flex text-sm font-Roboto font-light">
        <div className="text-left pt-4 w-1/6 text-slate-50 font-semibold">
          {props.perc > 0 ? (
            <span className=" bg-green-500 rounded-lg text-xs p-2 shadow-md">
              {props.symbol}
            </span>
          ) : (
            <span className="bg-red-500 rounded-lg text-xs p-2 shadow-md">
              {props.symbol}
            </span>
          )}
        </div>
        
        <div className="text-left pt-4 w-2/6"><a href={`https://finance.yahoo.com/quote/${props.symbol}`} target="_blank" rel="noreferrer">{props.name}</a></div>
        
        <div className="text-left pt-4 w-1/6">${props.ytd}</div>
        <div className="text-left pt-4 w-1/6">${props.price}</div>
        <div className="pt-4 w-1/6 font-normal">
          {props.perc > 0 ? (
            <span className="text-green-500">
              {Math.floor(props.perc * 100) / 100}%
            </span>
          ) : (
            <span className="text-red-500">
              {Math.floor(props.perc * 100) / 100}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default StockCard;
