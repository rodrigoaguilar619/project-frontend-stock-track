import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { TransactionIssuesTrackModulePropsI } from "@app/_types/modules/transactionIssues/transactionIssuesTrack";
import { getTransactionIssuesTrackListService } from "@app/controller/services/transactionIssuesService";
import { maskDataCustom } from "@app/utils/maskDataCustomUtil";
import DataTableComponent from 'lib-components-react/lib/components/dataTable/dataTableComponent';
import { TooltipConfigButtonNestedOptions, TooltipConfigCustom, TooltipConfigInputHelp } from 'lib-components-react/lib/components/tooltip/tooltipConfigComponents';
import { setTemplateHeaderSubTitleAction } from "lib-components-react/lib/controller/actions/templateHeaderAction";
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from "lib-components-react/lib/controller/actions/templateLoadingAction";
import { debug, generateDebugClassModule } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageAlertModuleError } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";
import { columnsTransactionIssuesList } from "./transactionIssuesTrackModuleConfig";
import LoadingModuleComponent from 'lib-components-react/lib/components/loadings/loadingModuleComponent';
import useHookLoading from 'lib-components-react/lib/hookStates/loadingHookState';

const IssuesManagerListComponent: React.FC<TransactionIssuesTrackModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const [transactionIssuesList, setTransactionIssuesList] = useState<[]>([]);
    const [loadingState, setLoading] = useHookLoading();
    
    useEffect(() => {

        dispatch(setTemplateHeaderSubTitleAction("Transaction Issues track"));

        initModule();
        return () => {
        };
    }, []);

    const initModule = () => {

        let debugClass = generateDebugClassModule("init manager issues list module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading transaction issues track list module"));
        axios.all([getTransactionIssuesTrackListService()])
            .then(axios.spread((transactionIssuesListData) => {

                debug(debugClass, "result", transactionIssuesListData);
                setTransactionIssuesList(transactionIssuesListData.data.transactionIssuesTrackList);
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

    if(loadingState.isLoading)
        return <LoadingModuleComponent />

    return (<div>
        <DataTableComponent
            title="Transaction issues track"
            columnDefList={columnsTransactionIssuesList}
            columnDataList={transactionIssuesList}
            totalRows={transactionIssuesList.length}
            customMaskData={maskDataCustom}
            />
        <TooltipConfigInputHelp />
        <TooltipConfigCustom />
        <TooltipConfigButtonNestedOptions />
    </div>
    );
}

export default IssuesManagerListComponent