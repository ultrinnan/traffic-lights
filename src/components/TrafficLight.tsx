import Light from "./Light";
import React, { useState, useEffect } from 'react';

const lightDurations = [3000, 2000, 1000];

// initialValue should represent active light.
const TrafficLight = ({ initialValue }) => {
  //use react hooks useState  and  useEffect
  const [index, setIndex] = useState(initialValue);

  useEffect(() => {
    const subscription = setTimeout(()=>{
      setIndex(((( index + 1) % 3)));
    }, lightDurations[index]);
    return () => {
      clearTimeout(subscription);
    };
  });

  return (
    <div className="traffic-light">
      <Light color="#f00" active={index === 0} />
      <Light color="#ff0" active={index === 2} />
      <Light color="#0c0" active={index === 1} />
    </div>
  );
};

export default TrafficLight;
