import { HttpMethodEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";
import { generateDebugClassService } from "lib-components-frontend-ts/lib/utils/webUtils/debugUtil";
import { manageCallApiAuthPromise } from "lib-components-frontend-ts/lib/utils/webUtils/httpManagerUtil";
import { URL_ISSUES_DATA_INDIVIDUAL_GET, URL_ISSUES_DATA_INDIVIDUAL_UPDATE, URL_ISSUES_DATA_MULTIPLE_ADD, URL_ISSUES_LIST_GET } from "@app/catalogs/uriCatalog";

export function getIssuesListService(filters: Record<string, any>) {

    let debugClass = generateDebugClassService("Get Issues list");

    let params = {filters: filters};
    let url = URL_ISSUES_LIST_GET;
    
    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function getIssueByIdService(id: number) {

    let debugClass = generateDebugClassService("Get Issue data by id");

    let url = URL_ISSUES_DATA_INDIVIDUAL_GET;
    let params = {idIssue: id};

    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function updateIssueService(issueData: Record<string, any>) {

    let debugClass = generateDebugClassService("Update Issue");

    let url = URL_ISSUES_DATA_INDIVIDUAL_UPDATE;
    let params = {issueData: issueData};

    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function addMultipleIssuesService(issueMainData: Record<string, any>, issuesList: Record<string, any>[]) {

    let debugClass = generateDebugClassService("Add Multiple Issues");

    let url = URL_ISSUES_DATA_MULTIPLE_ADD;
    let params = {...issueMainData, issues: issuesList };

    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}