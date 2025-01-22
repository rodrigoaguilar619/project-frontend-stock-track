import { HttpMethodEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { generateDebugClassService } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageAxiosCallApiAuthPromise } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";
import { URL_LOAD_TRANSACTION_ISSUES_FILE_GET, URL_LOAD_TRANSACTION_MONEY_FILE_GET, URL_TRANSACTION_ISSUES_TRACK_LIST_GET } from "@app/catalogs/uriCatalog";

export function getTransactionIssuesTrackListService() {

    let debugClass = generateDebugClassService("Get Transaction Issues list");

    let params = {};
    let url = URL_TRANSACTION_ISSUES_TRACK_LIST_GET;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function loadTransactionIssuesFileService(formData: Record<string, any>) {

    let debugClass = generateDebugClassService("Load Transaction Issues list");

    let params = {...formData};
    let url = URL_LOAD_TRANSACTION_ISSUES_FILE_GET;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, { headers: { 'content-type': 'multipart/form-data'} }, HttpMethodEnum.POST);
}

export function loadTransactionMoneyFileService(formData: Record<string, any>) {

    let debugClass = generateDebugClassService("Load Transaction Money list");

    let params = {...formData};
    let url = URL_LOAD_TRANSACTION_MONEY_FILE_GET;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, { headers: { 'content-type': 'multipart/form-data'} }, HttpMethodEnum.POST);
}