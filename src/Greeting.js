import React from 'react';

// export function Greeting() {
// export const Greeting = (props) => {
//     const { name, numberOfMessages} = props; or props.name and props.numberOfMessages
// }
export const Greeting = ({ name, numberOfMessages}) => {
    if (!name) return null;
    let isMorning = (new Date()).getHours() < 12;
    let greetingHeader = isMorning 
                        ? <h3>Good Morning {name}!</h3>
                        : <h3>Good Evening {name}!</h3> 
    let messageLine = numberOfMessages === 0
                    ? null
                    : <p>you have {numberOfMessages} new messages</p>
return(
        <>
            { greetingHeader }
            { messageLine }
            
        </>
    ) ;
}

// export default Greeting;