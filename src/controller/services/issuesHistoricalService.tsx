import { HttpMethodEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { generateDebugClassService } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageAxiosCallApiAuthPromise } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";
import { URL_ISSUES_HISTORICAL_DATA_INDIVIDUAL_GET, URL_ISSUES_HISTORICAL_DATA_LIST_GET } from "@app/catalogs/uriCatalog";


export function getIssuesHistoricalListService(filters: Record<string, any>, currentPage: number, rowsPerPage: number) {

    let debugClass = generateDebugClassService("Get issues historical list");

    let params = {dataTableConfig: {currentPage: currentPage, rowsPerPage: rowsPerPage, filters: filters} };
    let url = URL_ISSUES_HISTORICAL_DATA_LIST_GET;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function getIssueHistoricalDataService(idIssue: number) {

    let debugClass = generateDebugClassService("Get issue historical data");

    let params = {idIssue: idIssue };
    let url = URL_ISSUES_HISTORICAL_DATA_INDIVIDUAL_GET;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
} 