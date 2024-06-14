import { _APP_URL_CONTEXT_PATH_ } from "lib-components-react/lib/catalogs/constantCatalog";

const _URL_API_MAIN_ = _APP_URL_CONTEXT_PATH_;
export const URL_ADMIN_DOLLAR_PRICE_UPDATE = _URL_API_MAIN_ + "api/service/dollar/updateDollarPrice";
export const URL_ADMIN_ISSUES_HISTORICAL_UPDATE = _URL_API_MAIN_ + "api/historical/updateIssuesHistorical";
export const URL_ADMIN_ISSUES_LAST_PRICE_UPDATE = _URL_API_MAIN_ + "api/issuesLastPrices/updateIssuesLastPrice";
export const URL_CATALOG_DATA_LIST_GET = _URL_API_MAIN_ + "api/admin/catalog/getCatalog";
export const URL_ISSUES_LIST_GET = _URL_API_MAIN_ + "api/issues/getIssues";
export const URL_ISSUES_DATA_INDIVIDUAL_GET = _URL_API_MAIN_ + "api/issues/getIssue";
export const URL_ISSUES_DATA_INDIVIDUAL_UPDATE = _URL_API_MAIN_ + "api/issues/updateIssue";
export const URL_ISSUES_DATA_MULTIPLE_ADD = _URL_API_MAIN_ + "api/issues/addMultipleIssues";
export const URL_ISSUES_MANAGER_LIST_GET = _URL_API_MAIN_ + "api/manager/issues/getIssuesManager";
export const URL_ISSUES_MANAGER_DATA_INDIVIDUAL_GET = _URL_API_MAIN_ + "api/manager/issues/getIssueManager";
export const URL_ISSUES_MANAGER_DATA_INDIVIDUAL_UPDATE = _URL_API_MAIN_ + "api/manager/issues/updateIssueManager";
export const URL_ISSUES_HISTORICAL_DATA_LIST_GET = _URL_API_MAIN_ + "api/historical/getIssuesHistorical";
export const URL_ISSUES_HISTORICAL_DATA_INDIVIDUAL_GET = _URL_API_MAIN_ + "api/historical/getIssueHistorical";
export const URL_ISSUES_MOVEMENTS_LIST_GET = _URL_API_MAIN_ + "api/issuesMovements/getIssuesMovements";
export const URL_ISSUES_MOVEMENTS_INDIVIDUAL_GET = _URL_API_MAIN_ + "api/issuesMovements/getIssueMovement";
export const URL_ISSUES_MOVEMENTS_INDIVIDUAL_ADD = _URL_API_MAIN_ + "api/issuesMovements/saveIssueMovement";
export const URL_ISSUES_MOVEMENTS_INDIVIDUAL_UPDATE = _URL_API_MAIN_ + "api/issuesMovements/updateIssueMovement";
export const URL_PORTFOLIO_LIST_GET = _URL_API_MAIN_ + "api/portfolio/getPortfolioList";
export const URL_PORTFOLIO_DATA_GET = _URL_API_MAIN_ + "api/portfolio/getPortfolioData";
export const URL_TRANSACTION_ISSUES_TRACK_LIST_GET = _URL_API_MAIN_ + "api/transactions/getTransactionIssuesTrack";
export const URL_LOAD_TRANSACTION_ISSUES_FILE_GET = _URL_API_MAIN_ + "api/transactions/loadtransactionIssuesFile";

export const PATH_API_DOCUMENTATION = _URL_API_MAIN_ + "swagger-ui/index.html";
export const URL_EXTERNAL_YAHOO = "https://finance.yahoo.com/quote/#ISSUE#/chart?p=#ISSUE#";