import React from "react";
import Balance from "../Balance/Balance";
import MarketIndex from "../MarketIndex/MarketIndex";
import TopWatch from "../Focus/Focus";
import WatchList from "../WatchList/WatchList";
import News from "../News/News";

const Dashboard = () => {
  return (
    <div className="p-4 text-center grid grid-cols-3 gap-4 bg-gray-800">
      <div>
        <Balance />
      </div>
      <div>
        <MarketIndex />
      </div>
      <div>
        <TopWatch />
      </div>

      <div className="col-span-2">
        <WatchList />
      </div>
      <News />
    </div>
  );
};

export default Dashboard;
