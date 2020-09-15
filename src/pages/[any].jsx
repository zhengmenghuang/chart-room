import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NotFoundPage: { (): JSX.Element; title: any; path: any; } = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，您访问的页面不存在"
      extra={
        <Button type="primary" onClick={() => history.push('/')}>
          首页
        </Button>
      }
    />
  );
};

NotFoundPage.title = '404';
NotFoundPage.path = undefined;

export default NotFoundPage;
