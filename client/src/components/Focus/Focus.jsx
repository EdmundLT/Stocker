import React, { useState, useEffect } from "react";
import StockCard from "./StockCard";
import axios from "axios";
import { wls } from "../../data/data";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Trade = () => {
  const [WatchList, setWatchList] = useState([]);
  async function getStockIndex() {
    let temp = [];
    for (var i = 0; i < wls.length; i++) {
      await axios
        .get(`stocks/${wls[i]}`)
        .then(function (response) {
          const data = response.data;
          temp.push(data)
          return data;
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
    }
    setWatchList(temp);
  }

  useEffect(() => {
    getStockIndex();
    const interval = setInterval(() => {
      getStockIndex();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" rounded-lg p-4 text-center shadow-xl bg-[#DEF2F1]">
      <p className="text-2xl font-Roboto font-normal pb-1 col-span-4">Focus</p>
      <div className="flex font-Roboto font-medium">
        <div className="text-left pt-4 w-1/6">Symbol</div>
        <div className="text-left pt-4 w-2/6">Company</div>
        <div className="text-left pt-4 w-1/6">Previous Close</div>
        <div className="text-left pt-4 w-1/6">Price</div>
        <div className="pt-4 w-1/6">Percentage</div>
      </div>
      {WatchList.map((row) => {
        return (
          <StockCard
            symbol={row.symbol}
            ytd={row.prevClose}
            name={row.name.substring(0, 20)}
            price={row.price}
            perc={row.percentage}
          />
        );
      })}
      <div className="pt-2">
      <AddCircleIcon />
      </div>
    </div>
  );
};

export default Trade;
