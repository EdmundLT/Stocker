import React from "react";
import { useState } from "react";
import IndexCard from "./IndexCard";
import moment from "moment";
const MarketIndex = () => {
  const [market, SetMarket] = useState("US");
  return (
    <div className=" bg-slate-200 rounded-lg p-4 justify-center text-center h-56">
      <p className="text-3xl font-Yanone pb-2">{market} Market Index</p>
      <div className="p-4">
      <IndexCard />
      <div className="flex pt-9 justify-between">
        <p className="text-left text-sm text-gray-500">
          Last Update: {moment().format("MM-DD-YYYY")}
        </p>
        </div>
      </div>
    </div>
  );
};

export default MarketIndex;
