//import logo from './logo.svg';
// import { Greeting } from './Greeting';
// import { PeopleList } from './PeopleList';
import React, {useState} from 'react';
import './App.css';
import { CounterButton } from './CounterButton.js';
import { CogratulatiosMessage } from './CongratulationsMessage';

// const People = [
//   {
//     name: "mourya",
//     age: 25,
//     hairColor: "black"
//   },
//   {
//     name: "sreelekha Das",
//     age: 28,
//     hairColor: "black"
//   }
// ]
//console.log('app');
function App() {
  // let url = "https://reactjs.org";
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <header className="App-header">
        <CogratulatiosMessage numberOfClicks={numberOfClicks} threshold={10} />
        <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
      </header>
    </div>
  );
}


export default App;
