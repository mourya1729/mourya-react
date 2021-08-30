import React from 'react';


// lesson 2.2
export const CogratulatiosMessage = ({ numberOfClicks, threshold}) => {
    // console.log('congratulaions!')
    return (numberOfClicks >= threshold) 
        ? <h1>Congratulationsss! You've reached {threshold} number of clicks!</h1> 
        : null;

}