import React from 'react';
import { Space, Button } from 'antd-mobile';
import { history } from '@@/core/history';

const IndexPage = () => {
  return (
    <Button color="primary" fill="outline" onClick={() => history.push('/')}>
      进入首页
    </Button>
  );
};
IndexPage.title = 'tab1';
export default IndexPage;
