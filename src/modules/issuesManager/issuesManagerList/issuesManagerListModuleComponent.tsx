import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { IssuesManagerListModulePropsI } from "@app/_types/modules/issuesManager/issuesManagerList";
import { CatalogModuleEnum } from "@app/catalogs/enumCatalog";
import { getCatalogDataService } from "@app/controller/services/catalogService";
import { getIssuesManagerListService } from "@app/controller/services/issuesManagerService";
import { faDashboard, faEdit } from '@fortawesome/free-solid-svg-icons';
import { DataTableColumnOptionsPropsI } from "lib-components-react/lib/@types/components/dataTable/dataTable";
import { ComponentTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import DataTableComponent from 'lib-components-react/lib/components/dataTable/dataTableComponent';
import { tableOptionsTemplateDefault } from "lib-components-react/lib/components/dataTable/tableConfigDefault";
import { ButtonDataTableOptionComponent, ButtonsOrganizerComponent } from 'lib-components-react/lib/components/elements/buttonComponents';
import FilterAccoridionComponent from 'lib-components-react/lib/components/filterAccordion/filterAccordionComponent';
import ModalComponent from "lib-components-react/lib/components/modals/modalComponent";
import { TooltipConfigButtonNestedOptions, TooltipConfigCustom, TooltipConfigInputHelp } from 'lib-components-react/lib/components/tooltip/tooltipConfigComponents';
import { setTemplateHeaderSubTitleAction } from "lib-components-react/lib/controller/actions/templateHeaderAction";
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from "lib-components-react/lib/controller/actions/templateLoadingAction";
import useHookModal from 'lib-components-react/lib/hookStates/modalHookState';
import { buildFormDataContainers, setOptionsToColumnsDefList } from "lib-components-react/lib/utils/componentUtils/formUtil";
import { debug, generateDebugClassModule } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageAlertModuleError } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";
import { columnsFilterIssuesManagerList, columnsIssuesManagerList, inputFilterIssuesManagerIds } from "./issuesManagerListModuleConfig";
import LoadingModuleComponent from 'lib-components-react/lib/components/loadings/loadingModuleComponent';
import useHookLoading from 'lib-components-react/lib/hookStates/loadingHookState';

