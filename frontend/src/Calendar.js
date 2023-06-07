// https://reactjsexample.com/a-customizable-calendar-heatmap-react-component-built-on-svg/
import HeatMap from '@uiw/react-heat-map';

export function BuildCalendar(props){
    // console.log(props.response)

    if (props.response === null) {
        return(
            <div className='smallStats'>
                <div className='habitName'>Loading...</div>
            </div>
            
        )
    } else {
        const listHeatMap = []

        let listHabit  = props.response.listHabit
        let listRecord = props.response.listRecord

        const month = new Date().getMonth()
        // console.log(month)
        const startDate = new Date()
        startDate.setMonth( month - props.months)
        // console.log(startDate)

        for(let i in listRecord){
            // console.log(responseData[i])

            listHeatMap.push(
                <div key={i} className='aHeatMap'>

                    <div className='habitName'>{listHabit[i].replace("_", " ")}</div>

                    <HeatMap
                        style={{ color: '#7d7d7d' }}
                        // width={300}
                        width={props.width}
                        // rectSize={14}
                        rectSize={12}
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
                        startDate={ startDate }
                        endDate={new Date()}
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
            <div className='smallStats'>
            {/* <div>Loaded!</div> */}
            {listHeatMap}
            </div>
        )

    }


}

// export function GetRecords() {
//     const [responseData, setResponseData] = useState(null);
  
//     // cannot do `await sleep(1000)`
//     // because I get this error
//     // error: Invalid hook call. Hooks can only be called inside of the body of a function component...
//     // so  I had to comment it out
//     // await sleep(1000)
//     // Instead, I added `time.sleep(2)` in the backend/, in views.api()  ;)

//     let listHabit = null
//     let listRecord = null

//     const url = 'http://localhost:8000/api/'

//     useEffect(() => {
//         axios
//             .get(url)
//             .then(
//                 response => {
//                 setResponseData(response.data)            
//                 }
//             )
//             .catch(
//                 error => {console.error(error);}
//             )
//     }, []);
  

//     if (responseData === null) {
//       return <div>Loading...</div>;
//     }

//     const listHeatMap = []

//     listHabit  = responseData.listHabit
//     listRecord = responseData.listRecord

//     for(let i in listRecord){
//         // console.log(responseData[i])

//         listHeatMap.push(
//             <div key={i}>
//                 <h1>{listHabit[i].replace("_", " ")}</h1>
//                 <HeatMap
                    
//                     style={{ color: '#7d7d7d' }}
//                     width={900}
//                     rectSize={14}
//                     value={listRecord[i]}
//                     // value={
//                         // [
//                         //     {"date":"2023/05/01","count":"1"},
//                         //     {"date":"2023/05/02","count":"1"},
//                         //     {"date":"2023/05/30","count":"0"},
//                         //     {"date":"2023/05/31","count":"1"},
//                         //     {"date":"2023/06/01","count":"1"}
//                         // ]
//                     // }
//                     legendCellSize={0}
//                     startDate={new Date('2023/01/01')}
//                     panelColors={{
//                         0: '#FFFFFF', // white for non-existent data
//                         1: '#FFFFFF', // again white for count=0
//                         2: "#33CC00", // green for count=1
//                         3: '#d48462',
//                     }}

//                 />
//             </div>

//         )
//     }
//     return(
//         <>
//         {listHeatMap}
//         </>
//     )
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }