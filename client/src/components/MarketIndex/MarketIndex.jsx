import React from "react";
import { useState } from "react";
import IndexCard from "./IndexCard";
import moment from "moment";
import { httpGetMarketIndex, httpGetStockPrice } from "../../hooks/requests";

const UISymbolList = ["^GSPC", "^DJI", "^IXIC"];

const MarketIndex = () => {
const DJIndex = httpGetMarketIndex(UISymbolList[0])

  return (
    <div className=" bg-slate-200 rounded-lg p-4 justify-center text-center h-56 shadow-xl hover:bg-slate-300">
      <p className="text-3xl font-Yanone pb-2">Market Index</p>
      <div className="p-2">
        <IndexCard 
          name={DJIndex.symbol}
          price={DJIndex.price}
          perc="1.43%"
        />
        <div className="pt-9 justify-between">
          <p className="text-left text-sm text-gray-500">
            Last Update: {moment().format("MM-DD-YYYY")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketIndex;
