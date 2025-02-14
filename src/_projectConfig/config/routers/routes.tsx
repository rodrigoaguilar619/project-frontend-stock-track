import React from 'react'
import { ROUTE_ADMIN_MODULE, ROUTE_ISSUES_HISTORICAL_DATA_GET, ROUTE_ISSUES_LIST_GET, ROUTE_ISSUES_MANAGER_LIST_GET, ROUTE_ISSUES_MOVEMENTS_LIST_GET, ROUTE_LOAD_TRANSACTION_ISSUES_FILE_GET, ROUTE_PORTFOLIO_LIST_GET, ROUTE_TRANSACTION_ISSUES_TRACK_LIST_GET } from '@app/catalogs/routesCatalog';
import { _APP_ENVIRONMENT_ } from 'lib-components-react/lib/catalogs/constantCatalog';
import { ComponentTypeEnum, EnvironmentEnum } from 'lib-components-react/lib/catalogs/enumCatalog';
import { CatalogTypeCurrencyEnum } from '@app/catalogs/enumCatalog';

const IssuesListComponent = React.lazy(() => import('@app/modules/issues/issuesList/issuesListModuleComponent'));
const IssuesManagerListComponent = React.lazy(() => import('@app/modules/issuesManager/issuesManagerList/issuesManagerListModuleComponent'));
const IssuesHistoricalListComponent = React.lazy(() => import('@app/modules/issuesHistorical/issuesHistoricalList/issuesHistoricalListModuleComponent'));
const IssuesMovementsListComponent = React.lazy(() => import('@app/modules/issuesMovements/issuesMovementsList/issuesMovementsListModuleComponent'));
const AdminComponent = React.lazy(() => import('@app/modules/admin/adminModuleComponent'));

const IssueUpdateComponent = React.lazy(() => import('@app/modules/issues/issueUpdate/issueUpdateModuleComponent'));
const IssuesAddMultipleComponent = React.lazy(() => import('@app/modules/issues/issuesAddMultiple/issuesAddMultipleModuleComponent'));
const IssuesManagerUpdateComponent = React.lazy(() => import('@app/modules/issuesManager/issueManagerUpdate/issueManagerUpdateModuleComponent'));
const IssueMovementAddEditComponent = React.lazy(() => import('@app/modules/issuesMovements/issueMovementAddEdit/issueMovementAddEditModuleComponent'));
const IssueHistoricalDataComponent = React.lazy(() => import('@app/modules/issuesHistorical/issueHistoricalData/issueHistoricalDataModuleComponent'));
const PortfolioListComponent = React.lazy(() => import('@app/modules/portfolio/portfolioList/portfolioListModuleComponent'));
const TransactionIssuesTrackListComponent = React.lazy(() => import('@app/modules/transactionIssues/transactionIssuesTrack/transactionIssuesTrackModuleComponent'));
const LoadTransactionIssuesFileComponent = React.lazy(() => import('@app/modules/transactionIssues/loadTransactionIssuesFile/loadTransactionIssuesFileModuleComponent'));

const routesDev = [
  { path: "/issues/issueUpdate", name: 'Issue update', element: () => <IssueUpdateComponent componentType={ComponentTypeEnum.MODULE} idIssue={2} /> },
  { path: "/issues/issuesAddMultiple", name: 'Issues add multiple', element: () => <IssuesAddMultipleComponent componentType={ComponentTypeEnum.MODULE} /> },
  { path: "/issuesManager/issueManagerUpdate", name: 'Manager Issue update', element: () => <IssuesManagerUpdateComponent componentType={ComponentTypeEnum.MODULE} idIssueManager={6} /> },
  { path: "/issuesMovements/issueMovementAddEdit", name: 'Issue Movement Add Edit', element: () => <IssueMovementAddEditComponent componentType={ComponentTypeEnum.MODULE} idIssueMovement={30} idTypeCurrency={CatalogTypeCurrencyEnum.USD} /> },
  { path: "/issuesHistorical/issueHistoricalData", name: 'Issue Historical Data', element: () => <IssueHistoricalDataComponent componentType={ComponentTypeEnum.MODULE} idIssue={111} initialsIssue='EON' /> },
]

const routes = [
  // { path: '/', exact: true, name: 'Home', element: null },
  { path: ROUTE_ADMIN_MODULE, name: 'Admin', element: <AdminComponent /> },
  { path: ROUTE_ISSUES_LIST_GET, name: 'Issues List', element: <IssuesListComponent componentType={ComponentTypeEnum.MODULE} /> },
  { path: ROUTE_ISSUES_MANAGER_LIST_GET, name: 'Manager Issues List', element: <IssuesManagerListComponent componentType={ComponentTypeEnum.MODULE} /> },
  { path: ROUTE_ISSUES_HISTORICAL_DATA_GET, name: 'Historical Issues List', element: <IssuesHistoricalListComponent componentType={ComponentTypeEnum.MODULE} /> },
  { path: ROUTE_ISSUES_MOVEMENTS_LIST_GET, name: 'Issues Movements List', element: <IssuesMovementsListComponent componentType={ComponentTypeEnum.MODULE} /> },
  { path: ROUTE_PORTFOLIO_LIST_GET, name: 'Portfolio List', element: <PortfolioListComponent componentType={ComponentTypeEnum.MODULE} /> },
  { path: ROUTE_TRANSACTION_ISSUES_TRACK_LIST_GET, name: 'Transaction Issues Track List', element: <TransactionIssuesTrackListComponent componentType={ComponentTypeEnum.MODULE} /> },
  { path: ROUTE_LOAD_TRANSACTION_ISSUES_FILE_GET, name: 'Load Transaction Issues File', element: <LoadTransactionIssuesFileComponent componentType={ComponentTypeEnum.MODULE} /> },
]

const finalRoutes = _APP_ENVIRONMENT_ === EnvironmentEnum.DEVELOPMENT ? [...routes, ...routesDev] : routes;

export default finalRoutes
