import { HttpMethodEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { generateDebugClassService } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageAxiosCallApiAuthPromise } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";
import { URL_PORTFOLIO_DATA_GET, URL_PORTFOLIO_LIST_GET } from "@app/catalogs/uriCatalog";

export function getPortfolioListService() {

    let debugClass = generateDebugClassService("Get Issues list");

    let params = {};
    let url = URL_PORTFOLIO_LIST_GET;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}

export function getPortfolioDataService(idBroker: number) {

    let debugClass = generateDebugClassService("Get Portfolio data");

    let params = {idBroker: idBroker};
    let url = URL_PORTFOLIO_DATA_GET;
    
    return manageAxiosCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}