const IssuesManagerListComponent: React.FC<IssuesManagerListModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const [issuesManagerList, setIssuesManagerList] = useState<[]>([]);
    const [formFilterData, setFormFilterData] = useState<Record<string, any>>({});
    const [modalState, setOpenModal, setCloseModal, setBodyModal, setTitleModal] = useHookModal();
    const [loadingState, setLoading] = useHookLoading();
    const [modalSize, setModalSize] = useState<"sm" | "md" | "lg">("md");
    const optionsTemplate: DataTableColumnOptionsPropsI = tableOptionsTemplateDefault;
    
    const IssueManagerUpdateModuleComponent = React.lazy(() => import('@app/modules/issuesManager/issueManagerUpdate/issueManagerUpdateModuleComponent'))
    const IssuesHistoricalDataModuleComponent = React.lazy(() => import('@app/modules/issuesHistorical/issueHistoricalData/issueHistoricalDataModuleComponent'))
    
    useEffect(() => {

        dispatch(setTemplateHeaderSubTitleAction("Manager Issues list"));
        optionsTemplate.actionTemplate = actionTemplate;
        setFormFilterData(buildFormDataContainers([columnsFilterIssuesManagerList]));

        initModule();
        return () => {
        };
    }, []);

    const actionTemplate = (rowData: any, column: any) => {

        let buttonOptions = [];

        buttonOptions.push(<ButtonDataTableOptionComponent
            icon={faEdit}
            onClick={() => {
                setModalSize("md");
                setTitleModal("EDIT MANAGER ISSUE: " + rowData.initials);
                setBodyModal((<IssueManagerUpdateModuleComponent idIssueManager={rowData.idIssue} componentType={ComponentTypeEnum.POPUP} executeParentFunction={() => { executeGetIssuesManagerList(); setCloseModal(); }} />));
                setOpenModal()
            }}
            tooltip={"Edit issue: " + rowData.initials}
        />);
        buttonOptions.push(<ButtonDataTableOptionComponent
            icon={faDashboard}
            onClick={() => {
                setModalSize("lg");
                setTitleModal("ISSUE DETAIL: " + rowData.initials);
                setBodyModal((<IssuesHistoricalDataModuleComponent idIssue={rowData.idIssue} initialsIssue={rowData.initials} componentType={ComponentTypeEnum.POPUP} executeParentFunction={() => { setCloseModal(); }} />));
                setOpenModal()
            }}
            tooltip={"show issue historical: " + rowData.initials}
        />);

        return (<ButtonsOrganizerComponent buttonOptions={buttonOptions} />);
    }

    const initModule = () => {

        let debugClass = generateDebugClassModule("init manager issues list module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading manager issues list module"));
        axios.all([getIssuesManagerListService(formFilterData), getCatalogDataService(CatalogModuleEnum.SECTOR),
        getCatalogDataService(CatalogModuleEnum.TYPE_STOCK), getCatalogDataService(CatalogModuleEnum.STATUS_ISSUE), getCatalogDataService(CatalogModuleEnum.INDEX)])
            .then(axios.spread((issuesManagerListData, sectorsListData, typeStockListData, statusIssueListData, indexListData) => {

                debug(debugClass, "result", issuesManagerListData, sectorsListData, typeStockListData, statusIssueListData, indexListData);
                setIssuesManagerList(issuesManagerListData.data.issuesManagerList);
                setOptionsToColumnsDefList(columnsFilterIssuesManagerList.inputColumns, sectorsListData.data.catalogs, inputFilterIssuesManagerIds.sector);
                setOptionsToColumnsDefList(columnsFilterIssuesManagerList.inputColumns, typeStockListData.data.catalogs, inputFilterIssuesManagerIds.typeStock);
                setOptionsToColumnsDefList(columnsFilterIssuesManagerList.inputColumns, statusIssueListData.data.catalogs, inputFilterIssuesManagerIds.statusIssue);
                setOptionsToColumnsDefList(columnsFilterIssuesManagerList.inputColumns, statusIssueListData.data.catalogs, inputFilterIssuesManagerIds.statusIssueQuick);
                setOptionsToColumnsDefList(columnsFilterIssuesManagerList.inputColumns, statusIssueListData.data.catalogs, inputFilterIssuesManagerIds.statusIssueTrading);
                setOptionsToColumnsDefList(columnsFilterIssuesManagerList.inputColumns, indexListData.data.catalogs, inputFilterIssuesManagerIds.index);
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

    const executeGetIssuesManagerList = () => {

        let debugClass = generateDebugClassModule("init get manager issues list");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading manager issues list"));
        axios.all([getIssuesManagerListService(formFilterData)])
            .then(axios.spread((issuesManagerListData) => {

                debug(debugClass, "result", issuesManagerListData);
                setIssuesManagerList(issuesManagerListData.data.issuesManagerList);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }
    
    if(loadingState.isLoading)
        return <LoadingModuleComponent />

    return (<div>
        <ModalComponent title={modalState.titleModal} visible={modalState.showModal} selectorCloseModal={setCloseModal}
            body={modalState.bodyModal} size={modalSize} />
        <br></br>
        <FilterAccoridionComponent
            formContainer={columnsFilterIssuesManagerList}
            title="Issues Manager Filter"
            formData={formFilterData}
            executeFilterSearch={executeGetIssuesManagerList}
            selectorUpdateFormData={setFormFilterData}
        />
        <DataTableComponent
            title="Issues Manager"
            columnDefList={columnsIssuesManagerList}
            columnDataList={issuesManagerList}
            columnOptionsTemplate={optionsTemplate}
            totalRows={issuesManagerList.length} />
        <TooltipConfigInputHelp />
        <TooltipConfigCustom />
        <TooltipConfigButtonNestedOptions />
    </div>
    );
}

export default IssuesManagerListComponent