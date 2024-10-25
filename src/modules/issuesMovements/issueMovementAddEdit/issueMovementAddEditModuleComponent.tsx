import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { setDevAddMultipleIssueMovementDefaultData } from '@app/_projectConfig/config/mock/mockDefaultDataConfig';
import { IssueMovementAddEditModulePropsI } from '@app/_types/modules/issuesMovements/issueMovementAddEdit';
import { CatalogModuleEnum } from '@app/catalogs/enumCatalog';
import { getCatalogDataService } from '@app/controller/services/catalogService';
import { addEditIssueMovementService, getIssueMovementService } from '@app/controller/services/issuesMovementsService';
import { ComponentTypeEnum, OptionAddEditEnum } from 'lib-components-react/lib/catalogs/enumCatalog';
import { ButtonSubmitComponent, ButtonsOrganizerComponent } from 'lib-components-react/lib/components/elements/buttonComponents';
import FormInputContainersComponent from 'lib-components-react/lib/components/forms/formInputContainersComponent';
import FormInputsMultipleComponent from 'lib-components-react/lib/components/forms/formInputsMultipleComponent';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from 'lib-components-react/lib/controller/actions/templateLoadingAction';
import { buildAlertSuccessRedux } from 'lib-components-react/lib/utils/componentUtils/alertUtil';
import { buildFormDataContainers, buildFormDataMultiple, getParameterCall, setOptionsToColumnsContainerDefList } from 'lib-components-react/lib/utils/componentUtils/formUtil';
import { dispatchTemplateHeaderSubTitleAction } from 'lib-components-react/lib/utils/componentUtils/templateUtil';
import { deepClone } from 'lib-components-react/lib/utils/dataUtils/dataUtil';
import { setDevButtonDefaultData } from 'lib-components-react/lib/utils/devUtil';
import { buildSimpleReactValidator } from 'lib-components-react/lib/utils/pluginUtils/simpleReactValidatorUtil';
import { debug, generateDebugClassModule, showDataDevelopment } from 'lib-components-react/lib/utils/webUtils/debugUtil';
import { manageAlertModuleError } from 'lib-components-react/lib/utils/webUtils/httpManagerUtil';
import { formContainersIssueMovement, inputIssueMovementBuyIds, inputIssueMovementIds, inputsIssueMovementBuysAddMultiple } from './issueMovementAddEditModuleConfig';

