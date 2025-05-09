
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { IssuesHistoricalListModulePropsI } from '@app/_types/modules/issuesHistorical/issuesHistoricalList';
import { CatalogModuleEnum } from '@app/catalogs/enumCatalog';
import { URL_EXTERNAL_YAHOO } from '@app/catalogs/uriCatalog';
import ChartStockResumeComponent from '@app/components/highCharts/chartStockResumeComponent';
import LoadingInfiniteScrollComponent from '@app/components/infiniteScroll/loadingInfiniteScrollComponent';
import { getCatalogDataService } from '@app/controller/services/catalogService';
import { getIssuesHistoricalListService } from '@app/controller/services/issuesHistoricalService';
import { buildChartSeriesDailyValue, buildChartSeriesFairValue } from '@app/utils/componentUtils/highChartsUtil';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { ComponentTypeEnum } from 'lib-components-react/lib/catalogs/enumCatalog';
import { ButtonDataTableOptionComponent } from 'lib-components-react/lib/components/elements/buttonComponents';
import FilterAccoridionComponent from 'lib-components-react/lib/components/filterAccordion/filterAccordionComponent';
import ModalComponent from 'lib-components-react/lib/components/modals/modalComponent';
import { TooltipConfigButtonNestedOptions, TooltipConfigCustom, TooltipConfigInputHelp } from 'lib-components-react/lib/components/tooltip/tooltipConfigComponents';
import { setTemplateHeaderSubTitleAction } from 'lib-components-react/lib/controller/actions/templateHeaderAction';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from 'lib-components-react/lib/controller/actions/templateLoadingAction';
import useHookModal from 'lib-components-react/lib/hookStates/modalHookState';
import { buildFormDataContainers, setOptionsToColumnsDefList } from 'lib-components-react/lib/utils/componentUtils/formUtil';
import { debug, generateDebugClassModule } from 'lib-components-react/lib/utils/webUtils/debugUtil';
import { manageAlertModuleError } from 'lib-components-react/lib/utils/webUtils/httpManagerUtil';
import { columnsFilterIssuesHistoricalList, inputFilterIssuesHistoricalIds } from './issuesHistoricalListModuleConfig';
import LoadingModuleComponent from 'lib-components-react/lib/components/loadings/loadingModuleComponent';
import useHookLoading from 'lib-components-react/lib/hookStates/loadingHookState';

