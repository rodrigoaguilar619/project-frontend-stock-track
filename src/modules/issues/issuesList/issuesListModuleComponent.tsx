import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { IssuesListModulePropsI } from "@app/_types/modules/issues/issuesList";
import { CatalogModuleEnum } from "@app/catalogs/enumCatalog";
import { getCatalogDataService } from "@app/controller/services/catalogService";
import { getIssuesListService } from "@app/controller/services/issuesService";
import { faAdd, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DataTableColumnOptionsPropsI } from "lib-components-frontend-ts/lib/@types/components/dataTable/dataTable";
import { ComponentTypeEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";
import DataTableComponent from 'lib-components-frontend-ts/lib/components/dataTable/dataTableComponent';
import { tableOptionsTemplateDefault } from "lib-components-frontend-ts/lib/components/dataTable/tableConfigDefault";
import { ButtonDataTableOptionComponent, ButtonsOrganizerComponent } from 'lib-components-frontend-ts/lib/components/elements/buttonComponents';
import FilterAccoridionComponent from 'lib-components-frontend-ts/lib/components/filterAccordion/filterAccordionComponent';
import ModalComponent from "lib-components-frontend-ts/lib/components/modals/modalComponent";
import { TooltipConfigButtonNestedOptions, TooltipConfigCustom, TooltipConfigInputHelp } from 'lib-components-frontend-ts/lib/components/tooltip/tooltipConfigComponents';
import { setTemplateHeaderSubTitleAction } from "lib-components-frontend-ts/lib/controller/actions/templateHeaderAction";
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from "lib-components-frontend-ts/lib/controller/actions/templateLoadingAction";
import useHookModal from 'lib-components-frontend-ts/lib/hookStates/modalHookState';
import { buildFormDataContainers, setOptionsToColumnsDefList } from "lib-components-frontend-ts/lib/utils/componentUtils/formUtil";
import { debug, generateDebugClassModule } from "lib-components-frontend-ts/lib/utils/webUtils/debugUtil";
import { manageAlertModuleError } from "lib-components-frontend-ts/lib/utils/webUtils/httpManagerUtil";
import { columnsFilterIssuesList, columnsIssuesList, inputFitlerIssuesIds } from "./issuesListModuleConfig";

const IssuesListModuleComponent: React.FC<IssuesListModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const [issuesList, setIssuesList] = useState<[]>([]);
    const [formFilterData, setFormFilterData] = useState<Record<string, any>>({});
    const [modalState, setOpenModal, setCloseModal, setBodyModal, setTitleModal] = useHookModal();
    const optionsTemplate: DataTableColumnOptionsPropsI = tableOptionsTemplateDefault;
    const IssueUpdateModuleComponent = React.lazy(() => import('@app/modules/issues/issueUpdate/issueUpdateModuleComponent'))
    const IssuesAddMultipleModuleComponent = React.lazy(() => import('@app/modules/issues/issuesAddMultiple/issuesAddMultipleModuleComponent'))

    useEffect(() => {

        dispatch(setTemplateHeaderSubTitleAction("Issues list"));
        optionsTemplate.actionTemplate = actionTemplate;
        setFormFilterData(buildFormDataContainers([columnsFilterIssuesList]));

        initModule();
        return () => {
        };
    }, []);

    const actionTemplate = (rowData: any, column: any) => {

        let buttonOptions = [];

        buttonOptions.push(<ButtonDataTableOptionComponent
            icon={faEdit}
            onClick={() => {
                setTitleModal("EDIT ISSUE: " + rowData.initials);
                setBodyModal((<IssueUpdateModuleComponent idIssue={rowData.idIssue} componentType={ComponentTypeEnum.POPUP} executeParentFunction={() => { executeGetIssuesList(); setCloseModal(); }} />));
                setOpenModal()
            }}
            tooltip={"Edit issue: " + rowData.initials}
        />);    

        return (<ButtonsOrganizerComponent buttonOptions={buttonOptions} />);
    }

    const initModule = () => {

        let debugClass = generateDebugClassModule("init issues list module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues list module"));
        axios.all([getIssuesListService(formFilterData), getCatalogDataService(CatalogModuleEnum.SECTOR),
        getCatalogDataService(CatalogModuleEnum.TYPE_STOCK), getCatalogDataService(CatalogModuleEnum.STATUS_ISSUE)])
            .then(axios.spread((issuesListData, sectorsListData, typeStockListData, statusIssueListData) => {

                debug(debugClass, "result", issuesListData, sectorsListData, typeStockListData, statusIssueListData);
                setIssuesList(issuesListData.data.issues);
                setOptionsToColumnsDefList(columnsFilterIssuesList.inputColumns, sectorsListData.data.catalogs, inputFitlerIssuesIds.sector);
                setOptionsToColumnsDefList(columnsFilterIssuesList.inputColumns, typeStockListData.data.catalogs, inputFitlerIssuesIds.typeStock);
                setOptionsToColumnsDefList(columnsFilterIssuesList.inputColumns, statusIssueListData.data.catalogs, inputFitlerIssuesIds.statusIssue);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const executeGetIssuesList = () => {

        let debugClass = generateDebugClassModule("init get issues list");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues list"));
        axios.all([getIssuesListService(formFilterData)])
            .then(axios.spread((issuesListData) => {

                debug(debugClass, "result", issuesListData);
                setIssuesList(issuesListData.data.issues);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    let footerButtons: any[] = [];
    footerButtons.push(<ButtonDataTableOptionComponent
        icon={faAdd}
        label="Add issues"
        onClick={() => {
            setTitleModal("ADD ISSUES");
            setBodyModal((<IssuesAddMultipleModuleComponent componentType={ComponentTypeEnum.POPUP} executeParentFunction={() => { executeGetIssuesList(); setCloseModal(); }} />));
            setOpenModal()
        }}
    />);

    return (<div>
        <ModalComponent title={modalState.titleModal} visible={modalState.showModal} selectorCloseModal={setCloseModal}
            body={modalState.bodyModal} size='sm' />
        <br></br>
        <FilterAccoridionComponent
            formContainer={columnsFilterIssuesList}
            title="Issues Filter"
            formData={formFilterData}
            executeFilterSearch={executeGetIssuesList}
            selectorUpdateFormData={setFormFilterData}
        />
        <DataTableComponent
            title="Issues"
            columnDefList={columnsIssuesList}
            columnDataList={issuesList}
            footerButtons={footerButtons}
            columnOptionsTemplate={optionsTemplate}
            totalRows={issuesList.length} />
        <TooltipConfigInputHelp />
        <TooltipConfigCustom />
        <TooltipConfigButtonNestedOptions />
    </div>
    );
}

export default IssuesListModuleComponent