import { HttpMethodEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { generateDebugClassService } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageAxiosCallApiAuthPromise } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";
import { URL_ISSUES_MANAGER_DATA_INDIVIDUAL_GET, URL_ISSUES_MANAGER_DATA_INDIVIDUAL_UPDATE, URL_ISSUES_MANAGER_LIST_GET } from "@app/catalogs/uriCatalog";

export function getIssuesManagerListService(filters: Record<string, any>) {

    let debugClass = generateDebugClassService("Get manager issues list");

    let params = {filters: filters};
    let url = URL_ISSUES_MANAGER_LIST_GET;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function getMangerIssueByIdService(idIssueManager: number) {

    let debugClass = generateDebugClassService("Get manager issue data");

    let url = URL_ISSUES_MANAGER_DATA_INDIVIDUAL_GET;
    let params = {idIssue: idIssueManager};

    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function updateIssueManagerService(issueManagerData: Record<string, any>) {

    let debugClass = generateDebugClassService("Update manager issue");

    let url = URL_ISSUES_MANAGER_DATA_INDIVIDUAL_UPDATE;
    let params = {issueManagerData: issueManagerData};

    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}