import axios from "axios";
import { useDispatch } from "react-redux";
import { PATH_API_DOCUMENTATION } from "@app/catalogs/uriCatalog";
import { updateDollarPriceService, updateIssuesHistoricalService, updateIssuesLastPriceService } from "@app/controller/services/adminService";
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { ComponentTypeEnum, MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { ButtonDataTableOptionComponent, ButtonsOrganizerComponent } from 'lib-components-react/lib/components/elements/buttonComponents';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from "lib-components-react/lib/controller/actions/templateLoadingAction";
import { buildAlertSuccessRedux } from "lib-components-react/lib/utils/componentUtils/alertUtil";
import { maskData } from "lib-components-react/lib/utils/dataUtils/maskDataUtil";
import { debug, generateDebugClassModule } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageAlertModuleError } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";

const enum enumOptions {
    UPDATE_DOLLAR_PRICE = "update_dollar_price",
    UPDATE_ISSUES_LAST_PRICE = "update_issues_last_price",
    UPDATE_ISSUES_HISTORICAL = "update_issues_historical",
}

const AdminModuleComponent = () => {

    const dispatch = useDispatch();

    const showAlertSuccess = (componentType: ComponentTypeEnum, option: enumOptions, genericData: any) => {
        let messageResume = "";
        let messageResult = "";
        switch (option) {
            case enumOptions.UPDATE_DOLLAR_PRICE:
                messageResume = "Dollar price updated successfully";
                messageResult = "Date: " + maskData(genericData.date, { maskType: MaskDataTypeEnum.DATE, maskDataProps: { format: "DD/MM/yyyy" }}) 
                            + " - Price: " + maskData(genericData.price, { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true, addSymbolCurrency: true }});
                break;
            case enumOptions.UPDATE_ISSUES_LAST_PRICE:
                messageResume = "Issues last price updated successfully";
                messageResult = "Issues last price to date";
                break;
            case enumOptions.UPDATE_ISSUES_HISTORICAL:
                messageResume = "Issues historical updated successfully";
                break;
        }

        buildAlertSuccessRedux(dispatch, componentType, messageResume + ": " + messageResult);
    }

    const executeButtonAction = (option: enumOptions) => {

        let debugClass = generateDebugClassModule("init update action " + option);
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading update action " + option));
        
        let genericService: (() => Promise<void>) | null = null;
        switch (option) {
            case enumOptions.UPDATE_DOLLAR_PRICE:
                genericService = updateDollarPriceService.bind(null);
                break;
            case enumOptions.UPDATE_ISSUES_LAST_PRICE:
                genericService = updateIssuesLastPriceService.bind(null);
                break;
            case enumOptions.UPDATE_ISSUES_HISTORICAL:
                genericService = updateIssuesHistoricalService.bind(null);
                break;
        }

        axios.all([genericService()])
            .then(axios.spread((genericData: any) => {

                debug(debugClass, "result", genericData);
                showAlertSuccess(ComponentTypeEnum.MODULE, option, genericData.data);
                dispatch(setTemplateLoadingIsActiveAction(false));

            }))
            .catch((error) => {
                manageAlertModuleError(dispatch, ComponentTypeEnum.MODULE, debugClass, error);
                dispatch(setTemplateLoadingIsActiveAction(false));
            });
    }

    let buttonOptions = [];

        buttonOptions.push(<ButtonDataTableOptionComponent
            icon={faDollar}
            label="Update dollar price"
            onClick={() => {
                executeButtonAction(enumOptions.UPDATE_DOLLAR_PRICE);
            }}
        />);
        buttonOptions.push(<ButtonDataTableOptionComponent
            icon={faDollar}
            label="Update issues last price"
            onClick={() => {
                executeButtonAction(enumOptions.UPDATE_ISSUES_LAST_PRICE);
            }}
        />);
        buttonOptions.push(<ButtonDataTableOptionComponent
            icon={faDollar}
            label="Update issues historical"
            onClick={() => {
                executeButtonAction(enumOptions.UPDATE_ISSUES_HISTORICAL);
            }}
        />);

    return (<div>
        <ButtonsOrganizerComponent buttonOptions={buttonOptions} />
        <br></br>
        <div style={{ display: "ruby-text" }}>
            <a href={PATH_API_DOCUMENTATION} target="_blank" rel="noopener noreferrer" className="button_hiperlink">API Documentation</a>
        </div>
    </div>
    );
}

export default AdminModuleComponent