import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

const Router = () => (
  <Switch>
    {routes.map(({ layout: Layout, component: Component, ...rest }, indx) => (
      <Route
        {...rest}
        key={indx}
        render={matchProps => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
    ))}
  </Switch>
);

export default Router;
