import { HttpMethodEnum } from "lib-components-frontend-ts/lib/catalogs/enumCatalog";
import { generateDebugClassService } from "lib-components-frontend-ts/lib/utils/webUtils/debugUtil";
import { manageCallApiAuthPromise } from "lib-components-frontend-ts/lib/utils/webUtils/httpManagerUtil";
import { URL_ADMIN_DOLLAR_PRICE_UPDATE, URL_ADMIN_ISSUES_LAST_PRICE_UPDATE } from "@app/catalogs/uriCatalog";

export function updateDollarPriceService() {

    let debugClass = generateDebugClassService("Update Dollar Price");

    let params = {};
    let url = URL_ADMIN_DOLLAR_PRICE_UPDATE;
    
    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function updateIssuesLastPriceService() {

    let debugClass = generateDebugClassService("Update Issues Last Price");

    let params = {};
    let url = URL_ADMIN_ISSUES_LAST_PRICE_UPDATE;
    
    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function updateIssuesHistoricalService() {

    let debugClass = generateDebugClassService("Update Issues Historical");

    let params = {};
    let url = URL_ADMIN_ISSUES_LAST_PRICE_UPDATE;
    
    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}