import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { PortfolioListModulePropsI } from "@app/_types/modules/portfolio/portfolioList";
import { getPortfolioDataService, getPortfolioListService } from "@app/controller/services/portfolioService";
import { maskDataCustom } from "@app/utils/maskDataCustomUtil";
import { faFolderTree } from '@fortawesome/free-solid-svg-icons';
import { DataTableColumnOptionsPropsI } from "lib-components-frontend-ts/lib/@types/components/dataTable/dataTable";
import DataTableComponent from 'lib-components-frontend-ts/lib/components/dataTable/dataTableComponent';
import { tableOptionsTemplateDefault } from "lib-components-frontend-ts/lib/components/dataTable/tableConfigDefault";
import { ButtonDataTableOptionComponent, ButtonsOrganizerComponent } from 'lib-components-frontend-ts/lib/components/elements/buttonComponents';
import { TooltipConfigButtonNestedOptions, TooltipConfigCustom, TooltipConfigInputHelp } from 'lib-components-frontend-ts/lib/components/tooltip/tooltipConfigComponents';
import { setTemplateHeaderSubTitleAction } from "lib-components-frontend-ts/lib/controller/actions/templateHeaderAction";
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from "lib-components-frontend-ts/lib/controller/actions/templateLoadingAction";
import { debug, generateDebugClassModule } from "lib-components-frontend-ts/lib/utils/webUtils/debugUtil";
import { manageAlertModuleError } from "lib-components-frontend-ts/lib/utils/webUtils/httpManagerUtil";
import { columnsPortfolioData, columnsPortfolioList } from "./portfolioListModuleConfig";

const PortfolioListModuleComponent: React.FC<PortfolioListModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const [portfolioList, setPortfolioList] = useState<[]>([]);
    const [portfolioResumeData, setPortfolioResumeData] = useState<Record<string, any> | null>(null);
    const [portfolioSharesList, setPortfolioSharesList] = useState<any[]>([]);
    const optionsTemplate: DataTableColumnOptionsPropsI = tableOptionsTemplateDefault;
    
    useEffect(() => {

        dispatch(setTemplateHeaderSubTitleAction("Portfolio list"));
        optionsTemplate.actionTemplate = actionTemplate;

        initModule();
        return () => {
        };
    }, []);

    const actionTemplate = (rowData: any, column: any) => {

        let buttonOptions = [];

        buttonOptions.push(<ButtonDataTableOptionComponent
            icon={faFolderTree}
            onClick={() => {
                executeGetPortfolioData(rowData.idBroker);
            }}
            tooltip={"Get portfolio data for broker " + rowData.broker}
        />);    

        return (<ButtonsOrganizerComponent buttonOptions={buttonOptions} />);
    }

    const initModule = () => {

        let debugClass = generateDebugClassModule("init issues list module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues list module"));
        axios.all([getPortfolioListService()])
            .then(axios.spread((portfolioListData) => {

                debug(debugClass, "result", portfolioListData);
                setPortfolioList(portfolioListData.data.portfolioList);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const executeGetPortfolioData = (idBroker: number) => {

        let debugClass = generateDebugClassModule("init get portfolio data");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading portfolio data"));
        axios.all([getPortfolioDataService(idBroker)])
            .then(axios.spread((portfolioData) => {

                debug(debugClass, "result", portfolioData);
                setPortfolioResumeData(portfolioData.data.portfolioResume);
                setPortfolioSharesList(portfolioData.data.portfolioIssues);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const renderPortfolioResumeData = () => {

        if (portfolioResumeData === null) {
            return;
        }

        return (<DataTableComponent
            title={"Portfolio resume " + portfolioResumeData.broker}
            columnDefList={columnsPortfolioList}
            columnDataList={[portfolioResumeData]}
            totalRows={0}
            customMaskData={maskDataCustom}
            isShowSearch={false}
            isShowFooter={false}
            />)
    }

    const renderPortfolioSharesData = () => {

        if (portfolioSharesList.length === 0) {
            return;
        }

        return (<DataTableComponent
            title="Portfolio shares"
            columnDefList={columnsPortfolioData}
            columnDataList={portfolioSharesList}
            totalRows={portfolioSharesList.length}
            customMaskData={maskDataCustom}
            />)
    }

    return (<div>
        <DataTableComponent
            title="Issues"
            columnDefList={columnsPortfolioList}
            columnDataList={portfolioList}
            columnOptionsTemplate={optionsTemplate}
            totalRows={portfolioList.length}
            customMaskData={maskDataCustom}
            />
            <br></br>
            {renderPortfolioResumeData()}
            <br></br>
            {renderPortfolioSharesData()}
            <br></br>
        <TooltipConfigInputHelp />
        <TooltipConfigCustom />
        <TooltipConfigButtonNestedOptions />
    </div>
    );
}

export default PortfolioListModuleComponent