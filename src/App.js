//import logo from './logo.svg';
// import { Greeting } from './Greeting';
// import { PeopleList } from './PeopleList';
import './App.css';
import { CounterButton } from './CounterButton.js';

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

function App() {
  let url = "https://reactjs.org";
  return (
    <div className="App">
      <header className="App-header">
        <CounterButton />
      </header>
    </div>
  );
}

export default App;
