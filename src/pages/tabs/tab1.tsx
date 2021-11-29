import React from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { history } from '@@/core/history';

const IndexPage = () => {
  return (
    <div>
      <WhiteSpace size="lg" />
      <WingBlank>
        <Button onClick={() => history.push('/')}>进入首页</Button>
      </WingBlank>
    </div>
  );
};
IndexPage.title = 'tab1';
export default IndexPage;
