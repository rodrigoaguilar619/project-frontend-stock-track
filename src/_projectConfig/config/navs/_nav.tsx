import CIcon from '@coreui/icons-react'
import {
  cilBriefcase,
  cilFile,
  cilHistory,
  cilList,
  cilMove,
  cilShare,
  cilTransfer,
  cilViewModule,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'
import { ROUTE_ADMIN_MODULE, ROUTE_ISSUES_HISTORICAL_DATA_GET, ROUTE_ISSUES_LIST_GET, ROUTE_ISSUES_MANAGER_LIST_GET, ROUTE_ISSUES_MOVEMENTS_LIST_GET, ROUTE_LOAD_TRANSACTION_ISSUES_FILE_GET, ROUTE_PORTFOLIO_LIST_GET, ROUTE_TRANSACTION_ISSUES_TRACK_LIST_GET } from '@app/catalogs/routesCatalog'

const _nav = [
  {
    component: CNavTitle,
    name: 'Modules',
  },
  {
    component: CNavItem,
    name: 'Admin Module',
    to: ROUTE_ADMIN_MODULE,
    icon: <CIcon icon={cilViewModule} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Issues Admin',
    to: ROUTE_ISSUES_LIST_GET,
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Issues Manager',
    to: ROUTE_ISSUES_MANAGER_LIST_GET,
    icon: <CIcon icon={cilShare} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Issues Movements',
    to: ROUTE_ISSUES_MOVEMENTS_LIST_GET,
    icon: <CIcon icon={cilMove} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Issues Historical',
    to: ROUTE_ISSUES_HISTORICAL_DATA_GET,
    icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Portfolio',
    to: ROUTE_PORTFOLIO_LIST_GET,
    icon: <CIcon icon={cilBriefcase} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Transaction Issues Track',
    to: ROUTE_TRANSACTION_ISSUES_TRACK_LIST_GET,
    icon: <CIcon icon={cilTransfer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Load Transaction Issues File',
    to: ROUTE_LOAD_TRANSACTION_ISSUES_FILE_GET,
    icon: <CIcon icon={cilFile} customClassName="nav-icon" />,
  },
]

export default _nav
