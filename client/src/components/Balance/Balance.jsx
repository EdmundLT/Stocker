import React, { useState } from "react";
import millify from "millify";
import { balance } from "../../data/data";
import moment from "moment";
import RefreshIcon from "@mui/icons-material/Refresh";
const Balance = () => {
  const [cBalance, SetBalance] = useState(0);
  const [currency, SetCurrency] = useState("USD");
  const [percentageDiff, SetPercentageDiff] = useState(1.53);

  function UpdateBalance() {
    let latset = balance.amount;
    SetBalance(latset);
  }
  setInterval(UpdateBalance, 5000);
  return (
    <div className="  rounded-lg p-4 h-56 shadow-xl hover:bg-[#2B7A78] bg-[#DEF2F1]">
      <p className="text-2xl font-Roboto font-normal pb-2 text-center">Your Assets</p>
      <p className="text-xl font-Roboto text-left pb-2">
        Account Balance:
         $ {millify(cBalance, {
          precision: 3,
          decimalSeparator: ",",
          lowercase: true,
          space: true,
        })} {" - "} <span className="text-base">{currency}</span>
      </p>
      <p className="text-xl font-Roboto text-left">
        Percentage Change: {percentageDiff}%
      </p>
      <div className="flex pt-12 justify-between">
        <p className="text-left text-sm text-gray-500">
          Last Update: {moment().format("MM-DD-YYYY")}
        </p>
        <div onClick={UpdateBalance} className="cursor-pointer">
          <RefreshIcon />
        </div>
      </div>
    </div>
  );
};

export default Balance;
