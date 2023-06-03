import axios from "axios"

import React, { useState, useEffect } from 'react';

// https://reactjsexample.com/a-customizable-calendar-heatmap-react-component-built-on-svg/
import HeatMap from '@uiw/react-heat-map';

export function GetRecords() {
    const [responseData, setResponseData] = useState(null);
  
    // cannot do `await sleep(1000)`
    // because I get this error
    // error: Invalid hook call. Hooks can only be called inside of the body of a function component...
    // so  I had to comment it out
    // await sleep(1000)
    // Instead, I added `time.sleep(2)` in the backend/, in views.api()  ;)

    let listHabit = null
    let listRecord = null

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
        .then(response => {
            
            listHabit  = response.data.listHabit
            listRecord = response.data.listRecord

            // setResponseData(listRecord[0])
            // setResponseData(listRecord)
            setResponseData(response.data)

            const n = listHabit.length



            for (let i = 0; i < n; i++){
                const value = listRecord[i]
                console.log(value)
                // console.log("--")

            }            


            // console.log(listHabit)
            

            // const jsonData = JSON.stringify(response.data)
            // setData(jsonData)
            
        })
        .catch(error => {
            console.error(error);
        });
    }, []);
  

    if (responseData === null) {
      // Render a loading state or fallback component while waiting for the response
      return <div>Loading...</div>;
    }
  
    // Render the actual data once the promise is resolved
    // return <div>{responseData}</div>;

    const listHeatMap = []

    listHabit = responseData.listHabit
    listRecord = responseData.listRecord

    for(let i in listRecord){
        // console.log(responseData[i])


        listHeatMap.push(
            <div key={i}>
                <h1>{listHabit[i].replace("_", " ")}</h1>
                <HeatMap
                    
                    style={{ color: '#7d7d7d' }}
                    width={800}
                    value={listRecord[i]}
                    // value={
                        // [
                        //     {"date":"2023/05/01","count":"1"},
                        //     {"date":"2023/05/02","count":"1"},
                        //     {"date":"2023/05/30","count":"0"},
                        //     {"date":"2023/05/31","count":"1"},
                        //     {"date":"2023/06/01","count":"1"}
                        // ]
                    // }
                    legendCellSize={0}
                    startDate={new Date('2023/01/01')}
                    panelColors={{
                        0: '#FFFFFF', // white for non-existent data
                        1: '#FFFFFF', // again white for count=0
                        2: "#33CC00", // green for count=1
                        3: '#d48462',
                    }}
                />
            </div>

        )
    }
    return(
        <>
        {listHeatMap}
        </>
    )

    // return(

    //         <HeatMap
    //             style={{ color: '#7d7d7d' }}
    //             width={800}
    //             value={responseData}
    //             // value={
    //                 // [
    //                 //     {"date":"2023/05/01","count":"1"},
    //                 //     {"date":"2023/05/02","count":"1"},
    //                 //     {"date":"2023/05/30","count":"0"},
    //                 //     {"date":"2023/05/31","count":"1"},
    //                 //     {"date":"2023/06/01","count":"1"}
    //                 // ]
    //             // }
    //             legendCellSize={0}
    //             startDate={new Date('2023/01/01')}
    //             panelColors={{
    //                 0: '#FFFFFF', // white for non-existent data
    //                 1: '#FFFFFF', // again white for count=0
    //                 2: "#33CC00", // green for count=1
    //                 4: '#d48462',
    //                 10: '#c2533a',
    //                 20: '#ad001d',
    //                 30: '#000',
    //               }}                
    //         />
    // )
}

// export async function fun(){
//     try{
//         const response = await axios.get("http://localhost:8000/api/")
//         console.log(response.data)        
//     }
//     catch{
//         console.log("error retrieving response.data")
//     }

// }

// export function GetRecords() {
//     const [responseData, setResponseData] = useState(null);
  
//     // cannot do `await sleep(1000)`
//     // because I get this error
//     // error: Invalid hook call. Hooks can only be called inside of the body of a function component...
//     // so  I had to comment it out
//     // await sleep(1000)
//     // Instead, I added `time.sleep(2)` in the backend/, in views.api()  ;)


//     useEffect(() => {
//         axios.get('http://localhost:8000/api/')
//         .then(response => {
//             // setResponseData(response.data)
            

//             const jsonData = JSON.stringify(response.data)
//             setResponseData(jsonData)
            
//         })
//         .catch(error => {
//             console.error(error);
//         });
//     }, []);
  
//     if (responseData === null) {
//       // Render a loading state or fallback component while waiting for the response
//       return <div>Loading...</div>;
//     }
  
//     // Render the actual data once the promise is resolved
//     return <div>{responseData}</div>;
// }


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}