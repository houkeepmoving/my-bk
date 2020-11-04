import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import Loadable from 'react-loadable';
import Loading from '../components/base/loading';

const Index = Loadable({ // 首页
  loader: () => import('../pages/index'),
  loading: Loading,
  timeout: 5000,
  delay: 200
});
const Touch = Loadable({ // 取得联系
  loader: () => import('../pages/touch'),
  loading: Loading,
  timeout: 5000,
  delay: 200
});
const Detail = Loadable({ // 文章详情
  loader: () => import('../pages/detail'),
  loading: Loading,
  timeout: 5000,
  delay: 200
});

const Root = () => {
  return (
    <App>
      <Switch>
        <Route path="/" exact component={Index} />
        <Route path="/index" component={Index} />
        <Route path="/touch" component={Touch} />
        <Route path="/detail" component={Detail} />
      </Switch>
    </App>
  );
};
export default Root;
