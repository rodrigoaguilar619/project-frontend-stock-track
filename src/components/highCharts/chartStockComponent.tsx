
import React, { useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { buildTrackBuySellPrice, createChart } from '@app/utils/componentUtils/highChartsUtil';

const ChartStockComponent: React.FC<ChartStockComponentPropsI> = (props) => {

  let chartDataOptions = createChart(props.chartTitle, props.chartData, props.chartFlags, props.rangeSelector, props.extraOptions);
  const chartData = {...chartDataOptions, ...buildTrackBuySellPrice(props.trackBuyPrice, props.trackSellPrice, props.trackFairValue)};
  const refChart = useRef(null);

  if (chartData == null)
    return <div>Loading ...</div>;

  return (<div>
    <HighchartsReact ref={refChart}
      constructorType={"stockChart"} highcharts={Highcharts} options={chartData} />
  </div>)
}

export default React.memo(ChartStockComponent)