const IssueMovementAddEditModuleComponent: React.FC<IssueMovementAddEditModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const location = useLocation();
    const idIssueMovement = getParameterCall(location, props, "idIssueMovement");
    const optionAddEdit: OptionAddEditEnum = idIssueMovement ? OptionAddEditEnum.EDIT : OptionAddEditEnum.ADD;
    const [formIssueMovementData, setFormIssueMovementData] = useState<Record<string, any>>({});
    const [formIssueMovementBuyMultipleData, setFormIssueMovementBuyMultipleData] = useState<Record<string, any>[]>([]);
    const prevFormIssueMovementBuyMultipleDataRef = useRef<Record<string, any>>([]);
    const [isForceUpdate, setIsForceUpdate] = useState<boolean>(false);
    const validatorControl: any = useRef(buildSimpleReactValidator());

    useEffect(() => {

        dispatchTemplateHeaderSubTitleAction(dispatch, props.componentType, idIssueMovement ? "Edit issue movement " + idIssueMovement : "Add issue movement");

        idIssueMovement ? initEditModule() : initAddModule();

        return () => {
        };
    }, []);

    useEffect(() => {

        if (prevFormIssueMovementBuyMultipleDataRef.current.length !== formIssueMovementBuyMultipleData.length) {

            let formIssueMovementBuyMultipleDataCopy = [...formIssueMovementBuyMultipleData];
            //TODO: update formIssueMovementBuyMultipleData iterating to set value transactionNumber with a value increment
            for (let index = 0; index < formIssueMovementBuyMultipleDataCopy.length; index++) {
                formIssueMovementBuyMultipleDataCopy[index][inputIssueMovementBuyIds.buyTransactionNumber] = index + 1;
            }

            prevFormIssueMovementBuyMultipleDataRef.current = formIssueMovementBuyMultipleDataCopy;
            setFormIssueMovementBuyMultipleData(formIssueMovementBuyMultipleDataCopy);
        }
        else
            prevFormIssueMovementBuyMultipleDataRef.current = formIssueMovementBuyMultipleData;

        return () => {
        };
    }, [formIssueMovementBuyMultipleData]);

    const initCatalogsPromiseWithSpread = () => {
        return axios.all([getCatalogDataService(CatalogModuleEnum.BROKER), getCatalogDataService(CatalogModuleEnum.STATUS_ISSUE_MOVEMENT)])
            .then(axios.spread((brokerListData, statusIssueMovementListData) => {
                setOptionsToColumnsContainerDefList(formContainersIssueMovement, brokerListData.data.catalogs, inputIssueMovementIds.idBroker);
                setOptionsToColumnsContainerDefList(formContainersIssueMovement, statusIssueMovementListData.data.catalogs, inputIssueMovementIds.idStatus);
            }));
    };

    const initAddModule = () => {

        let debugClass = generateDebugClassModule("init add movement issue module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues list module"));
        initCatalogsPromiseWithSpread()
            .then(() => {
                setFormIssueMovementData(buildFormDataContainers(formContainersIssueMovement));
                setFormIssueMovementBuyMultipleData([...buildFormDataMultiple(inputsIssueMovementBuysAddMultiple)]);
            })
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
            })
            .finally(() => {
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }


    const initEditModule = () => {

        let debugClass = generateDebugClassModule("init " + optionAddEdit + " movement issue module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issue movement module"));
        initCatalogsPromiseWithSpread()
            .then(() => axios.all([getIssueMovementService(idIssueMovement, props.idTypeCurrency)]))
            .then(axios.spread((issueMovementData) => {

                let issueMovementDataClone = deepClone(issueMovementData.data.issueMovement);
                delete issueMovementDataClone.issueMovementBuysList;

                setFormIssueMovementData(issueMovementDataClone);
                setFormIssueMovementBuyMultipleData(issueMovementData.data.issueMovement.issueMovementBuysList);
            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
            })
            .finally(() => {
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const showAlertSuccess = (componentType: ComponentTypeEnum) => {
        buildAlertSuccessRedux(dispatch, componentType, "Issue Movement " + formIssueMovementData.issue + " " + optionAddEdit + " successfully");
    }

    const executeSubmitIssueMovementFormData = () => {

        let debugClass = generateDebugClassModule("init submit issue movement form data");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, optionAddEdit + " issue movement"));
        axios.all([addEditIssueMovementService(optionAddEdit, formIssueMovementData, formIssueMovementBuyMultipleData, props.idTypeCurrency)])
            .then(axios.spread((addEditIssueData) => {

                debug(debugClass, "result", addEditIssueData);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .then(() => {
                
                if (props.executeParentFunction) {
                    props.executeParentFunction();
                    showAlertSuccess(ComponentTypeEnum.MODULE);
                }
                else
                    showAlertSuccess(props.componentType);
            })
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
        <ButtonSubmitComponent key="save-button" label={optionAddEdit + " Issue"} onClick={submitIssueMovementData} />
    ]

    setDevButtonDefaultData(buttons, () => setDevAddMultipleIssueMovementDefaultData(setFormIssueMovementData, setFormIssueMovementBuyMultipleData, formIssueMovementData, formIssueMovementBuyMultipleData));

    return (<div>
        <br></br>
        <FormInputContainersComponent formContainers={formContainersIssueMovement} formData={formIssueMovementData}
            validatorControl={validatorControl} selectorUpdateFormData={setFormIssueMovementData} />
        <br></br>
        <FormInputsMultipleComponent
            inputColumns={inputsIssueMovementBuysAddMultiple}
            formDataList={formIssueMovementBuyMultipleData}
            validatorControl={validatorControl}
            selectorUpdateFormDataList={setFormIssueMovementBuyMultipleData}
        />
        <br></br>
        <ButtonsOrganizerComponent buttonOptions={buttons} justifyContent="right" />
        <br></br>
        {showDataDevelopment("formIssueMovementData", formIssueMovementData)}
        {showDataDevelopment("formIssueMovementBuysData", formIssueMovementBuyMultipleData)}
    </div>
    );
}

export default IssueMovementAddEditModuleComponent