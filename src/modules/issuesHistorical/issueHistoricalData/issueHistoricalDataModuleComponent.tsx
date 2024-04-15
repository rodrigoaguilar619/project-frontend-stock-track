
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { IssueHistoricalDataModulePropsI } from '@app/_types/modules/issuesHistorical/issueHistoricalData';
import ChartStockResumeComponent from '@app/components/highCharts/chartStockResumeComponent';
import { getIssueHistoricalDataService } from '@app/controller/services/issuesHistoricalService';
import { buildChartSeries } from '@app/utils/componentUtils/highChartsUtil';
import { maskDataCustom } from '@app/utils/maskDataCustomUtil';
import DataTableComponent from 'lib-components-frontend-ts/lib/components/dataTable/dataTableComponent';
import { setTemplateHeaderSubTitleAction } from 'lib-components-frontend-ts/lib/controller/actions/templateHeaderAction';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from 'lib-components-frontend-ts/lib/controller/actions/templateLoadingAction';
import { getParameterCall } from 'lib-components-frontend-ts/lib/utils/componentUtils/formUtil';
import { debug, generateDebugClassModule } from 'lib-components-frontend-ts/lib/utils/webUtils/debugUtil';
import { manageAlertModuleError } from 'lib-components-frontend-ts/lib/utils/webUtils/httpManagerUtil';
import { columnsIssueTransactionList, columnsIssueTransactionResumenList } from './issueHistoricalDataModuleConfig';

const IssuesHistoricalDataModuleComponent: React.FC<IssueHistoricalDataModulePropsI> = (props) => {

  const dispatch = useDispatch();
  const idIssue = getParameterCall(location, props, "idIssue");
  const initialsIssue = getParameterCall(location, props, "initialsIssue");
  const [issueHistoricalData, setIssueHistoricalData] = useState<Record<string, any> | null>(null);

  useEffect(() => {

    dispatch(setTemplateHeaderSubTitleAction("Issue Historical Data: " + initialsIssue));
    initModule();
    return () => {
    };
  }, []);

  const initModule = () => {

    let debugClass = generateDebugClassModule("init issue historical data module");
    debug(debugClass, "start");

    dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issue historical data module"));
    axios.all([getIssueHistoricalDataService(idIssue)])
      .then(axios.spread((issuesHistoricalData) => {

        debug(debugClass, "result", issuesHistoricalData);
        setIssueHistoricalData(issuesHistoricalData.data);
        dispatch(setTemplateLoadingIsActiveAction(false));

      }))
      .catch((error) => {
        manageAlertModuleError(dispatch, props.componentType, debugClass, error);
        dispatch(setTemplateLoadingIsActiveAction(false));
      });
  }

  const renderChartList = () => {

    if (issueHistoricalData === null) {
      return null;
    }

    let chartIssueHistoricalData = issueHistoricalData.issueHistoricalData;

    return <ChartStockResumeComponent
      stockChartData={buildChartSeries(chartIssueHistoricalData.issueHistorical)}
      stockTransactionBuys={chartIssueHistoricalData.issueTransactionBuys}
      stockData={{
        issueName: chartIssueHistoricalData.issueData.initials,
        currentPriceDate: chartIssueHistoricalData.issueTrackProperties.currentPriceDate,
        currentPrice: chartIssueHistoricalData.issueTrackProperties.currentPrice,
        previousCloseDate: chartIssueHistoricalData.issueTrackProperties.previousClosePriceDate,
        previousClosePrice: chartIssueHistoricalData.issueTrackProperties.previousClosePrice,
        fairValue: chartIssueHistoricalData.issueTrackProperties.fairValue,
        trackBuyPrice: chartIssueHistoricalData.issueTrackProperties.buyPrice,
        trackSellPrice: chartIssueHistoricalData.issueTrackProperties.sellPrice
      }} />
  }

  let issueCalculateResume = issueHistoricalData?.issueCalculateResume !== undefined ? [issueHistoricalData?.issueCalculateResume] : [];
  
  return (<div>
    {renderChartList()}
    <br></br>
    <DataTableComponent
      title='Issue Transaction Resume'
      isShowFooter={false}
      isShowHeader={false}
      columnDefList={columnsIssueTransactionResumenList}
      columnDataList={issueCalculateResume}
      totalRows={issueCalculateResume.length}
      customMaskData={maskDataCustom}
    />
    <br></br>
    <DataTableComponent
      title='Issue Transactions'
      isShowRowsPage={false}
      columnDefList={columnsIssueTransactionList}
      columnDataList={issueHistoricalData?.issueTransactions}
      totalRows={issueHistoricalData?.issueTransactions.length}
      customMaskData={maskDataCustom}
    />
    <br></br>
  </div>)
}

export default IssuesHistoricalDataModuleComponent