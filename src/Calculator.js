import React, { useState } from "react";
import "./Calculator.css";



const distances = [1,4,4,9,10,13,13,14,14,14,16,16,19,20,20,20,21,24,26,28,29,37,38]; // Your distances array
const cost_of_living =[31716,30460,32220,29880,30336,30432,29472,32980,31716,29964,30588,30708,28656,30960,30360,31764,30980,30036,32680,30420,31104,34896,38928]; // Your cost_of_living array
const names = ["Sunny Isles Beach, Florida",
  "North Miami, Florida",
  "North Miami Beach, Florida",
  "West Little River, Florida",
  "Hollywood, Florida",
  "Miami Gardens, Florida",
  "Dania Beach, Florida",
  "Country Club, Florida",
  "Miami Beach, Florida",
  "Miami Lakes, Florida",
  "Miramar, Florida",
  "Hialeah, Florida",
  "Fort Lauderdale, Florida",
  "Hialeah Gardens, Florida",
  "Davie, Florida",
  "Coral Gables, Florida",
  "South Miami, Florida",
  "Plantation, Florida",
  "Fontainebleau, Florida",
  "Sunrise, Florida",
  "Weston, Florida",
  "Coral Springs, Florida",
  "Boca Raton, Florida"]; 

const Calculator = () => {
  const [salary, setSalary] = useState(50000);
  const [maxDistance, setMaxDistance] = useState(25);
  const [percentOffset, setPercentOffset] = useState(10);
  const [topLocations, setTopLocations] = useState([]);

  const housing_filter = (salary, max_distance, percent_offset) => {
    let max_cost_of_living = salary - salary * (percent_offset / 100);

    let acceptable_distances = 0;                                                                     //Max distance
    for (acceptable_distances; acceptable_distances < distances.length; acceptable_distances++){
        if (distances[acceptable_distances] > max_distance){
            break;
        }
    }

    const valid_houses = [];                                  //array holding the index of houses that meet the distance and CoL requirement
    for (let i = 0; i <= acceptable_distances; i++){
        if(cost_of_living[i] <= max_cost_of_living){
            valid_houses[valid_houses.length] = i;                        //add to the array
        }
    }
                                                        
    for (let i = 0; i < valid_houses.length; i++){             //Sort valid houses by price
        let minIndex = i;
        for(let j = i + 1; j < valid_houses.length; j++){
            if (cost_of_living[valid_houses[minIndex]] < cost_of_living[valid_houses[j]]){
                minIndex = j;
            }
        }
        let temp = valid_houses[i];
        valid_houses[i] = valid_houses[minIndex];
        valid_houses[minIndex] = temp;
    }

    // Calculate the top 5 locations and store them in topLocations
    const topLocations = [];
    const topCount = Math.min(5, valid_houses.length);

    for (let i = 0; i < topCount; i++) {
      topLocations.push({
        name: names[valid_houses[i]],
        price: cost_of_living[valid_houses[i]],
        distance: distances[valid_houses[i]],
      });
    }

    setTopLocations(topLocations);
  };

  const handleCalculate = () => {
    housing_filter(salary, maxDistance, percentOffset);
  };




  return (
    <div className="salary__calcu">
      <h2>Find Affordable Communities Near You:</h2>
      <div>
        <label>Annual Salary: {" "}</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
      <div>
        <label>Search Radius: {" "}</label>
        <input
          type="number"
          value={maxDistance}
          onChange={(e) => setMaxDistance(e.target.value)}
        />
      </div>

      <div>
        <label>Disposable Income: </label>
        <input
          placeholder="%"
          type="number"
          value={percentOffset}
          onChange={(e) => setPercentOffset(e.target.value)}
        />
      </div>

      <button onClick={handleCalculate}>Calculate</button>

      <div className="salary__stat">
      
        <h3>Top 5 Locations (City, Cost of Living, Mile radius):</h3>
        <ul>
          {topLocations.map((location, index) => (
            <li key={index}>
              {`${index + 1}-  ${location.name}, $${location.price},  ${location.distance} miles`}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Calculator;
