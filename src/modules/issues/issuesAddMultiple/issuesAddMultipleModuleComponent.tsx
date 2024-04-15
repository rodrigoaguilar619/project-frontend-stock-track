import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setDevAddMultipleIssuesDefaultData } from '@app/_projectConfig/config/mock/mockDefaultDataConfig';
import { IssuesAddMultipleModulePropsI } from '@app/_types/modules/issues/issuesAddMultiple';
import { CatalogModuleEnum } from '@app/catalogs/enumCatalog';
import { getCatalogDataService } from '@app/controller/services/catalogService';
import { addMultipleIssuesService } from '@app/controller/services/issuesService';
import { ComponentTypeEnum } from 'lib-components-frontend-ts/lib/catalogs/enumCatalog';
import { ButtonSubmitComponent, ButtonsOrganizerComponent } from 'lib-components-frontend-ts/lib/components/elements/buttonComponents';
import FormInputContainersComponent from 'lib-components-frontend-ts/lib/components/forms/formInputsElements/formInputContainersComponent';
import FormInputsMultipleComponent from 'lib-components-frontend-ts/lib/components/forms/formInputsMultiple/formInputsMultipleComponent';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from 'lib-components-frontend-ts/lib/controller/actions/templateLoadingAction';
import { buildAlertSuccessRedux } from 'lib-components-frontend-ts/lib/utils/componentUtils/alertUtil';
import { buildFormDataContainers, buildFormDataMultiple, setOptionsToColumnsContainerDefList, setOptionsToColumnsDefList } from 'lib-components-frontend-ts/lib/utils/componentUtils/formUtil';
import { dispatchTemplateHeaderSubTitleAction } from 'lib-components-frontend-ts/lib/utils/componentUtils/templateUtil';
import { setDevButtonDefaultData } from 'lib-components-frontend-ts/lib/utils/devUtil';
import { buildSimpleReactValidator } from 'lib-components-frontend-ts/lib/utils/pluginUtils/simpleReactValidatorUtil';
import { debug, generateDebugClassModule, showDataDevelopment } from 'lib-components-frontend-ts/lib/utils/webUtils/debugUtil';
import { manageAlertModuleError } from 'lib-components-frontend-ts/lib/utils/webUtils/httpManagerUtil';
import { formContainersIssuesAddMain, inputIssuesAddMainIds, inputIssuesAddMultipleIds, inputsIssuesAddMultiple } from './issuesAddMultipleModuleConfig';

const IssueEditModuleComponent: React.FC<IssuesAddMultipleModulePropsI> = (props) => {

    const dispatch = useDispatch();
    const [formIssueMainData, setFormIssueMainData] = useState<Record<string, any>>({});
    const [formIssueMultipleData, setFormIssueMultipleData] = useState<Record<string, any>[]>([]);
    const [isForceUpdate, setIsForceUpdate] = useState<boolean>(false);
    const validatorControl: any = useRef(buildSimpleReactValidator());

    useEffect(() => {

        dispatchTemplateHeaderSubTitleAction(dispatch, props.componentType, "Add multiple Issues");

        initModule();

        return () => {
        };
    }, []);

    const initModule = () => {

        let debugClass = generateDebugClassModule("init add multiple issues module");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading issues list module"));
        axios.all([getCatalogDataService(CatalogModuleEnum.SECTOR),
        getCatalogDataService(CatalogModuleEnum.TYPE_STOCK), getCatalogDataService(CatalogModuleEnum.STATUS_ISSUE)])
            .then(axios.spread((sectorsListData, typeStockListData, statusIssueListData) => {

                debug(debugClass, "result", sectorsListData, typeStockListData, statusIssueListData);
                setOptionsToColumnsDefList(inputsIssuesAddMultiple, sectorsListData.data.catalogs, inputIssuesAddMultipleIds.idSector);
                setOptionsToColumnsContainerDefList(formContainersIssuesAddMain, typeStockListData.data.catalogs, inputIssuesAddMainIds.idTypeStock);
                setOptionsToColumnsContainerDefList(formContainersIssuesAddMain, statusIssueListData.data.catalogs, inputIssuesAddMainIds.idStatusIssue);
                
                setFormIssueMainData(buildFormDataContainers(formContainersIssuesAddMain));
                setFormIssueMultipleData([...buildFormDataMultiple(inputsIssuesAddMultiple)]);
                
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, props.componentType, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    const showAlertSuccess = (componentType: ComponentTypeEnum) => {
        buildAlertSuccessRedux(dispatch, componentType, "Issues added successfully: " +  formIssueMultipleData.map(issue => issue.initials).join(", "));
    }

    const executeSubmitIssueAddMultipleFormData = () => {

        let debugClass = generateDebugClassModule("init submit multiple issues form data");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Saving issues"));
        axios.all([addMultipleIssuesService(formIssueMainData, formIssueMultipleData)])
            .then(axios.spread((addMultipleIssueData) => {

                debug(debugClass, "result", addMultipleIssueData);
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
            executeSubmitIssueAddMultipleFormData();
        } else {
            validatorControl.current.showMessages();
            setIsForceUpdate(!isForceUpdate);
        }
    };

    let buttons = [
        <ButtonSubmitComponent key="save-button" label="Add Issues" onClick={submitIssueData} />
    ]

    setDevButtonDefaultData(buttons, () => setDevAddMultipleIssuesDefaultData(setFormIssueMainData, setFormIssueMultipleData, formIssueMainData, formIssueMultipleData ));

    return (<div>
        <br></br>
        <FormInputContainersComponent formContainers={formContainersIssuesAddMain} formData={formIssueMainData}
            validatorControl={validatorControl} selectorUpdateFormData={setFormIssueMainData} />
        <br></br>
        <FormInputsMultipleComponent
            inputColumns={inputsIssuesAddMultiple}
            formDataList={formIssueMultipleData}
            validatorControl={validatorControl}
            selectorUpdateFormDataList={setFormIssueMultipleData}
        />
        <br></br>
        <ButtonsOrganizerComponent buttonOptions={buttons} justifyContent="right" />
        <br></br>
        {showDataDevelopment("formMainData", formIssueMainData)}
        {showDataDevelopment("formMultipleData", formIssueMultipleData)}
    </div>
    );
}

export default IssueEditModuleComponent