import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setDevUpdateMangerIssueDefaultData } from '@app/_projectConfig/config/mock/mockDefaultDataConfig';
import { IssueManagerUpdateModulePropsI } from '@app/_types/modules/issuesManager/issueManagerEdit';
import { CatalogModuleEnum } from '@app/catalogs/enumCatalog';
import { getCatalogDataService } from '@app/controller/services/catalogService';
import { getMangerIssueByIdService, updateIssueManagerService } from '@app/controller/services/issuesManagerService';
import { ComponentTypeEnum } from 'lib-components-frontend-ts/lib/catalogs/enumCatalog';
import { ButtonSubmitComponent, ButtonsOrganizerComponent } from 'lib-components-frontend-ts/lib/components/elements/buttonComponents';
import FormInputContainersComponent from 'lib-components-frontend-ts/lib/components/forms/formInputsElements/formInputContainersComponent';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from 'lib-components-frontend-ts/lib/controller/actions/templateLoadingAction';
import { buildAlertSuccessRedux } from 'lib-components-frontend-ts/lib/utils/componentUtils/alertUtil';
import { setOptionsToColumnsContainerDefList } from 'lib-components-frontend-ts/lib/utils/componentUtils/formUtil';
import { dispatchTemplateHeaderSubTitleAction } from 'lib-components-frontend-ts/lib/utils/componentUtils/templateUtil';
import { setDevButtonDefaultData } from 'lib-components-frontend-ts/lib/utils/devUtil';
import { buildSimpleReactValidator } from 'lib-components-frontend-ts/lib/utils/pluginUtils/simpleReactValidatorUtil';
import { debug, generateDebugClassModule, showDataDevelopment } from 'lib-components-frontend-ts/lib/utils/webUtils/debugUtil';
import { manageAlertModuleError } from 'lib-components-frontend-ts/lib/utils/webUtils/httpManagerUtil';
import { formContainersIssuesManager, inputIssueManagerIds } from './issueManagerUpdateModuleConfig';

const IssueManagerUpdateModuleComponent: React.FC<IssueManagerUpdateModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const [formIssueManagerData, setFormIssueManagerData] = useState<Record<string, any>>({});
    const [isForceUpdate, setIsForceUpdate] = useState<boolean>(false);
    const validatorControl: any = useRef(buildSimpleReactValidator());

    useEffect(() => {

        dispatchTemplateHeaderSubTitleAction(dispatch, props.componentType, "Update Manager Issue");
        initModule();

        return () => {
        };
    }, []);

    const initModule = () => {

        let debugClass = generateDebugClassModule("init edit manager issue module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues list module"));
        axios.all([getMangerIssueByIdService(props.idIssueManager), getCatalogDataService(CatalogModuleEnum.SECTOR),
        getCatalogDataService(CatalogModuleEnum.TYPE_STOCK), getCatalogDataService(CatalogModuleEnum.STATUS_ISSUE)])
            .then(axios.spread((issueManagerData, sectorsListData, typeStockListData, statusIssueListData) => {

                debug(debugClass, "result", issueManagerData, sectorsListData, typeStockListData, statusIssueListData);
                setFormIssueManagerData({...issueManagerData.data.issue, ...issueManagerData.data.issueManagerTrack});
                setOptionsToColumnsContainerDefList(formContainersIssuesManager, sectorsListData.data.catalogs, inputIssueManagerIds.idSector);
                setOptionsToColumnsContainerDefList(formContainersIssuesManager, typeStockListData.data.catalogs, inputIssueManagerIds.idTypeStock);
                setOptionsToColumnsContainerDefList(formContainersIssuesManager, statusIssueListData.data.catalogs, inputIssueManagerIds.idStatusIssue);
                setOptionsToColumnsContainerDefList(formContainersIssuesManager, statusIssueListData.data.catalogs, inputIssueManagerIds.idStatusIssueQuick);
                setOptionsToColumnsContainerDefList(formContainersIssuesManager, statusIssueListData.data.catalogs, inputIssueManagerIds.idStatusIssueTrading);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const showAlertSuccess = (componentType: ComponentTypeEnum) => {
        buildAlertSuccessRedux(dispatch, componentType, "Manager Issue " + formIssueManagerData.initials + " updated successfully");
    }

    const executeSubmitIssueManagerFormData = () => {

        let debugClass = generateDebugClassModule("init submit manager issue form data");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Updating manager issue"));
        axios.all([updateIssueManagerService(formIssueManagerData)])
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

    const submitIssueManagerData = () => {

        if (validatorControl.current.allValid()) {
            executeSubmitIssueManagerFormData();
        } else {
            validatorControl.current.showMessages();
            setIsForceUpdate(!isForceUpdate);
        }
    };

    let buttons = [
        <ButtonSubmitComponent key="save-button" label="Edit Issue" onClick={submitIssueManagerData} />
    ]

    setDevButtonDefaultData(buttons, () => setDevUpdateMangerIssueDefaultData(setFormIssueManagerData, formIssueManagerData));

    return (<div>
        <br></br>
        <FormInputContainersComponent formContainers={formContainersIssuesManager} formData={formIssueManagerData}
            validatorControl={validatorControl} selectorUpdateFormData={setFormIssueManagerData} />
        <br></br>
        <ButtonsOrganizerComponent buttonOptions={buttons} justifyContent="right" />
        <br></br>
        {showDataDevelopment("formData", formIssueManagerData)}
    </div>
    );
}

export default IssueManagerUpdateModuleComponent