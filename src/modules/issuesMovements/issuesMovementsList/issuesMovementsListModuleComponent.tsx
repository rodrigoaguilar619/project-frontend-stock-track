import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ColumnGroup } from 'primereact/columngroup';
import { IssuesListModulePropsI } from "@app/_types/modules/issues/issuesList";
import { CatalogModuleEnum, MaskDataTypeCustomEnum } from "@app/catalogs/enumCatalog";
import { getCatalogDataService } from "@app/controller/services/catalogService";
import { getIssuesMovementsListService } from "@app/controller/services/issuesMovementsService";
import { maskDataCustom } from "@app/utils/maskDataCustomUtil";
import { faAdd, faDashboard, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DataTableColumnOptionsPropsI } from "lib-components-frontend-ts/lib/@types/components/dataTable/dataTable";
import { ComponentTypeEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";
import DataTableComponent from 'lib-components-frontend-ts/lib/components/dataTable/dataTableComponent';
import { tableOptionsTemplateDefault } from "lib-components-frontend-ts/lib/components/dataTable/tableConfigDefault";
import { ButtonDataTableOptionComponent, ButtonDataTableOptionNestedComponent, ButtonWithNestedOptionsComponent, ButtonsOrganizerComponent } from 'lib-components-frontend-ts/lib/components/elements/buttonComponents';
import FilterAccoridionComponent from 'lib-components-frontend-ts/lib/components/filterAccordion/filterAccordionComponent';
import ModalComponent from "lib-components-frontend-ts/lib/components/modals/modalComponent";
import { TooltipConfigButtonNestedOptions, TooltipConfigCustom, TooltipConfigInputHelp } from 'lib-components-frontend-ts/lib/components/tooltip/tooltipConfigComponents';
import { setTemplateHeaderSubTitleAction } from "lib-components-frontend-ts/lib/controller/actions/templateHeaderAction";
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from "lib-components-frontend-ts/lib/controller/actions/templateLoadingAction";
import useHookModal from 'lib-components-frontend-ts/lib/hookStates/modalHookState';
import { buildFormDataContainers, setOptionsToColumnsDefList } from "lib-components-frontend-ts/lib/utils/componentUtils/formUtil";
import { debug, generateDebugClassModule } from "lib-components-frontend-ts/lib/utils/webUtils/debugUtil";
import { manageAlertModuleError } from "lib-components-frontend-ts/lib/utils/webUtils/httpManagerUtil";
import { columnFieldsIssuesMovementsNames, columnsFilterIssuesList, columnsIssuesMovementsExpandedList, columnsIssuesMovementsList, columnsIssuesMovementsTotalList, inputFitlerIssuesMovementsIds } from "./issuesMovementsListModuleConfig";
import { Row } from "primereact/row";
import { Column } from "primereact/column";

const buildMovementBuysExpandedData = (element: any) => {

    let priceBuys: any = {};
    priceBuys["issuePerformance"] = element.issuePerformance;
    priceBuys["fairValue"] = element.fairValue;
    priceBuys["currentPriceDate"] = element.currentPriceDate;
    priceBuys["currentPrice"] = element.currentPrice;

    element.issueMovementBuysList.forEach((buy: any) => {
        priceBuys["priceBuy" + buy.buyTransactionNumber] = buy.buyPrice;
    });

    return [priceBuys];
}

const buildMovementShareTotalResume = (element: any) => {

    let prefixSold = "Sold";
    let prefixNotSold = "NotSold";

    let movementShareTotal: any = {};
    movementShareTotal["totalShares" + prefixSold] = element["issueMovementTransaction" + prefixSold].totalShares;
    movementShareTotal["performanceTotal" + prefixSold] = element["issueMovementTransaction" + prefixSold].performanceTotal;
    movementShareTotal["performancePercentage" + prefixSold] = element["issueMovementTransaction" + prefixSold].performancePercentage;

    movementShareTotal["totalShares" + prefixNotSold] = element["issueMovementTransaction" + prefixNotSold].totalShares;
    movementShareTotal["performanceTotal" + prefixNotSold] = element["issueMovementTransaction" + prefixNotSold].performanceTotal;
    movementShareTotal["performancePercentage" + prefixNotSold] = element["issueMovementTransaction" + prefixNotSold].performancePercentage;

    return movementShareTotal;
}

const buildMovementComplements = (data: any) => {

    let result: any = [];
    data.forEach((element: any) => {

        result.push({ ...element, ...buildMovementShareTotalResume(element), expandedData: buildMovementBuysExpandedData(element) });
    });

    return result;
}

const IssuesMovementsListModuleComponent: React.FC<IssuesListModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const [issuesMovementsList, setIssuesMovementsList] = useState<[]>([]);
    const [issuesMovementsTotal, setIssuesMovementsTotal] = useState<any[]>([]);
    const [issueMovementTransactionTotalNotSold, setIssueMovementTransactionTotalNotSold] = useState<any>({});
    const [issueMovementTransactionTotalSold, setIssueMovementTransactionTotalSold] = useState<any>({});
    const [formFilterData, setFormFilterData] = useState<Record<string, any>>({});
    const [modalState, setOpenModal, setCloseModal, setBodyModal, setTitleModal, setSizeModal] = useHookModal();
    const optionsTemplate: DataTableColumnOptionsPropsI = tableOptionsTemplateDefault;
    
    const IssueMovementAddEditModuleComponent = React.lazy(() => import('@app/modules/issuesMovements/issueMovementAddEdit/issueMovementAddEditModuleComponent'))
    const IssuesHistoricalDataModuleComponent = React.lazy(() => import('@app/modules/issuesHistorical/issueHistoricalData/issueHistoricalDataModuleComponent'))
    
    let buttonIssueMovementAdd = <ButtonDataTableOptionComponent
        icon={faAdd}
        label="Add issue movement"
        onClick={() => {
            setTitleModal("ADD ISSUE MOVEMENT");
            setBodyModal((<IssueMovementAddEditModuleComponent componentType={ComponentTypeEnum.POPUP} executeParentFunction={() => { executeGetIssuesMovementsList(); setCloseModal(); }} />));
            setOpenModal();
        }}
        tooltip={"Add issue movement"}
    />

    useEffect(() => {

        dispatch(setTemplateHeaderSubTitleAction("Issues movements list"));
        optionsTemplate.actionTemplate = actionTemplate;
        setFormFilterData(buildFormDataContainers([columnsFilterIssuesList]));

        initModule();
        return () => {
        };
    }, []);

    const actionTemplate = (rowData: any, column: any) => {

        let buttonOptions: any = [];
        let buttonNestedOptions = [];

        buttonNestedOptions.push(
        <ButtonDataTableOptionNestedComponent
            icon={faEdit}
            onClick={() => {
                setTitleModal("EDIT ISSUE MOVEMENT - ISSUE: " + rowData.issue);
                setSizeModal("md");
                setBodyModal(
            <IssueMovementAddEditModuleComponent
                componentType={ComponentTypeEnum.POPUP}
                idIssueMovement={rowData.idIssueMovement}
                executeParentFunction={() => { executeGetIssuesMovementsList(); setCloseModal(); }} />);
                setOpenModal() }}
                tooltip={"Edit issue movement id: " + rowData.idIssueMovement}
        />);
        buttonNestedOptions.push(
            <ButtonDataTableOptionNestedComponent
                icon={faDashboard}
                onClick={() => {
                    setSizeModal("lg");
                    setTitleModal("ISSUE DETAIL: " + rowData.issue);
                    setBodyModal((<IssuesHistoricalDataModuleComponent idIssue={rowData.idIssue} initialsIssue={rowData.issue} componentType={ComponentTypeEnum.POPUP} executeParentFunction={() => { setCloseModal(); }} />));
                    setOpenModal()
                }}
                tooltip={"show issue historical: " + rowData.issue}
            />);

        buttonOptions.push(<ButtonWithNestedOptionsComponent idTooltip={rowData.idIssueMovement} buttonOptions={buttonNestedOptions} />);
        return (<ButtonsOrganizerComponent buttonOptions={buttonOptions} />);
    }

    const headerGroup = (
        <ColumnGroup>
            <Row>
                <Column header="" rowSpan={3} />
                <Column header="" rowSpan={3} />
                <Column header={columnFieldsIssuesMovementsNames.alert.header} rowSpan={3} alignHeader={"center"} />
                <Column header={columnFieldsIssuesMovementsNames.issue.header} rowSpan={3} alignHeader={"center"} />
                <Column header={columnFieldsIssuesMovementsNames.status.header} rowSpan={3} alignHeader={"center"} />
                <Column header={columnFieldsIssuesMovementsNames.broker.header} rowSpan={3} alignHeader={"center"} />
                <Column header={columnFieldsIssuesMovementsNames.currency.header} rowSpan={3} alignHeader={"center"} />
            </Row>
            <Row>
                <Column header="Transaction Not Sold" colSpan={3} alignHeader={"center"} />
                <Column header="Transaction Sold" colSpan={3} alignHeader={"center"} />
                <Column header={columnFieldsIssuesMovementsNames.sector.header} rowSpan={3} alignHeader={"center"} />
            </Row>
            <Row>
                <Column header={columnFieldsIssuesMovementsNames.totalSharesNotSold.header} field={columnFieldsIssuesMovementsNames.totalSharesNotSold.field} alignHeader={"center"} />
                <Column header={columnFieldsIssuesMovementsNames.performanceTotalNotSold.header} field={columnFieldsIssuesMovementsNames.performanceTotalNotSold.field} alignHeader={"center"} />
                <Column header={columnFieldsIssuesMovementsNames.performancePercentageNotSold.header} field={columnFieldsIssuesMovementsNames.performancePercentageNotSold.field} alignHeader={"center"} />

                <Column header={columnFieldsIssuesMovementsNames.totalSharesSold.header} field={columnFieldsIssuesMovementsNames.totalSharesSold.field} alignHeader={"center"} />
                <Column header={columnFieldsIssuesMovementsNames.performanceTotalSold.header} field={columnFieldsIssuesMovementsNames.performanceTotalSold.field} alignHeader={"center"} />
                <Column header={columnFieldsIssuesMovementsNames.performancePercentageSold.header} field={columnFieldsIssuesMovementsNames.performancePercentageSold.field} alignHeader={"center"} />
            </Row>
        </ColumnGroup>
    )

    const footerGroup = (
        <ColumnGroup>
            <Row>
                <Column footer="Totals (USD):" colSpan={8} footerStyle={{ textAlign: 'right' }} />
                <Column footerStyle={{ textAlign: 'center' }} footer={maskDataCustom(issueMovementTransactionTotalNotSold.performanceTotal, {
                    maskType: MaskDataTypeCustomEnum.DOWN_UP,
                    maskDataCustomProps: { decimalPlaces: 2, addSeparateComma: true, addSymbolCurrency: true}
                })} />
                <Column footerStyle={{ textAlign: 'center' }} footer={maskDataCustom(issueMovementTransactionTotalNotSold.performancePercentage, {
                    maskType: MaskDataTypeCustomEnum.DOWN_UP,
                    maskDataCustomProps: { decimalPlaces: 2, addSeparateComma: true, addSymbolPercent: true}
                })} />
                <Column footer=""/>
                <Column footerStyle={{ textAlign: 'center' }} footer={maskDataCustom(issueMovementTransactionTotalSold.performanceTotal, {
                    maskType: MaskDataTypeCustomEnum.DOWN_UP,
                    maskDataCustomProps: { decimalPlaces: 2, addSeparateComma: true, addSymbolCurrency: true}
                })} />
                <Column footerStyle={{ textAlign: 'center' }} footer={maskDataCustom(issueMovementTransactionTotalSold.performancePercentage, {
                    maskType: MaskDataTypeCustomEnum.DOWN_UP,
                    maskDataCustomProps: { decimalPlaces: 2, addSeparateComma: true, addSymbolPercent: true}
                })} />
                <Column footer=""/>
            </Row>
        </ColumnGroup>
    );

    const rowExpansionTemplate = (data: any) => {

        return (
            <div style={{ width: '87%' }}>
                <DataTableComponent
                    title={""}
                    
                    columnDefList={columnsIssuesMovementsExpandedList}
                    columnDataList={data.expandedData}
                    totalRows={0}
                    customMaskData={maskDataCustom}
                    isShowHeader={false}
                    isShowSearch={false}
                    isShowFooter={false}
                />
            </div>
        );
    };

    const setIssueMovementData = (data: any) => {
        setIssuesMovementsList(buildMovementComplements(data.issuesMovementsList));
        setIssueMovementTransactionTotalSold(data.issueMovementTransactionTotalSold);
        setIssueMovementTransactionTotalNotSold(data.issueMovementTransactionTotalNotSold);
        setIssuesMovementsTotal([data.issueMovementTransactionTotal]);
    }

    const initModule = () => {

        let debugClass = generateDebugClassModule("init issues movements list module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues movements list module"));
        axios.all([getIssuesMovementsListService(formFilterData), getCatalogDataService(CatalogModuleEnum.SECTOR),
        getCatalogDataService(CatalogModuleEnum.BROKER), getCatalogDataService(CatalogModuleEnum.STATUS_ISSUE_MOVEMENT)])
            .then(axios.spread((issuesMovementsListData, sectorsListData, typeStockListData, statusIssueMovementListData) => {

                debug(debugClass, "result", issuesMovementsListData, sectorsListData, typeStockListData, statusIssueMovementListData);
                setIssueMovementData(issuesMovementsListData.data);
                setOptionsToColumnsDefList(columnsFilterIssuesList.inputColumns, sectorsListData.data.catalogs, inputFitlerIssuesMovementsIds.sector);
                setOptionsToColumnsDefList(columnsFilterIssuesList.inputColumns, typeStockListData.data.catalogs, inputFitlerIssuesMovementsIds.broker);
                setOptionsToColumnsDefList(columnsFilterIssuesList.inputColumns, statusIssueMovementListData.data.catalogs, inputFitlerIssuesMovementsIds.statusIssueMovement);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const executeGetIssuesMovementsList = () => {

        let debugClass = generateDebugClassModule("init get issues movements list");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues movements list"));
        axios.all([getIssuesMovementsListService(formFilterData)])
            .then(axios.spread((issuesMovementsListData) => {

                debug(debugClass, "result", issuesMovementsListData);
                setIssueMovementData(issuesMovementsListData.data);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    let footerButtons: any[] = [];
    footerButtons.push(buttonIssueMovementAdd);

    return (<div>
        <ModalComponent title={modalState.titleModal} visible={modalState.showModal} selectorCloseModal={setCloseModal}
            body={modalState.bodyModal} size={modalState.size} />
        <br></br>
        <FilterAccoridionComponent
            formContainer={columnsFilterIssuesList}
            title="Issues Movement Filter"
            formData={formFilterData}
            executeFilterSearch={executeGetIssuesMovementsList}
            selectorUpdateFormData={setFormFilterData}
        />
        <div style={{ textAlign: "right", paddingBottom: "5px", paddingTop: "5px" }}>
            {buttonIssueMovementAdd}
        </div>
        <br></br>
        <DataTableComponent
            title=""
            columnDefList={columnsIssuesMovementsTotalList}
            columnDataList={issuesMovementsTotal}
            isShowFooter={false}
            isShowHeader={false}
            totalRows={0}
            customMaskData={maskDataCustom}
        />
        <br></br>
        <DataTableComponent
            title="Issues Movements"
            columnDefList={columnsIssuesMovementsList}
            columnDataList={issuesMovementsList}
            footerButtons={footerButtons}
            columnOptionsTemplate={optionsTemplate}
            totalRows={issuesMovementsList.length}
            isShowRowsPage={false}
            customMaskData={maskDataCustom}
            rowExpansionTemplate={rowExpansionTemplate}
            extraProps={{
                sortMode: "single", sortField: "descriptionSector", sortOrder: 1, rowGroupMode: "rowspan",
                groupRowsBy: "descriptionSector", scrollable: true, responsiveLayout: "scroll",
                headerColumnGroup: headerGroup, footerColumnGroup: footerGroup
            }}
        />
        <TooltipConfigInputHelp />
        <TooltipConfigCustom />
        <TooltipConfigButtonNestedOptions />
    </div>
    );
}

export default IssuesMovementsListModuleComponent