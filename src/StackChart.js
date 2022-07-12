import { Chart, ChartAxis, ChartBar, ChartStack, ChartThemeColor, ChartVoronoiContainer } from "@patternfly/react-charts"

export const StackChart = () => {
    return <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", border: "solid 1px" }}>
        <h1>Stack-Chart</h1>
        <Chart
            domainPadding={{ x: [30, 25] }}
            height={250}
            width={600}
            //add tooltips
            containerComponent={
                <ChartVoronoiContainer
                  constrainToVisibleArea
                  labels={({ datum }) => `${datum.name}: ${datum.y}`}
                />
              }
              //add padding for label
              padding={{
                bottom: 75,
                left: 75,
                right: 200,
                top: 50
              }}
              //Legend setup
              legendOrientation="vertical"
              legendPosition="right"
              //Legend data
              legendData={[
                { name: 'Cats' }, 
                { name: 'Dogs' }, 
                { name: 'Birds' }, 
                { name: 'Mice' }
              ]}
            //give color to chart
            themeColor={ChartThemeColor.orange}
              

        >
            {/* Add Label x-y */}
            <ChartAxis label="Years"/>
            <ChartAxis dependentAxis showGrid label="Percentage"/>

            <ChartStack>
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
                <ChartBar
                    data={[
                        { name: 'Mice', x: '2015', y: 3 },
                        { name: 'Mice', x: '2016', y: 3 },
                        { name: 'Mice', x: '2017', y: 8 },
                        { name: 'Mice', x: '2018', y: 5 }
                    ]}
                />
            </ChartStack>
        </Chart>
    </div>
}