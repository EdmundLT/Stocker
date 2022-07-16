import { useEffect, useState } from "react";
import IndexCard from "./IndexCard";
import { USSymbol } from "../../data/data";
const axios = require("axios").default;
const MarketIndex = () => {
  const [IndexList, setIndexList] = useState([]);
  async function getMarketIndex() {
    let temp = [];
    for (var i = 0; i < USSymbol.length; i++) {
      await axios
        .get(`stocks/${USSymbol[i]}`)
        .then(function (response) {
          const data = response.data;
          temp.push(data);
          return data;
        })
        .catch(function (error) {
          console.log(error);
          return error;
        });
    }
    setIndexList(temp);
  }

  useEffect(() => {
    getMarketIndex();
    const interval = setInterval(() => {
      getMarketIndex();
    }, 120000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" rounded-lg p-4 justify-center text-center h-56 shadow-xl  hover:bg-[#2B7A78] bg-[#DEF2F1]">
      <p className="text-2xl font-Roboto pb-2 font-normal">US Market Index</p>
      {IndexList.map((index) => {
        return (
          <IndexCard
            name={index.name}
            price={index.price}
            perc={index.percentage}
            symbol={index.symbol}
          />
        );
      })}
    </div>
  );
};

export default MarketIndex;
