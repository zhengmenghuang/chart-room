import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

export default class NoFoundPage extends React.Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="对不起，您访问的页面不存在"
        extra={
          <Button type="primary" onClick={() => history.push('/')}>
            {' '}
            首页{' '}
          </Button>
        }
      />
    );
  }
}
