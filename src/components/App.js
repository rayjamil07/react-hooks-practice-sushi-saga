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
    .then((sushis) => {
        const updatedSushis = sushis.map(() => {
      return {...sushis, eaten:false}
    });
      setSushis(updatedSushis);
    });
  }, []);


  const eatenSushi = sushis.filter((sushi) => sushi.eaten);

  function eatSushi () {
    if (wallet >= eatenSushi.price ) {
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          return {...sushis, eaten:true}
        }
      })
        setSushis(updatedSushis)
        setWallet(() => wallet - eatenSushi.price)

    } else {
      alert ('Need more money !!!')
    }
  }

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEatSushi={eatSushi} eaten={eatenSushi}/>
      <Table wallet={wallet}/>
    </div>
  );
}

export default App;
