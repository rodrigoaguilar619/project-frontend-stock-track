import { HttpMethodEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";
import { generateDebugClassService } from "lib-components-frontend-ts/lib/utils/webUtils/debugUtil";
import { manageCallApiAuthPromise } from "lib-components-frontend-ts/lib/utils/webUtils/httpManagerUtil";
import { URL_LOAD_TRANSACTION_ISSUES_FILE_GET, URL_TRANSACTION_ISSUES_TRACK_LIST_GET } from "@app/catalogs/uriCatalog";

export function getTransactionIssuesTrackListService() {

    let debugClass = generateDebugClassService("Get Transaction Issues list");

    let params = {};
    let url = URL_TRANSACTION_ISSUES_TRACK_LIST_GET;
    
    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function loadTransactionIssuesFileService(formData: Record<string, any>) {

    let debugClass = generateDebugClassService("Load Transaction Issues list");

    let params = {...formData};
    let url = URL_LOAD_TRANSACTION_ISSUES_FILE_GET;
    
    return manageCallApiAuthPromise(debugClass, url, params, { headers: { 'content-type': 'multipart/form-data'} }, HttpMethodEnum.POST);
}