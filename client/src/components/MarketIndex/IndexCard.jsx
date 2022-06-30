import React from "react";

const IndexCard = (props) => {
  return (
    <div>
      return (
      <div className="grid grid-cols-3 gap-6 text-sm">
        <div className="text-left pt-2">{props.name}</div>
        <div className="text-left pt-2">{props.price}</div>
        <div className="pt-2">{props.perc}</div>
      </div>
      );
    </div>
  );
};

export default IndexCard;
