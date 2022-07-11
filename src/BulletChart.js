import { ChartBullet, ChartThemeColor,  } from "@patternfly/react-charts"

export const BulletChart = () => {
    return <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", border: "solid 1px" }}>
        <h1>Bullet-Chart</h1>

        <ChartBullet
            height={150}
            width={600}
            //Add tooltip
            constrainToVisibleArea
            labels={({ datum }) => `${datum.name}: ${datum.y}`}
            //Add padding for label
            padding={{
                bottom: 60,
                left: 150,
                right: 200,
                top: 50
            }}
            // Add legend orientation
            legendOrientation="horizontal"
            //Add legend position
            legendPosition="bottom"

            //Add legend data label
            primarySegmentedMeasureLegendData={[{ name: 'Measure 1' }, { name: 'Measure 2' }]}
             //Add legend data label
            qualitativeRangeLegendData={[{ name: 'Range 1' }, { name: 'Range 2' }]}
            //Add legend data label
            comparativeWarningMeasureLegendData={[{ name: 'Warning' }]}

            //Add title to bullet chart
            title="Text label"
            //Add sub title 
            subTitle="Measure details"
            //Add color to chart
            themeColor={ChartThemeColor.multi}
            //The maxDomain property defines the the maximum value that can be expressed on each axis
            maxDomain={{ y: 100 }}
            qualitativeRangeData={
                [
                    { name: 'Range', y: 50 },
                    { name: 'Range', y: 75 },
                ]
            }
            primarySegmentedMeasureData={
                [
                    { name: 'Measure', y: 25 },
                    { name: 'Measure', y: 60 },
                ]
            }
            // Define warning limit 
            comparativeWarningMeasureData={
                [
                    { name: 'Warning', y: 88 },
                ]
            }
        />

    </div>
}