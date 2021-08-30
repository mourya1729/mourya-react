// import React, {useState} from 'react';
import React from 'react';
// lesson 2.1
// export const CounterButton = () => {
//     console.log('rendering CounterButton');
//     const [numberOfClicks, setNumberOfClicks] = useState(0);

//     const increment = () => setNumberOfClicks(numberOfClicks + 1);

//     // let numberOfClicks = 0;
//     // const increment = () => {
//     //     console.log(numberOfClicks);
//     //     numberOfClicks = numberOfClicks +1;
//     // };
//     return (
//         <>
//             <p>you'have clicked {numberOfClicks} times</p>
//             <button onClick={increment}>Click Me!</button>
//         </>
//     )
// }

//lesson 2.2
export const CounterButton = ({ onIncrement, numberOfClicks }) => {
    console.log('render CounterButton');
    // const [numberOfClicks, setNumberOfClicks] = useState(0);

    // const increment = () => setNumberOfClicks(numberOfClicks + 1);

    // let numberOfClicks = 0;
    // const increment = () => {
    //     console.log(numberOfClicks);
    //     numberOfClicks = numberOfClicks +1;
    // };
    return (
        <>
            <p>you'have clicked {numberOfClicks} times</p>
            <button onClick={onIncrement}>Click Me!</button>
        </>
    )
}