import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiCard = sushis.slice(sushiIndex, sushiIndex + 4).map((sushi) => {
    return <Sushi
      key={sushis.id}
      name={sushis.name}
      url={sushis.img_url}
      price={sushis.price}
    />
  });
  
  return (
    <div className="belt">
      {sushiCard}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
