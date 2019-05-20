import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from 'store/config';
import { Provider } from 'react-redux';
import Router from './Router';
import ScrollToTop from './utils/ScrollToTop';
import 'normalize.css';
import 'ui/style/index.scss';

const App = () => (
  <div className="app-wrp">
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <Router />
        </ScrollToTop>
      </ConnectedRouter>
    </Provider>
  </div>
);
export default App;
