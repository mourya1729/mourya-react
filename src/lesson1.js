//import logo from './logo.svg';
import { Greeting } from './Greeting';
import { PeopleList } from './PeopleList';
import './App.css';

const People = [
  {
    name: "mourya",
    age: 25,
    hairColor: "black"
  },
  {
    name: "sreelekha Das",
    age: 28,
    hairColor: "black"
  }
]

// const displayAlert = () => {
//   alert("Hello!");
// }
function App() {
  let url = "https://reactjs.org";
  return (
    <div className="App">
      <header className="App-header">
        <Greeting name="mourya" numberOfMessages={10}/>
        <PeopleList People={People}/>
        {/* <button onClick={displayAlert}>Click Me!</button> */}
        <button onClick={() => alert("Hello!")}>Click Me!</button>
        <p>
          THIS IS COOL!
        </p>
        <a
          className="App-link"
          href={ url }
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
