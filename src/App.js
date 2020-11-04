import React, { Component } from 'react';
import classNames from 'classnames';
import styles from "./App.scss";
import { Provider } from 'mobx-react';
import stores from './store/index';
import Loadable from 'react-loadable';

const Toast = Loadable({
  loader: () => import('components/base/toast'),
  loading: () => null
});


export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }
  render() {
    return (
      <Provider {...stores}>
        <div className={classNames(styles.app_container)}>
          {this.props.children}
          <Toast/>
        </div>
      </Provider>
    );
  }
}
