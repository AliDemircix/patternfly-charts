import { Chart, ChartAxis, ChartBar, ChartGroup, ChartThemeColor, ChartVoronoiContainer } from "@patternfly/react-charts"

export const BarChart= ()=> 
{
   return <div style={{display:"flex",justifyContent:"flex-start", alignItems:"center", flexDirection:"column",  border:"solid 1px"}}>
    <h1>Bar-Chart</h1>

      <Chart
        domainPadding={{ x: [30, 25] }}
        height={250}
        width={600}
        //Add Tooltips
        containerComponent={
            <ChartVoronoiContainer
              constrainToVisibleArea
              labels={({ datum }) => `${datum.name}: ${datum.y}`}
            />
          }
        //give padding for add x-y label
        padding={{
            bottom: 75,
            left: 75,
            right: 200,
            top: 50
          }} 
        // add legend orientation
        legendOrientation="vertical"
        // add legend position
        legendPosition="right"
        // add legend data
        legendData={[
            { name: 'Cats' },
            { name: 'Dogs' },
            { name: 'Birds' },
            { name: 'Mice' }
          ]}
        //change chart color gold,green,multi
        themeColor={ChartThemeColor.gold}
          
      >
       {/*  add x label */}
        <ChartAxis label="Years"/>
        {/* add y label */}
        <ChartAxis dependentAxis showGrid label="Percentage"/>
       <ChartGroup offset={11}>
  <ChartBar
    data={[
      { name: 'Cats', x: '2015', y: 1 },
      { name: 'Cats', x: '2016', y: 2 },
      { name: 'Cats', x: '2017', y: 5 },
      { name: 'Cats', x: '2018', y: 3 }
    ]}
  />
  <ChartBar
    data={[
      { name: 'Dogs', x: '2015', y: 2 },
      { name: 'Dogs', x: '2016', y: 1 },
      { name: 'Dogs', x: '2017', y: 7 },
      { name: 'Dogs', x: '2018', y: 4 }
    ]}
  />
  <ChartBar
    data={[
      { name: 'Birds', x: '2015', y: 4 },
      { name: 'Birds', x: '2016', y: 4 },
      { name: 'Birds', x: '2017', y: 9 },
      { name: 'Birds', x: '2018', y: 7 }
    ]}
  />

</ChartGroup>
      </Chart>
    </div>
}