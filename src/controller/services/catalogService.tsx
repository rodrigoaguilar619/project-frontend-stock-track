import { HttpMethodEnum } from "lib-components-react/lib/catalogs/enumCatalog";
import { generateDebugClassService } from "lib-components-react/lib/utils/webUtils/debugUtil";
import { manageCallApiAuthPromise } from "lib-components-react/lib/utils/webUtils/httpManagerUtil";
import { URL_CATALOG_DATA_LIST_GET } from "@app/catalogs/uriCatalog";

export function getCatalogDataService(catalogName: string) {

    let debugClass = generateDebugClassService("Get Catalog list");

    let params = { catalogName: catalogName };
    let url = URL_CATALOG_DATA_LIST_GET;
    
    return manageCallApiAuthPromise(debugClass, url, params, {}, HttpMethodEnum.POST);
}