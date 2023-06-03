// https://reactjsexample.com/a-customizable-calendar-heatmap-react-component-built-on-svg/
import HeatMap from '@uiw/react-heat-map';

export function ShowCalendar(){

    const value = [
        { date: '2016/01/11', count: 2 },
        { date: '2016/01/12', count: 20 },
        { date: '2016/01/13', count: 10 },
        ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx, content: '' })),
        { date: '2016/04/11', count: 2 },
        { date: '2016/05/01', count: 5 },
        { date: '2016/05/02', count: 5 },
        { date: '2016/05/04', count: 11 },
      ];

    return (
            <HeatMap value={value} startDate={new Date('2016/01/01')} />
        )
}