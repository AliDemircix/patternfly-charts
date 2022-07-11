import { Chart, ChartArea, ChartAxis, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from "@patternfly/react-charts"

export const AreaChart= ()=> 
{
   return <div style={{display:"flex",justifyContent:"flex-start", alignItems:"center", flexDirection:"column",  border:"solid 1px"}}>
    <h1>Area-Chart</h1>
    <Chart
      height={250}
      width={600}
      //use padding if labels used <ChartAxis></ChartAxis>
      padding={{
        bottom: 75,
        left: 75,
        right: 200,
        top: 50
      }}
      // to add legends use this dont forget to update right padding 
      legendOrientation="vertical"
      legendPosition="right"
      legendData={[
        { name: 'Cats' },
        { name: 'Dogs' },
        { name: 'Birds' },
      ]}
      //to get tooltip data on the chart use this
      containerComponent={
        <ChartVoronoiContainer
          constrainToVisibleArea
          labels={({ datum }) => `${datum.name}: ${datum.y}`}
        />
      }
      // use this code to change chart color green,multi,blue
      themeColor={ChartThemeColor.multi}
    >
      {/* Add here to labels x-y for chart */}
      <ChartAxis label="Years" />
      <ChartAxis dependentAxis showGrid label="Percentage" />
      <ChartGroup>
        <ChartArea
          data={[
            { name: 'Cats', x: '2015', y: 3 },
            { name: 'Cats', x: '2016', y: 4 },
            { name: 'Cats', x: '2017', y: 8 },
            { name: 'Cats', x: '2018', y: 6 }
          ]}
          interpolation="monotoneX"
        />
        <ChartArea
          data={[
            { name: 'Dogs', x: '2015', y: 2 },
            { name: 'Dogs', x: '2016', y: 3 },
            { name: 'Dogs', x: '2017', y: 4 },
            { name: 'Dogs', x: '2018', y: 5 },
            { name: 'Dogs', x: '2019', y: 6 }
          ]}
          interpolation="monotoneX"
        />
        <ChartArea
          data={[
            { name: 'Birds', x: '2015', y: 1 },
            { name: 'Birds', x: '2016', y: 2 },
            { name: 'Birds', x: '2017', y: 3 },
            { name: 'Birds', x: '2018', y: 2 },
            { name: 'Birds', x: '2019', y: 4 }
          ]}
          interpolation="monotoneX"
        />
      </ChartGroup>

    </Chart>
   </div>
}