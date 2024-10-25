import { HttpMethodEnum, OptionAddEditEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { generateDebugClassService } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageCallApiAuthPromise } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";
import { buildDataTableConfig } from "lib-components-react/lib/utils/dataUtils/jsonUtil";
import { URL_ISSUES_MOVEMENTS_INDIVIDUAL_ADD, URL_ISSUES_MOVEMENTS_INDIVIDUAL_GET, URL_ISSUES_MOVEMENTS_INDIVIDUAL_UPDATE, URL_ISSUES_MOVEMENTS_LIST_GET } from "@app/catalogs/uriCatalog";

export function getIssuesMovementsListService(filters: Record<string, any>, idTypeCurrency: number) {

    let debugClass = generateDebugClassService("Get Issues movements list");

    let params = {...buildDataTableConfig(null, null, filters), idTypeCurrency: idTypeCurrency};
    let url = URL_ISSUES_MOVEMENTS_LIST_GET;
    
    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function getIssueMovementService(idIssueMovement: number, idTypeCurrency: number) {

    let debugClass = generateDebugClassService("Get Issue movement data");

    let url = URL_ISSUES_MOVEMENTS_INDIVIDUAL_GET;
    let params = {idIssueMovement: idIssueMovement, idTypeCurrency: idTypeCurrency};
    
    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function addEditIssueMovementService(optionAddEdit: OptionAddEditEnum, issueMovementData: Record<string, any>, issueMovementBuysData: Record<string, any>[], idTypeCurrency: number) {

    let debugClass = generateDebugClassService(optionAddEdit + " issue movement");

    let url = optionAddEdit === OptionAddEditEnum.EDIT ? URL_ISSUES_MOVEMENTS_INDIVIDUAL_UPDATE : URL_ISSUES_MOVEMENTS_INDIVIDUAL_ADD;
    let params = {...issueMovementData, issueMovementBuysList: issueMovementBuysData, idTypeCurrency: idTypeCurrency};
    
    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}