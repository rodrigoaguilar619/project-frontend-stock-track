import axios from "axios";
import { useDispatch } from "react-redux";
import { updateDollarPriceService, updateIssuesHistoricalFluxService, updateIssuesLastPriceService } from "@app/controller/services/adminService";
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { ComponentTypeEnum, MaskDataTypeEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { ButtonCustomComponent, ButtonsOrganizerComponent } from 'lib-components-react/lib/components/elements/buttonComponents';
import { setTemplateLoadingActiveMessageAction, setTemplateLoadingIsActiveAction } from "lib-components-react/lib/controller/actions/templateLoadingAction";
import { buildAlertSuccessRedux } from "lib-components-react/lib/utils/componentUtils/alertUtil";
import { maskData } from "lib-components-react/lib/utils/dataUtils/maskDataUtil";
import { debug, generateDebugClassModule } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageAlertModuleError } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";
import { ConstantCatalogEnum } from "@app/catalogs/enumCatalog";

const enum enumOptions {
    UPDATE_DOLLAR_PRICE = "update_dollar_price",
    UPDATE_ISSUES_LAST_PRICE = "update_issues_last_price",
}

const AdminModuleComponent = () => {

    const dispatch = useDispatch();

    const showAlertSuccess = (componentType: ComponentTypeEnum, option: enumOptions, genericData: any) => {
        let messageResume = "";
        let messageResult = "";
        switch (option) {
            case enumOptions.UPDATE_DOLLAR_PRICE:
                messageResume = "Dollar price updated successfully";
                messageResult = "Date: " + maskData(genericData.date, { maskType: MaskDataTypeEnum.DATE, maskDataProps: { format: ConstantCatalogEnum.DATE_FORMAT_TABLE }}) 
                            + " - Price: " + maskData(genericData.price, { maskType: MaskDataTypeEnum.CURRENCY, maskDataProps: { decimalPlaces: 2, addSeparateComma: true, addSymbolCurrency: true }});
                break;
            case enumOptions.UPDATE_ISSUES_LAST_PRICE:
                messageResume = "Issues last price updated successfully";
                messageResult = "Issues last price to date";
                break;
        }

        buildAlertSuccessRedux(dispatch, componentType, messageResume + ": " + messageResult);
    }

    const executeButtonAction = (option: enumOptions) => {

        let debugClass = generateDebugClassModule("init update action " + option);
        debug(debugClass, "start");
        
        let loadingMessage = "";
        let genericService: (() => Promise<void>) | null = null;
        switch (option) {
            case enumOptions.UPDATE_DOLLAR_PRICE:
                loadingMessage = "Update dollar price";
                genericService = updateDollarPriceService.bind(null);
                break;
            case enumOptions.UPDATE_ISSUES_LAST_PRICE:
                loadingMessage = "Update issues last price";
                genericService = updateIssuesLastPriceService.bind(null);
                break;
        }

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading " + loadingMessage + "..."));

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

    const executeUpdaeIssuesHistorical = () => {

        let debugClass = generateDebugClassModule("init update issues historical");
        debug(debugClass, "start");

        dispatch(setTemplateLoadingActiveMessageAction(true, "Loading..."));

        updateIssuesHistoricalFluxService((chunks: any[]) => {
    
            if (chunks.length > 0) {
                const resultData = chunks[chunks.length - 1].data;
                dispatch(setTemplateLoadingActiveMessageAction(true, "(" + resultData.currentProgress + "/" + resultData.totalProgress + ") Updating issue: " +resultData.issue));
            }
        })
        .then(() => {
            buildAlertSuccessRedux(dispatch, ComponentTypeEnum.MODULE, "Issues historical updated successfully");
            dispatch(setTemplateLoadingIsActiveAction(false));
        })
        .catch((error) => {
            manageAlertModuleError(dispatch, ComponentTypeEnum.MODULE, debugClass, error);
            dispatch(setTemplateLoadingIsActiveAction(false));
        });
    }

    let buttonOptions = [];

        buttonOptions.push(<ButtonCustomComponent
            icon={faDollar}
            label="Update dollar price"
            onClick={() => {
                executeButtonAction(enumOptions.UPDATE_DOLLAR_PRICE);
            }}
        />);
        buttonOptions.push(<ButtonCustomComponent
            icon={faDollar}
            label="Update issues last price"
            onClick={() => {
                executeButtonAction(enumOptions.UPDATE_ISSUES_LAST_PRICE);
            }}
        />);
        buttonOptions.push(<ButtonCustomComponent
            icon={faDollar}
            label="Update issues historical"
            onClick={() => {
                executeUpdaeIssuesHistorical();
            }}
        />);

    return (<div>
        <ButtonsOrganizerComponent buttonOptions={buttonOptions} />
    </div>
    );
}

export default AdminModuleComponent