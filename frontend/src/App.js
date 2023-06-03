import logo from './logo.svg';
import './App.css';

// import { ShowCalendar } from './Calendar';

import { GetRecords } from './Interface2Backend';

// import { MyComponent } from './Interface2Backend';

// function MyFun(){
//     fun()
//     return(
//         <></>
//     )
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* <ShowCalendar /> */}

        <GetRecords />

        {/* <MyFun /> */}

        {/* <MyComponent /> */}

      </header>
    </div>
  );
}

export default App;