const IssuesHistoricalListModuleComponent: React.FC<IssuesHistoricalListModulePropsI> = (props) => {

  const rowsPerPage = 8;
  const dispatch = useDispatch();
  const [modalState, setOpenModal, setCloseModal, setBodyModal, setTitleModal] = useHookModal();
  const [loadingState, setLoading] = useHookLoading();
  const [issuesHistoricalList, setIssuesHistoricalList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalGlobalIssuesRows, setTotalGlobalIssuesRows] = useState(0);
  const [loadingInfiniteScroll, setLoadingInfiniteScroll] = useState(false);
  const [formFilterData, setFormFilterData] = useState<Record<string, any>>(buildFormDataContainers([columnsFilterIssuesHistoricalList]));

  const IssuesHistoricalDataModuleComponent = React.lazy(() => import('@app/modules/issuesHistorical/issueHistoricalData/issueHistoricalDataModuleComponent'))

  useEffect(() => {

    dispatch(setTemplateHeaderSubTitleAction("Issues Historical"));
    initModule();
    return () => {
    };
  }, []);

  const initModule = () => {

    let debugClass = generateDebugClassModule("init issues historical list module");
    debug(debugClass, "start");

    dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues historical list module"));
    axios.all([getIssuesHistoricalListService(formFilterData, currentPage, rowsPerPage), getCatalogDataService(CatalogModuleEnum.SECTOR),
    getCatalogDataService(CatalogModuleEnum.TYPE_STOCK), getCatalogDataService(CatalogModuleEnum.STATUS_ISSUE), getCatalogDataService(CatalogModuleEnum.INDEX)])
      .then(axios.spread((issuesHistoricalListData, sectorCatalogData, typeStockCatalogData, statusIssueCatalogData, indexCatalogData) => {

        debug(debugClass, "result", issuesHistoricalListData, sectorCatalogData, typeStockCatalogData, statusIssueCatalogData, indexCatalogData);
        setIssuesHistoricalList(issuesHistoricalListData.data.issuesHistorical);
        setCurrentPage(currentPage + 1);
        setTotalGlobalIssuesRows(issuesHistoricalListData.data.totalIssues);
        setOptionsToColumnsDefList(columnsFilterIssuesHistoricalList.inputColumns, sectorCatalogData.data.catalogs, inputFilterIssuesHistoricalIds.sector);
        setOptionsToColumnsDefList(columnsFilterIssuesHistoricalList.inputColumns, typeStockCatalogData.data.catalogs, inputFilterIssuesHistoricalIds.typeStock);
        setOptionsToColumnsDefList(columnsFilterIssuesHistoricalList.inputColumns, statusIssueCatalogData.data.catalogs, inputFilterIssuesHistoricalIds.statusIssueQuick);
        setOptionsToColumnsDefList(columnsFilterIssuesHistoricalList.inputColumns, statusIssueCatalogData.data.catalogs, inputFilterIssuesHistoricalIds.statusIssueTrading);
        setOptionsToColumnsDefList(columnsFilterIssuesHistoricalList.inputColumns, indexCatalogData.data.catalogs, inputFilterIssuesHistoricalIds.index);
        dispatch(setTemplateLoadingIsActiveAction(false));

      }))
      .catch((error) => {
        manageAlertModuleError(dispatch, props.componentType, debugClass, error);
        dispatch(setTemplateLoadingIsActiveAction(false));
      })
      .finally(() => {
        setLoading(false);
    });
  }

  const executeGetissuesHistoricalList = (issuesHistoricalList: any[], formFilterData: any, currentPage: number, rowsPerPage: number, isManageLoading: boolean) => {

    let debugClass = generateDebugClassModule("init get issues historical list");
    debug(debugClass, "start");

    if (isManageLoading)
      dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues historical list"));

    setLoadingInfiniteScroll(true);

    axios.all([getIssuesHistoricalListService(formFilterData, currentPage, rowsPerPage)])
      .then(axios.spread((issuesHistoricalListData) => {

        debug(debugClass, "result", issuesHistoricalListData);
        setIssuesHistoricalList([...issuesHistoricalList, ...issuesHistoricalListData.data.issuesHistorical]);
        setCurrentPage(currentPage + 1);
        setTotalGlobalIssuesRows(issuesHistoricalListData.data.totalIssues);

        if (isManageLoading)
          dispatch(setTemplateLoadingIsActiveAction(false));

      }))
      .catch((error) => {
        manageAlertModuleError(dispatch, props.componentType, debugClass, error);

        if (isManageLoading)
          dispatch(setTemplateLoadingIsActiveAction(false));
      })
      .finally(() => {
        setLoadingInfiniteScroll(false);
        if (isManageLoading)
          setLoading(false);
      });
  }

  const executeResetIssuesHistoricalList = () => {

    executeGetissuesHistoricalList([], formFilterData, 1, rowsPerPage, true);
  }

  const renderInfiniteScroll = () => {
    return <div style={{ position: loadingInfiniteScroll ? "fixed" : "unset", bottom: '0', width: '-webkit-fill-available', display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
        <div style={{ width: '125px' }}>
          <LoadingInfiniteScrollComponent itemsLength={issuesHistoricalList.length}
          executeFunction={totalGlobalIssuesRows !== null ? (() => { executeGetissuesHistoricalList(issuesHistoricalList, formFilterData, currentPage, rowsPerPage, false) }) : null} totalItems={totalGlobalIssuesRows} />
        </div>
    </div>
  }

  const handleYahooClick = (issueData: any) => {
    window.open(URL_EXTERNAL_YAHOO.replace(/#ISSUE#/g, issueData.issueData.initials));
  };

  const handleButtonHistoricalDetailClick = (issueData: any) => {
      setTitleModal("ISSUE HISTORICAL DETAIL: " + issueData.issueData.initials);
      setBodyModal((<IssuesHistoricalDataModuleComponent idIssue={issueData.issueData.idIssue} initialsIssue={issueData.issueData.initials} componentType={ComponentTypeEnum.POPUP} executeParentFunction={() => { setCloseModal(); }} />));
      setOpenModal()
  };

  const renderChartList = () => {

    let chartList: any = [];

    if (issuesHistoricalList === null) {
      return chartList;
    }

    issuesHistoricalList.forEach((issueData) => {

      chartList.push(<div key={issueData.issueData.idIssue} style={{ width: "49%", margin: "1px", marginBottom: "4px" }}>
        <div style={{ float: "left" }}>
          <ButtonDataTableOptionComponent
            icon={faAddressBook}
            onClick={() => handleButtonHistoricalDetailClick(issueData)}
            tooltip={"Issue historical detail: " + issueData.issueData.initials}
          />
          <br></br>
          <button title="Yahoo chart" className="btn btn-sm btn-primary"
            style={{ width: "23px", paddingLeft: "4px", height: "19px", marginTop: "1px" }}
            onClick={() => handleYahooClick(issueData)}
          >
            <div className="iconYahoo"></div>
          </button>
        </div>
        <ChartStockResumeComponent
          stockChartData={buildChartSeriesDailyValue(issueData.issueHistorical)}
          stockChartFairValueData={buildChartSeriesFairValue(issueData.issueHistoricalFairValues)}
          stockTransactionBuys={issueData.issueTransactionBuys}
          stockData={{
            issueName: issueData.issueData.initials,
            currentPriceDate: issueData.issueTrackProperties.currentPriceDate,
            currentPrice: issueData.issueTrackProperties.currentPrice,
            previousCloseDate: issueData.issueTrackProperties.previousClosePriceDate,
            previousClosePrice: issueData.issueTrackProperties.previousClosePrice,
            fairValue: issueData.issueTrackProperties.fairValue,
            trackBuyPrice: issueData.issueTrackProperties.buyPrice,
            trackSellPrice: issueData.issueTrackProperties.sellPrice
          }} />
      </div>)
    });

    return chartList;
  }

  if(loadingState.isLoading)
    return <LoadingModuleComponent />

  return (<div style={{ height: "fit-content" }}>
    <ModalComponent title={modalState.titleModal} visible={modalState.showModal} selectorCloseModal={setCloseModal}
      body={modalState.bodyModal} size='lg' />
    <br></br>
    <FilterAccoridionComponent
      formContainer={columnsFilterIssuesHistoricalList}
      title="Issues Historical Filter"
      formData={formFilterData}
      executeFilterSearch={executeResetIssuesHistoricalList}
      selectorUpdateFormData={setFormFilterData}
    />
    <div style={{ width: "100%", display: "inline-flex", flexWrap: "wrap" }}>{renderChartList()}</div>
    <br></br>
    {renderInfiniteScroll()}
    <br></br>
    <TooltipConfigInputHelp />
    <TooltipConfigCustom />
    <TooltipConfigButtonNestedOptions />
  </div>)
}

export default IssuesHistoricalListModuleComponent