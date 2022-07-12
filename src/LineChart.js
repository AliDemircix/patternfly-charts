import { Chart, ChartAxis, ChartGroup, ChartLine, ChartThemeColor, ChartVoronoiContainer } from "@patternfly/react-charts"

export const LineChart = () => {
    return <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", border: "solid 1px" }}>
        <h1>Line-Chart</h1>
        <Chart
            maxDomain={{ y: 10 }}
            minDomain={{ y: 0 }}
            height={250}
            width={600}

            // add tooltips
            containerComponent={
                <ChartVoronoiContainer
                    constrainToVisibleArea
                    labels={({ datum }) => `${datum.name}: ${datum.y}`}
                />
            }

            // add padding for legend
            padding={{
                bottom: 75,
                left: 75,
                right: 200,
                top: 50
            }}

            //Legend setup
            legendOrientation="vertical"
            legendPosition="right"

            //legend data
            legendData={[
                { name: 'Cats' },
                { name: 'Dogs' },
                { name: 'Birds' },
                { name: 'Mice' }
            ]}
            //add color for chart
            themeColor={ChartThemeColor.cyan}


        >
            {/* Add Label x -y  */}
            <ChartAxis label="Years" />
            <ChartAxis dependentAxis showGrid label="Percentage" />


            <ChartGroup>
                <ChartLine
                    data={[
                        { name: 'Cats', x: '2015', y: 1 },
                        { name: 'Cats', x: '2016', y: 2 },
                        { name: 'Cats', x: '2017', y: 5 },
                        { name: 'Cats', x: '2018', y: 3 }
                    ]}
                />
                <ChartLine
                    data={[
                        { name: 'Dogs', x: '2015', y: 2 },
                        { name: 'Dogs', x: '2016', y: 1 },
                        { name: 'Dogs', x: '2017', y: 7 },
                        { name: 'Dogs', x: '2018', y: 4 }
                    ]}
                    // to make line dashed use it 
                    style={{
                        data: {
                            strokeDasharray: '3,3'
                        }
                    }}
                />
                <ChartLine
                    data={[
                        { name: 'Birds', x: '2015', y: 4 },
                        { name: 'Birds', x: '2016', y: 4 },
                        { name: 'Birds', x: '2017', y: 9 },
                        { name: 'Birds', x: '2018', y: 7 }
                    ]}
                />
                <ChartLine
                    data={[
                        { name: 'Mice', x: '2015', y: 3 },
                        { name: 'Mice', x: '2016', y: 3 },
                        { name: 'Mice', x: '2017', y: 8 },
                        { name: 'Mice', x: '2018', y: 5 }
                    ]}
                />
            </ChartGroup>
        </Chart>
    </div>
}