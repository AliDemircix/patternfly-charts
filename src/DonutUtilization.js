import { ChartDonutUtilization, ChartThemeColor } from "@patternfly/react-charts"

export const DonutUtilization = () => {
    return <div style={{display:"flex",justifyContent:"flex-start", alignItems:"center", flexDirection:"column",  border:"solid 1px"}}>
          <h1>Donut Utilization-Chart</h1>
    <ChartDonutUtilization
        data={{ x: 'Storage capacity', y: 50 }}
        // add thresholds to define limit colors
        thresholds={[{ value: 60 }, { value: 90 }]}
        title="50%"
        subTitle="of 100 GBps"
        height={230}
        width={500}
        //add tooltips
        constrainToVisibleArea
        labels={({ datum }) => datum.x ? `${datum.x}: ${datum.y}%` : null}
        //add padding for legend
        padding={{
            bottom: 20,
            left: 20,
            right: 290,
            top: 20
        }}
        // legend setups
        legendOrientation="vertical"
        legendPosition="right"
        //legend data
        legendData={[
            { name: 'Storage capacity:50% ' },
            { name: 'Warning thresold at :60%' },
            { name: 'Danger tnresold at: 90%' },
        ]}
        //make custom color
        themeColor={ChartThemeColor.gold}
    />
</div> 
}