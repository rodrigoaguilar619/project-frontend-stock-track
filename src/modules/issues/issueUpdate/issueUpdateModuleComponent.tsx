import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setDevUpdateIssueDefaultData } from '@app/_projectConfig/config/mock/mockDefaultDataConfig';
import { IssueUpdateModulePropsI } from '@app/_types/modules/issues/issueEdit';
import { CatalogModuleEnum } from '@app/catalogs/enumCatalog';
import { getCatalogDataService } from '@app/controller/services/catalogService';
import { getIssueByIdService, updateIssueService } from '@app/controller/services/issuesService';
import { ComponentTypeEnum } from 'lib-components-react/lib/catalogs/enumCatalog';
import { ButtonSubmitComponent, ButtonsOrganizerComponent } from 'lib-components-react/lib/components/elements/buttonComponents';
import FormInputContainersComponent from 'lib-components-react/lib/components/forms/formInputContainersComponent';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from 'lib-components-react/lib/controller/actions/templateLoadingAction';
import { buildAlertSuccessRedux } from 'lib-components-react/lib/utils/componentUtils/alertUtil';
import { setOptionsToColumnsContainerDefList } from 'lib-components-react/lib/utils/componentUtils/formUtil';
import { dispatchTemplateHeaderSubTitleAction } from 'lib-components-react/lib/utils/componentUtils/templateUtil';
import { setDevButtonDefaultData } from 'lib-components-react/lib/utils/devUtil';
import { buildSimpleReactValidator } from 'lib-components-react/lib/utils/pluginUtils/simpleReactValidatorUtil';
import { debug, generateDebugClassModule, showDataDevelopment } from 'lib-components-react/lib/utils/webUtils/debugUtil';
import { manageAlertModuleError } from 'lib-components-react/lib/utils/webUtils/httpManagerUtil';
import { formContainersIssues, inputIssueIds } from './issueUpdateModuleConfig';

const IssueUpdateModuleComponent: React.FC<IssueUpdateModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const [formIssueData, setFormIssueData] = useState<Record<string, any>>({});
    const [isForceUpdate, setIsForceUpdate] = useState<boolean>(false);
    const validatorControl: any = useRef(buildSimpleReactValidator());

    useEffect(() => {

        dispatchTemplateHeaderSubTitleAction(dispatch, props.componentType, "Update Issue");
        initModule();

        return () => {
        };
    }, []);

    const initModule = () => {

        let debugClass = generateDebugClassModule("init edit issue module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues list module"));
        axios.all([getIssueByIdService(props.idIssue), getCatalogDataService(CatalogModuleEnum.SECTOR),
        getCatalogDataService(CatalogModuleEnum.TYPE_STOCK), getCatalogDataService(CatalogModuleEnum.STATUS_ISSUE)])
            .then(axios.spread((issueData, sectorsListData, typeStockListData, statusIssueListData) => {

                debug(debugClass, "result", issueData, sectorsListData, typeStockListData, statusIssueListData);
                setFormIssueData(issueData.data.issue);
                setOptionsToColumnsContainerDefList(formContainersIssues, sectorsListData.data.catalogs, inputIssueIds.idSector);
                setOptionsToColumnsContainerDefList(formContainersIssues, typeStockListData.data.catalogs, inputIssueIds.idTypeStock);
                setOptionsToColumnsContainerDefList(formContainersIssues, statusIssueListData.data.catalogs, inputIssueIds.idStatusIssue);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const showAlertSuccess = (componentType: ComponentTypeEnum) => {
        buildAlertSuccessRedux(dispatch, componentType, "Issue " + formIssueData.initials + " updated successfully");
    }

    const executeSubmitIssueFormData = () => {

        let debugClass = generateDebugClassModule("init submit issue form data");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Updating issue"));
        axios.all([updateIssueService(formIssueData)])
            .then(axios.spread((updateIssueData) => {

                debug(debugClass, "result", updateIssueData);
                showAlertSuccess(props.componentType);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .then(() => {
                if(props.executeParentFunction) {
                    props.executeParentFunction();
                    showAlertSuccess(ComponentTypeEnum.MODULE);
                }
            })
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }
    const submitIssueData = () => {

        if (validatorControl.current.allValid()) {
            executeSubmitIssueFormData();
        } else {
            validatorControl.current.showMessages();
            setIsForceUpdate(!isForceUpdate);
        }
    };

    let buttons = [
        <ButtonSubmitComponent key="save-button" label="Edit Issue" onClick={submitIssueData} />
    ]

    setDevButtonDefaultData(buttons, () => setDevUpdateIssueDefaultData(setFormIssueData, formIssueData));

    return (<div>
        <br></br>
        <FormInputContainersComponent formContainers={formContainersIssues} formData={formIssueData}
            validatorControl={validatorControl} selectorUpdateFormData={setFormIssueData} />
        <br></br>
        <ButtonsOrganizerComponent buttonOptions={buttons} justifyContent="right" />
        <br></br>
        {showDataDevelopment("formData", formIssueData)}
    </div>
    );
}

export default IssueUpdateModuleComponent