import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Users} />
      <Route path="/examlple" component={IndexPage} />
    </Router>
  );
};
