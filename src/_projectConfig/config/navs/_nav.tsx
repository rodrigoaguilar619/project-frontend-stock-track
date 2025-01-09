import { ROUTE_ADMIN_MODULE, ROUTE_ISSUES_HISTORICAL_DATA_GET, ROUTE_ISSUES_LIST_GET, ROUTE_ISSUES_MANAGER_LIST_GET, ROUTE_ISSUES_MOVEMENTS_LIST_GET, ROUTE_LOAD_TRANSACTION_ISSUES_FILE_GET, ROUTE_PORTFOLIO_LIST_GET, ROUTE_TRANSACTION_ISSUES_TRACK_LIST_GET } from '@app/catalogs/routesCatalog'
import { AppMenusPropsDataI } from 'lib-components-react/lib/@types/components/layout/appMenuLayout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faExternalLink, faFile, faHistory, faList, faMapLocation, faMoneyBillTransfer, faRightFromBracket, faSection, faShare } from '@fortawesome/free-solid-svg-icons'
import { ROUTE_LOGOUT } from 'lib-components-react/lib/catalogs/routesCatalog'
import { PATH_API_DOCUMENTATION } from '@app/catalogs/uriCatalog'

const _nav: AppMenusPropsDataI[] = [
  {
    text: 'Admin Module',
    url: ROUTE_ADMIN_MODULE,
    icon: <FontAwesomeIcon icon={faSection} className="nav-icon menu-icon" />,
  },
  {
    text: 'Issues',
    icon : <FontAwesomeIcon icon={faShare} className="nav-icon menu-icon" />,
    children: [
      {
        text: 'Issues Admin',
        url: ROUTE_ISSUES_LIST_GET,
        icon: <FontAwesomeIcon icon={faList} className="nav-icon menu-icon" />,
      },
      {
        text: 'Issues Manager',
        url: ROUTE_ISSUES_MANAGER_LIST_GET,
        icon: <FontAwesomeIcon icon={faShare} className="nav-icon menu-icon" />,
      },
      {
        text: 'Issues Movements',
        url: ROUTE_ISSUES_MOVEMENTS_LIST_GET,
        icon: <FontAwesomeIcon icon={faMapLocation} className="nav-icon menu-icon" />,
      },
    ],
  },
  {
    text: 'Issues Historical',
    url: ROUTE_ISSUES_HISTORICAL_DATA_GET,
    icon: <FontAwesomeIcon icon={faHistory} className="nav-icon menu-icon" />,
  },
  {
    text: 'Portfolio',
    url: ROUTE_PORTFOLIO_LIST_GET,
    icon: <FontAwesomeIcon icon={faBriefcase} className="nav-icon menu-icon" />,
  },
  {
    text: 'Transaction Issues Track',
    url: ROUTE_TRANSACTION_ISSUES_TRACK_LIST_GET,
    icon: <FontAwesomeIcon icon={faMoneyBillTransfer} className="nav-icon menu-icon" />,
  },
  {
    text: 'Load Transaction Issues File',
    url: ROUTE_LOAD_TRANSACTION_ISSUES_FILE_GET,
    icon: <FontAwesomeIcon icon={faFile} className="nav-icon menu-icon" />,
  },
  {
    text: 'Documentation API',
    url: PATH_API_DOCUMENTATION,
    icon: <FontAwesomeIcon icon={faExternalLink} className="nav-icon menu-icon" />,
    isOpenExternal: true
  },
  {
    text: 'Logout',
    url: ROUTE_LOGOUT,
    icon: <FontAwesomeIcon icon={faRightFromBracket} className="nav-icon menu-icon" />
  }
]

export default _nav
