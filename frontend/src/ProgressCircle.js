import React from 'react'
import ReactApexChart from "react-apexcharts"

// inspired from
// https://apexcharts.com/react-chart-demos/radialbar-charts/gradient/
// and
// apple Books Reading Goal interface
export function ProgressCircle(props){
    if (props.response === null) {        
        return(
            <div className='smallStats'>
                <div className='habitName'>Loading...</div>
            </div>
            
        )
    }else {
        let state = {
            series: [props.response.percentage],
            options: {
              chart: {
                // height: 350,
                type: 'radialBar',
                toolbar: {
                  show: false // to show the options to download svg
                }
              },
              plotOptions: {
                radialBar: {
                  startAngle: -90,
                  endAngle: 90,
                   hollow: {
                    margin: 0,
                    size: '92%',
                    // background: '#fff',
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    // position: 'front',
                    dropShadow: {
                    //   enabled: true,
                    //   top: 3,
                    //   left: 0,
                    //   blur: 4,
                    //   opacity: 0.24
                    }
                  },
                  track: {
                    background: "#515f6e", //#303841
                    // strokeWidth: '167%',
                    strokeWidth: "105%",
                    margin: 0, // margin is in pixels
                    // dropShadow: {
                    //   enabled: true,
                    //   top: -3,
                    //   left: 0,
                    //   blur: 4,
                    //   opacity: 0.35
                    // }
                  },
              
                  dataLabels: {
                    show: true,
                    name: {
                      offsetY: -70,
                      show: true,
                      color: '#fff',
                      fontFamily: "Helvetica",
                      fontSize: '23px'
                    },
                    value: {
                      formatter: function(val) {
                        return parseInt(val) + "%"; // parseInt(val)
                      },
                      color: '#fff',
                      fontSize: '60px',
                      show: true,
                      offsetY: -22,
                      fontFamily: "Helvetica",
                    }
                  }
                }
              },
              fill: {
                // type: 'gradient',
                gradient: {
                  shade: 'dark',
                  type: 'horizontal',
                  shadeIntensity: 0.5,
                  gradientToColors: ['#ABE5A1'],
                  inverseColors: true,
                  opacityFrom: 1,
                  opacityTo: 1,
                  stops: [0, 100]
                }
              },
              stroke: {
                lineCap: 'round'
              },
              labels: ["Today's Goals"],
            },
    
        }        
        return(
            <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
        )
    
    } 
}

export default ProgressCircle