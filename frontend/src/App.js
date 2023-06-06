import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ProgressCircle from './ProgressCircle';
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import { Request2Backend } from './Connect2Backend';
import { BuildCalendar } from './Calendar';

function App() {

    const response = Request2Backend()
    // console.log(response)

    const [showStats, SetShowStats] = useState(false)

    return (
        <div className="App">

            <header className="App-header">
                <h1 className='aTitle'>Habit Tracker</h1>
                <p className='aSubtitle'>Achieve your goals every day, and see your stats soar</p>
            </header>


            <section className='content'>

                <div className='semicircle'>
                    <ProgressCircle />
                </div>

                <div className="row mb-1">
                    <div className="col-4"></div>
                        <div className="col-4 d-grid gap-2">
                            <Button className="aButton" variant="secondary" >Scriptures Reading</Button>
                            <Button className="aButton" variant="secondary" >Journal Writing</Button>
                            <Button className="aButton" variant="secondary" >Exercising</Button>
                            <Button className="aButton" variant="secondary" onClick={()=>{SetShowStats(true)}} >See my stats</Button>
                        </div>
                    <div className="col"></div>
                </div>

                <BuildCalendar response={response} width={300} months={4}/>

                <div className='calendarModal'>
                    <Modal
                        scrollable      = {true}
                        show={showStats}
                        onHide          = {()=>SetShowStats(false)}
                        // centered size   = "xl"
                    >
                        <Modal.Header>
                            <Modal.Title>My stats for the current year</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <BuildCalendar response={response} width={800} months={12}/>

                        </Modal.Body>


                    </Modal>

                </div>

                {/* <GetRecords /> */}

            </section>

    </div>
  );
}

export default App;
