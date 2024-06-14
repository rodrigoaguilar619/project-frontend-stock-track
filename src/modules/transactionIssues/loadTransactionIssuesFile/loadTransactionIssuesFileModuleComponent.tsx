import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { LoadTransactionIssuesFileModulePropsI } from '@app/_types/modules/transactionIssues/loadTransactionIssuesFile';
import { CatalogModuleEnum } from '@app/catalogs/enumCatalog';
import { getCatalogDataService } from '@app/controller/services/catalogService';
import { loadTransactionIssuesFileService } from '@app/controller/services/transactionIssuesService';
import { ComponentTypeEnum } from 'lib-components-react/lib/catalogs/enumCatalog';
import { ButtonSubmitComponent, ButtonsOrganizerComponent } from 'lib-components-react/lib/components/elements/buttonComponents';
import FormInputContainersComponent from 'lib-components-react/lib/components/forms/formInputsElements/formInputContainersComponent';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from 'lib-components-react/lib/controller/actions/templateLoadingAction';
import { buildAlertSuccessRedux } from 'lib-components-react/lib/utils/componentUtils/alertUtil';
import { buildFormDataContainers, setOptionsToColumnsContainerDefList } from 'lib-components-react/lib/utils/componentUtils/formUtil';
import { dispatchTemplateHeaderSubTitleAction } from 'lib-components-react/lib/utils/componentUtils/templateUtil';
import { buildSimpleReactValidator } from 'lib-components-react/lib/utils/pluginUtils/simpleReactValidatorUtil';
import { debug, generateDebugClassModule, showDataDevelopment } from 'lib-components-react/lib/utils/webUtils/debugUtil';
import { manageAlertModuleError } from 'lib-components-react/lib/utils/webUtils/httpManagerUtil';
import { formContainersTransactionIssuesFile, inputTransactionIssuesFileIds } from './loadTransactionIssuesFileModuleConfig';

const LoadTransactionIssuesFileModuleComponent: React.FC<LoadTransactionIssuesFileModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const [formTransactionIssueFileData, setFormTransactionIssueFileData] = useState<Record<string, any>>({});
    const [isForceUpdate, setIsForceUpdate] = useState<boolean>(false);
    const validatorControl: any = useRef(buildSimpleReactValidator());

    useEffect(() => {

        dispatchTemplateHeaderSubTitleAction(dispatch, props.componentType, "Load Transaction Issues File");
        initModule();

        return () => {
        };
    }, []);

    const initModule = () => {

        let debugClass = generateDebugClassModule("init load transaction issues file module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading manager issues list module"));
        axios.all([getCatalogDataService(CatalogModuleEnum.BROKER)])
            .then(axios.spread((brokersListData) => {

                debug(debugClass, "result", brokersListData);
                setOptionsToColumnsContainerDefList(formContainersTransactionIssuesFile, brokersListData.data.catalogs, inputTransactionIssuesFileIds.idBroker);
                setFormTransactionIssueFileData(buildFormDataContainers(formContainersTransactionIssuesFile));
                
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const showAlertSuccess = (componentType: ComponentTypeEnum) => {
        buildAlertSuccessRedux(dispatch, componentType, "Transaction issues loaded successfully");
    }

    const executeSubmitIssueMovementFormData = () => {

        let debugClass = generateDebugClassModule("init submit transaction issues file form data");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading transaction issues file"));
        axios.all([loadTransactionIssuesFileService(formTransactionIssueFileData)])
            .then(axios.spread((loadTransactionIssuesData) => {

                debug(debugClass, "result", loadTransactionIssuesData);
                showAlertSuccess(props.componentType);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const submitIssueMovementData = () => {

        if (validatorControl.current.allValid()) {
            executeSubmitIssueMovementFormData();
        } else {
            validatorControl.current.showMessages();
            setIsForceUpdate(!isForceUpdate);
        }
    };

    let buttons = [
        <ButtonSubmitComponent key="save-button" label={"Load Transaction Issues"} onClick={submitIssueMovementData} />
    ]

    return (<div>
        <br></br>
        <FormInputContainersComponent formContainers={formContainersTransactionIssuesFile} formData={formTransactionIssueFileData}
            validatorControl={validatorControl} selectorUpdateFormData={setFormTransactionIssueFileData} />
        <br></br>
        <ButtonsOrganizerComponent buttonOptions={buttons} justifyContent="right" />
        <br></br>
        {showDataDevelopment("formIssueMovementData", formTransactionIssueFileData)}
    </div>
    );
}

export default LoadTransactionIssuesFileModuleComponent