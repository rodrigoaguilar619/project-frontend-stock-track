import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { IssuesListModulePropsI } from "@app/_types/modules/issues/issuesList";
import { CatalogModuleEnum } from "@app/catalogs/enumCatalog";
import { getCatalogDataService } from "@app/controller/services/catalogService";
import { getIssuesMovementsListService } from "@app/controller/services/issuesMovementsService";
import { maskDataCustom } from "@app/utils/maskDataCustomUtil";
import { faAdd, faEdit } from '@fortawesome/free-solid-svg-icons';
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
import { columnsFilterIssuesList, columnsIssuesMovementsList, inputFitlerIssuesMovementsIds } from "./issuesMovementsListModuleConfig";

const buildMovementBuys = (data: any) => {

    let result: any = [];
    data.forEach((element: any) => {

        let priceBuys: any = {};

        element.issueMovementBuysList.forEach((buy: any) => {
            priceBuys["priceBuy" + buy.buyTransactionNumber] = buy.buyPrice;
        });
        result.push({ ...element, ...priceBuys });
    });

    return result;
}

const IssuesMovementsListModuleComponent: React.FC<IssuesListModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const [issuesMovementsList, setIssuesMovementsList] = useState<[]>([]);
    const [formFilterData, setFormFilterData] = useState<Record<string, any>>({});
    const [modalState, setOpenModal, setCloseModal, setBodyModal, setTitleModal] = useHookModal();
    const optionsTemplate: DataTableColumnOptionsPropsI = tableOptionsTemplateDefault;
    const IssueMovementAddEditModuleComponent = React.lazy(() => import('@app/modules/issuesMovements/issueMovementAddEdit/issueMovementAddEditModuleComponent'))
    
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

        buttonNestedOptions.push(<ButtonDataTableOptionNestedComponent icon={faEdit} onClick={() => 
            { setTitleModal("EDIT ISSUE MOVEMENT - ISSUE: " + rowData.issue); setBodyModal(<IssueMovementAddEditModuleComponent componentType={ComponentTypeEnum.POPUP} idIssueMovement={rowData.idIssueMovement} executeParentFunction={() => { executeGetIssuesMovementsList(); setCloseModal(); }} />); setOpenModal() }} tooltip={"Edit issue movement id: " + rowData.idIssueMovement} />);

        buttonOptions.push(<ButtonWithNestedOptionsComponent idTooltip={rowData.idIssueMovement} buttonOptions={buttonNestedOptions} />);
        return (<ButtonsOrganizerComponent buttonOptions={buttonOptions} />);
    }

    const initModule = () => {

        let debugClass = generateDebugClassModule("init issues movements list module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues movements list module"));
        axios.all([getIssuesMovementsListService(formFilterData), getCatalogDataService(CatalogModuleEnum.SECTOR),
        getCatalogDataService(CatalogModuleEnum.BROKER), getCatalogDataService(CatalogModuleEnum.STATUS_ISSUE_MOVEMENT)])
            .then(axios.spread((issuesMovementsListData, sectorsListData, typeStockListData, statusIssueMovementListData) => {

                debug(debugClass, "result", issuesMovementsListData, sectorsListData, typeStockListData, statusIssueMovementListData);
                setIssuesMovementsList(buildMovementBuys(issuesMovementsListData.data.issuesMovementsList));
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
            .then(axios.spread((issuesListData) => {

                debug(debugClass, "result", issuesListData);
                setIssuesMovementsList(issuesListData.data.issuesMovementsList);
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
            body={modalState.bodyModal} size='sm' />
        <br></br>
        <FilterAccoridionComponent
            formContainer={columnsFilterIssuesList}
            title="Issues Movement Filter"
            formData={formFilterData}
            executeFilterSearch={executeGetIssuesMovementsList}
            selectorUpdateFormData={setFormFilterData}
        />
        <div style={{textAlign: "right", paddingBottom: "5px", paddingTop: "5px"}}>
            {buttonIssueMovementAdd}
        </div>
        <DataTableComponent
            title="Issues Movements"
            columnDefList={columnsIssuesMovementsList}
            columnDataList={issuesMovementsList}
            footerButtons={footerButtons}
            columnOptionsTemplate={optionsTemplate}
            totalRows={issuesMovementsList.length}
            isShowRowsPage={false}
            customMaskData={maskDataCustom}
            extraProps={{
                sortMode: "single", sortField: "descriptionSector", sortOrder: 1, rowGroupMode: "rowspan",
                groupRowsBy: "descriptionSector", scrollable: true, responsiveLayout: "scroll"
            }}
        />
        <TooltipConfigInputHelp />
        <TooltipConfigCustom />
        <TooltipConfigButtonNestedOptions />
    </div>
    );
}

export default IssuesMovementsListModuleComponent