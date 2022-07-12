import { Chart, ChartAxis, ChartBar, ChartLegend, ChartStack, ChartThemeColor, ChartTooltip } from "@patternfly/react-charts"
import chart_color_blue_300 from '@patternfly/react-tokens/dist/esm/chart_color_blue_300';
import chart_color_green_300 from '@patternfly/react-tokens/dist/esm/chart_color_green_300';
import chart_color_gold_300 from '@patternfly/react-tokens/dist/esm/chart_color_gold_300';
import chart_color_purple_300 from '@patternfly/react-tokens/dist/esm/chart_color_purple_300';

export const StackChartHorizontal =()=>
{
    return  <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", border: "solid 1px" }}>
    <h1>Stack-Chart-Horizontal</h1>
    <Chart
      ariaDesc="Average number of pets"
      ariaTitle="Stack chart example"
      domainPadding={{ x: [30, 25] }}
      legendComponent={
        <ChartLegend
          data={[
            {
              name: 'Cats',
              symbol: { fill: chart_color_blue_300.var }
            },
            {
              name: 'Dogs',
              symbol: { fill: chart_color_gold_300.var }
            },
            {
              name: 'Birds',
              symbol: { fill: chart_color_green_300.var }
            },
            {
              name: 'Mice',
              symbol: { fill: chart_color_purple_300.var }
            }
          ]}
        />
      }
      legendPosition="bottom-left"
      height={275}
      padding={{
        bottom: 75, // Adjusted to accommodate legend
        left: 50,
        right: 50,
        top: 50
      }}
      themeColor={ChartThemeColor.multiOrdered}
      width={450}
    >
      <ChartAxis />
      <ChartAxis dependentAxis showGrid />
      <ChartStack
        horizontal
        colorScale={[
          chart_color_blue_300.var,
          chart_color_gold_300.var,
          chart_color_green_300.var,
          chart_color_purple_300.var
        ]}
      >
        <ChartBar
          data={[
            { name: 'Cats', x: '2015', y: 1, label: 'Cats: 1' },
            { name: 'Cats', x: '2016', y: 2, label: 'Cats: 2' },
            { name: 'Cats', x: '2017', y: 5, label: 'Cats: 5' },
            { name: 'Cats', x: '2018', y: 3, label: 'Cats: 3' }
          ]}
          labelComponent={<ChartTooltip constrainToVisibleArea />}
        />
        <ChartBar
          data={[
            { name: 'Dogs', x: '2015', y: 2, label: 'Dogs: 2' },
            { name: 'Dogs', x: '2016', y: 1, label: 'Dogs: 1' },
            { name: 'Dogs', x: '2017', y: 7, label: 'Dogs: 7' },
            { name: 'Dogs', x: '2018', y: 4, label: 'Dogs: 4' }
          ]}
          labelComponent={<ChartTooltip constrainToVisibleArea />}
        />
        <ChartBar
          data={[
            { name: 'Birds', x: '2015', y: 4, label: 'Birds: 4' },
            { name: 'Birds', x: '2016', y: 4, label: 'Birds: 4' },
            { name: 'Birds', x: '2017', y: 9, label: 'Birds: 9' },
            { name: 'Birds', x: '2018', y: 7, label: 'Birds: 7' }
          ]}
          labelComponent={<ChartTooltip constrainToVisibleArea />}
        />
        <ChartBar
          data={[
            { name: 'Mice', x: '2015', y: 3, label: 'Mice: 3' },
            { name: 'Mice', x: '2016', y: 3, label: 'Mice: 3' },
            { name: 'Mice', x: '2017', y: 8, label: 'Mice: 8' },
            { name: 'Mice', x: '2018', y: 5, label: 'Mice: 5' }
          ]}
          labelComponent={<ChartTooltip constrainToVisibleArea />}
        />
      </ChartStack>
    </Chart>
  </div>
}