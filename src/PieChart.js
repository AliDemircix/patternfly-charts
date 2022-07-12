import { ChartPie, ChartThemeColor } from "@patternfly/react-charts"

export const PieChart = () => {
    return <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", border: "solid 1px" }}>
        <h1>Pie-Chart</h1>
        <ChartPie
            data={[{ x: 'Cats', y: 35 }, { x: 'Dogs', y: 55 }, { x: 'Birds', y: 10 }]}
            height={230}
            width={350}
            constrainToVisibleArea
            labels={({ datum }) => `${datum.x}: ${datum.y}%`}
            padding={{
                bottom: 20,
                left: 20,
                right: 140,
                top: 20
            }}
            //Setup legend
            legendOrientation="vertical"
            legendPosition="right"
            //legend data
            legendData={[
                { name: 'Cats' },
                { name: 'Dogs' },
                { name: 'Birds' },
            ]}
            //customize color
            themeColor={ChartThemeColor.green}
        />
    </div>
}