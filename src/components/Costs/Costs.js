import CostItem from "./CostItem";
import React , {useState} from "react";
import './Costs.css';
import CostsFilter from "./CostsFilter";
import CostsDiagram from "./CostsDiagram";

function Costs(props){
    const [selectedYear , setSelectedYear] = useState('2021');

    const yearChangeHandler =(year) =>{
        setSelectedYear(year);
        
    }

    const filteredCosts = props.costs.filter((cost) =>{
        return cost.date.getFullYear().toString() === selectedYear;
    });

    return(
        <div>
            <div className="costs">
            <CostsFilter year = {selectedYear} onChangeYear={yearChangeHandler}/>
            <CostsDiagram costs={filteredCosts}/>
            {filteredCosts.length ===0 && <p >В этом году нету расходов</p>}
            {filteredCosts.length > 0 &&
             filteredCosts.map((cost) => (
                <CostItem
                key={cost.id}
                date ={cost.date} 
                description ={cost.description}
                amount ={cost.amount}/>
            ))}        
            </div>
        </div>
    )
}

export default Costs;