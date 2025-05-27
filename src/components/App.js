import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushis,setSushis ] = useState([]);
  const [ wallet, setWallet ] = useState(100);

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then((sushiList) => sushiList())
  })

  function sushiList (updates) {
    const updatedSushis = sushiList.map(() => {
      return {...sushis, eaten:false}
    })
    setSushis(updatedSushis)
  }

  function eatSushi() {
    if (wallet >= eatenSushi.price ) {
      
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis}/>
      <Table />
    </div>
  );
}

export default App;
