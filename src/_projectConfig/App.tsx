import 'react-app-polyfill/stable'
import 'core-js'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { mockApiConfigList } from './config/mock/mockApiConfig'
import { initConfigMocks } from 'lib-components-react/lib/utils/webUtils/axiosUtil'
import { _APP_API_MOCK_IS_LOAD_, _APP_ROUTE_START_ } from 'lib-components-react/lib/catalogs/constantCatalog'
import MainApp from 'lib-components-react/lib/templates/environments/coreui/mainApp'
import LoginCoreUI from 'lib-components-react/lib/templates/logins/loginCoreUI'
import routes from '@app/_projectConfig/config/routers/routes'
import _nav from '@app/_projectConfig/config/navs/_nav'
import store from '@app/controller/stores/store'
import '@app/scss/style.scss';

const App = () => {

  useEffect(() => {

    if (_APP_API_MOCK_IS_LOAD_ === true) {
      console.log("DEV: init configs mocks");
      initConfigMocks(mockApiConfigList);
    }
  }, []);

  return (
    <Provider store={store}>
    <MainApp
      routesSection={{ routes: routes, routeStart: _APP_ROUTE_START_  }}
      menusSection={{ menuItems: _nav, isFromApi: false }}
      loginTemplate={LoginCoreUI}
    />
    </Provider>)
}

export default App