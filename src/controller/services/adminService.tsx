import { HttpMethodEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { generateDebugClassService } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageAxiosCallApiAuthPromise, manageFetchFluxCallApiAuthPromise } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";
import { URL_ADMIN_DOLLAR_PRICE_UPDATE, URL_ADMIN_ISSUES_HISTORICAL_UPDATE, URL_ADMIN_ISSUES_HISTORICAL_UPDATE_FLUX, URL_ADMIN_ISSUES_LAST_PRICE_UPDATE } from "@app/catalogs/uriCatalog";

export function updateDollarPriceService() {

    let debugClass = generateDebugClassService("Update Dollar Price");

    let params = {};
    let url = URL_ADMIN_DOLLAR_PRICE_UPDATE;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function updateIssuesLastPriceService() {

    let debugClass = generateDebugClassService("Update Issues Last Price");

    let params = {};
    let url = URL_ADMIN_ISSUES_LAST_PRICE_UPDATE;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function updateIssuesHistoricalService() {

    let debugClass = generateDebugClassService("Update Issues Historical");

    let params = {};
    let url = URL_ADMIN_ISSUES_HISTORICAL_UPDATE;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function updateIssuesHistoricalFluxService(onData: (chunks: string[]) => void) {

    let debugClass = generateDebugClassService("Update Issues Historical");

    let params = {};
    let url = URL_ADMIN_ISSUES_HISTORICAL_UPDATE_FLUX;
    
    return manageFetchFluxCallApiAuthPromise(debugClass, url, params, { "Content-Type": "application/json", "Accept": "application/x-ndjson" }, HttpMethodEnum.POST, (chunks: string[]) => { return onData(chunks); });
}