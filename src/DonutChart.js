import { ChartDonut, ChartThemeColor } from "@patternfly/react-charts"

export const DonutChart = () => {
  return <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", border: "solid 1px" }}>
    <h1>Donut Utilization-Chart</h1>
    <ChartDonut
      data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
      subTitle="Pets"
      title="100"
      height={230}
      width={350}
      //Add tooltips with this code
      constrainToVisibleArea
      labels={({ datum }) => `${datum.x}: ${datum.y}%`}
      //Add padding for legends
      padding={{
        bottom: 20,
        left: 20,
        right: 140,
        top: 20
      }}
      //Add oriantation 
      legendOrientation="vertical"
      //Add position
      legendPosition="right"
      //Add legend data
      legendData={[
        { name: 'Cats' },
        { name: 'Dogs' },
        { name: 'Birds' },
        { name: 'Mice' }
      ]}
      // Add theme to make customize chart color 
      themeColor={ChartThemeColor.green}
    />
  </div>
}