
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
import { buildChartSeries } from '@app/utils/componentUtils/highChartsUtil';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { ComponentTypeEnum } from 'lib-components-frontend-ts/lib/catalogs/enumCatalog';
import { ButtonDataTableOptionComponent } from 'lib-components-frontend-ts/lib/components/elements/buttonComponents';
import FilterAccoridionComponent from 'lib-components-frontend-ts/lib/components/filterAccordion/filterAccordionComponent';
import ModalComponent from 'lib-components-frontend-ts/lib/components/modals/modalComponent';
import { TooltipConfigButtonNestedOptions, TooltipConfigCustom, TooltipConfigInputHelp } from 'lib-components-frontend-ts/lib/components/tooltip/tooltipConfigComponents';
import { setTemplateHeaderSubTitleAction } from 'lib-components-frontend-ts/lib/controller/actions/templateHeaderAction';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from 'lib-components-frontend-ts/lib/controller/actions/templateLoadingAction';
import useHookModal from 'lib-components-frontend-ts/lib/hookStates/modalHookState';
import { buildFormDataContainers, setOptionsToColumnsDefList } from 'lib-components-frontend-ts/lib/utils/componentUtils/formUtil';
import { debug, generateDebugClassModule } from 'lib-components-frontend-ts/lib/utils/webUtils/debugUtil';
import { manageAlertModuleError } from 'lib-components-frontend-ts/lib/utils/webUtils/httpManagerUtil';
import { columnsFilterIssuesHistoricalList, inputFilterIssuesHistoricalIds } from './issuesHistoricalListModuleConfig';

const IssuesHistoricalListModuleComponent: React.FC<IssuesHistoricalListModulePropsI> = (props) => {

  const rowsPerPage = 8;
  const dispatch = useDispatch();
  const [modalState, setOpenModal, setCloseModal, setBodyModal, setTitleModal] = useHookModal();
  const [issuesHistoricalList, setIssuesHistoricalList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalGlobalIssuesRows, setTotalGlobalIssuesRows] = useState(0);
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
    getCatalogDataService(CatalogModuleEnum.TYPE_STOCK), getCatalogDataService(CatalogModuleEnum.STATUS_ISSUE)])
      .then(axios.spread((issuesHistoricalListData, sectorCatalogData, typeStockCatalogData, statusIssueCatalogData) => {

        debug(debugClass, "result", issuesHistoricalListData, sectorCatalogData, typeStockCatalogData, statusIssueCatalogData);
        setIssuesHistoricalList(issuesHistoricalListData.data.issuesHistorical);
        setCurrentPage(currentPage + 1);
        setTotalGlobalIssuesRows(issuesHistoricalListData.data.totalIssues);
        setOptionsToColumnsDefList(columnsFilterIssuesHistoricalList.inputColumns, sectorCatalogData.data.catalogs, inputFilterIssuesHistoricalIds.sector);
        setOptionsToColumnsDefList(columnsFilterIssuesHistoricalList.inputColumns, typeStockCatalogData.data.catalogs, inputFilterIssuesHistoricalIds.typeStock);
        setOptionsToColumnsDefList(columnsFilterIssuesHistoricalList.inputColumns, statusIssueCatalogData.data.catalogs, inputFilterIssuesHistoricalIds.statusIssueQuick);
        setOptionsToColumnsDefList(columnsFilterIssuesHistoricalList.inputColumns, statusIssueCatalogData.data.catalogs, inputFilterIssuesHistoricalIds.statusIssueTrading);
        dispatch(setTemplateLoadingIsActiveAction(false));

      }))
      .catch((error) => {
        manageAlertModuleError(dispatch, props.componentType, debugClass, error);
        dispatch(setTemplateLoadingIsActiveAction(false));
      });
  }

  const executeGetissuesHistoricalList = (issuesHistoricalList: any[], formFilterData: any, currentPage: number, rowsPerPage: number) => {

    let debugClass = generateDebugClassModule("init get issues historical list");
    debug(debugClass, "start");

    axios.all([getIssuesHistoricalListService(formFilterData, currentPage, rowsPerPage)])
      .then(axios.spread((issuesHistoricalListData) => {

        debug(debugClass, "result", issuesHistoricalListData);
        setIssuesHistoricalList([...issuesHistoricalList, ...issuesHistoricalListData.data.issuesHistorical]);
        setCurrentPage(currentPage + 1);
        setTotalGlobalIssuesRows(issuesHistoricalListData.data.totalIssues);

      }))
      .catch((error) => {
        manageAlertModuleError(dispatch, props.componentType, debugClass, error);
      });
  }

  const executeResetIssuesHistoricalList = () => {

    executeGetissuesHistoricalList([], formFilterData, 1, rowsPerPage);
  }

  const renderInfiniteScroll = () => {
    return <LoadingInfiniteScrollComponent itemsLength={issuesHistoricalList.length}
      executeFunction={totalGlobalIssuesRows !== null ? (() => { executeGetissuesHistoricalList(issuesHistoricalList, formFilterData, currentPage, rowsPerPage) }) : null} totalItems={totalGlobalIssuesRows} />
  }

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
            onClick={() => {
              setTitleModal("ISSUE DETAIL: " + issueData.issueData.initials);
              setBodyModal((<IssuesHistoricalDataModuleComponent idIssue={issueData.issueData.idIssue} initialsIssue={issueData.issueData.initials} componentType={ComponentTypeEnum.POPUP} executeParentFunction={() => { setCloseModal(); }} />));
              setOpenModal()
            }}
            tooltip={"Edit issue: " + issueData.issueData.initials}
          />
          <br></br>
          <div title="Yahoo chart" className="btn btn-sm btn-primary" style={{ width: "23px", paddingLeft: "4px", height: "19px", marginTop: "1px" }}
            onClick={() => { window.open(URL_EXTERNAL_YAHOO.replace(/#ISSUE#/g, issueData.issueData.initials)) }}
            onKeyDown={() => { }}
            >
            <div className="iconYahoo"></div>
          </div>
        </div>
        <ChartStockResumeComponent
          stockChartData={buildChartSeries(issueData.issueHistorical)}
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