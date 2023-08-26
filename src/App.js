import React, {useState} from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 3,1),
    description : 'Microphone',
    amount : 234.78,
  },
  {
    id : 'c2',
    date: new Date(2022, 5,9),
    description : 'Headphones',
    amount : 999.38,
  },
  {
    id: 'c3',
    date: new Date(2020, 12,5),
    description : 'HP',
    amount : 1299.00,
  }
]

function App() {
  const [costs , setCosts] = useState(INITIAL_COSTS);
  
  const addCostHandler =(costData)=>{
    setCosts((prevCosts) =>{
      return [costData , ...prevCosts]
    })
  }
  return (
    <div className="App">
      <NewCost onCost = {addCostHandler} />
      <Costs costs = {costs}/>
    </div>
  );
}

export default App;
