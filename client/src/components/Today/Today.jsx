import React from "react";
import CrazyStock from "./CrazyStock";
const Today = () => {
  return (
    <div className=" bg-slate-200 rounded-lg p-4 h-56 shadow-xl hover:bg-slate-300 text-center">
      <p className="text-3xl font-Yanone pb-2">Crazy Stock</p>
      <CrazyStock />

    </div>
  );
};

export default Today;
