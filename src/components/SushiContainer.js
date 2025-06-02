import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi, eaten }) {
  const [ sushiIndex,setSushiIndex ] = useState(0);

  function handleMoreSushi () {
    setSushiIndex(sushiIndex + 4);
  }

  const sushiCard = sushis.slice(sushiIndex, sushiIndex + 5).map((sushi) => {
    return <Sushi
      key={sushi.id}
      sushi={sushi}
      onEatSushi={onEatSushi}
      eaten={sushi.eaten}
    />
  });
  
  return (
    <div className="belt">
      {sushiCard}
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
