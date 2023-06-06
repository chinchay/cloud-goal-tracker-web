import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

// import logo from './logo.svg';
import './App.css';

// import { ShowCalendar } from './Calendar';

// import { GetRecords } from './Interface2Backend';
import Semicircle from './Semicircle';



// import { MyComponent } from './Interface2Backend';

// function MyFun(){
//     fun()
//     return(
//         <></>
//     )
// }

function App() {

    // const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };
    // const buttonInstance = (
    //     <div className="well" style={wellStyles}>
    //     <Button variant="secondary" bsSize="xsmall" >Scriptures Reading</Button>
    //     <Button variant="secondary" bsSize="xsmall">Journal Writing</Button>
    //     <Button variant="secondary" bsSize="xsmall">Exercising</Button>
    //     <Button variant="secondary" bsSize="xsmall">See my stats</Button>
    //     </div>
    // )

    return (
        <div className="App">

        <header className="App-header">
        {/* <header className='theHeader'> */}

            <h1 className='aTitle'>Habit Tracker</h1>
            <p className='aSubtitle'>Achieve your goals every day, and see your stats soar</p>

        </header>


        <section className='content'>
            <div className='semicircle'>
                <Semicircle />
            </div>


            <div className="row mb-1">
                <div className="col-4"></div>
                    <div className="col-4 d-grid gap-2">
                        <Button className="aButton" variant="secondary" bsSize="xsmall">Scriptures Reading</Button>
                        <Button className="aButton" variant="secondary" >Journal Writing</Button>
                        <Button className="aButton" variant="secondary" >Exercising</Button>
                        <Button className="aButton" variant="secondary" >See my stats</Button>
                    </div>
                <div className="col"></div>
            </div>

        </section>


{/* 
        <Button
            // onPress={onPressLearnMore}
            // title="Learn More"
            // color="#841584"
            // accessibilityLabel="Learn more about this purple button"
        /> */}

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        {/* <ShowCalendar /> */}

        {/* <GetRecords /> */}

        {/* <MyFun /> */}

        {/* <MyComponent /> */}

      {/* </header> */}
    </div>
  );
}

export default App;
