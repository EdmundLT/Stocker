import React from "react";
import GIndexCard from "./GIndexCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { GMI } from "../../data/data";
const Today = () => {
  const [gIndexList, setGIndexList] = useState([]);
  async function getMarketIndex() {
    let temp = [];
    for (var i = 0; i < GMI.length; i++) {
      await axios
        .get(`stocks/${GMI[i]}`)
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
    setGIndexList(temp);
  }

  useEffect(() => {
    getMarketIndex();
    const interval = setInterval(() => {
      getMarketIndex();
    }, 120000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" hover:bg-[#2B7A78] bg-[#DEF2F1] rounded-lg p-4 h-56 shadow-xl text-center">
      <p className="text-2xl font-normal pb-2 font-Roboto">
        Global Market Index
      </p>
      {gIndexList.map((index) => {
        return (
          <GIndexCard
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

export default Today;
