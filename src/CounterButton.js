import React, {useState} from 'react';

export const CounterButton = () => {
    console.log('rendering CounterButton');
    const [numberOfClicks, setNumberOfClicks] = useState(0);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);

    // let numberOfClicks = 0;
    // const increment = () => {
    //     console.log(numberOfClicks);
    //     numberOfClicks = numberOfClicks +1;
    // };
    return (
        <>
            <p>you'have clicked {numberOfClicks} times</p>
            <button onClick={increment}>Click Me!</button>
        </>
    )
}