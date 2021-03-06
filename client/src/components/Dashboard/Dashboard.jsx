import React from "react";
import Balance from "../Balance/Balance";
import MarketIndex from "../MarketIndex/MarketIndex";
import TopWatch from "../Focus/Focus";
import WatchList from "../Today/Today";
import News from "../News/News";

const Dashboard = (props) => {
  return (
    <div className="p-4 gap-4 mx-auto grid-cols-1 grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 container bg-[#3AAFA9]">
      <div className="col-span-1">
        <Balance />
      </div>
      <div className="col-span-1">
        <MarketIndex 
          tdIndex = {props}
        />
      </div>
      <div className="col-span-1">
        <WatchList />
      </div>
      <div className="col-span-1 md:col-span-2 lg:col-span-2">
        <TopWatch />
      </div>


      <News />
    </div>
  );
};

export default Dashboard;
