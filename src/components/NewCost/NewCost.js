import React from "react";
import CostForm from "./CostForm";
import './NewCost.css';

function NewCost(props){
    const saveCostDataHandler =(inputCOst) =>{
        const costData ={
            ...inputCOst,
            id : Math.random().toString(),
        }
        props.onCost(costData);
    }
    
    return (
        <div className="new-cost">
            <CostForm onSaveCostData ={saveCostDataHandler}/>
        </div>
    )
}

export default NewCost;