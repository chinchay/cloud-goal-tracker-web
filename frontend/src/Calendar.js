// https://reactjsexample.com/a-customizable-calendar-heatmap-react-component-built-on-svg/
import HeatMap from '@uiw/react-heat-map';

import { useState, useEffect } from 'react';
import { GetRecords } from './Interface2Backend';

export function ShowCalendar(){

    const [data, setData] = useState(null);

    // GetRecords(setData)

    // var dict = JSON.parse(data)
    // console.log(dict)
    // console.log(dict.listHabit)

    // const a = {"hi":1, "hello":2}
    // console.log(a.hi)
    

    // const listHabit = data["listHabit"]

    // console.log(listHabit)

    // useEffect(() => {
    //     GetRecords(setData)
    //     .then(response => {
    //         // setResponseData(response.data)
            

    //         // const jsonData = JSON.stringify(response.data)
    //         // setData(jsonData)
            
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });
    // }, []);

    // const listHabit = data.listHabit
    // const listRecord = data.listRecord

    // for (let r in listRecord){
    //     // console.log(r)
    //     console.log("--")
    // }

    return (
            // <HeatMap
            //     style={{ color: '#7d7d7d' }}
            //     width={800}
            //     value={records}
            //     legendCellSize={0}
            //     startDate={new Date('2016/01/10')}
            // />
            <></>
        )
}