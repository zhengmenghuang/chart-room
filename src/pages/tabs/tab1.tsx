import React from 'react';
import { Button } from 'antd-mobile';
import { history } from '@@/core/history';

const IndexPage = () => {
  return (
    <>
      <div style={{ padding: '10px' }}>
        <Button
          block
          color="primary"
          fill="outline"
          onClick={() => history.push('/')}
        >
          进入首页
        </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button
          block
          color="primary"
          fill="outline"
          onClick={() => history.push('/react-pdf')}
        >
          查看react-pdf
        </Button>
      </div>
      <div style={{ padding: '10px' }}>
        <Button
          block
          color="primary"
          fill="outline"
          onClick={() => history.push('/react-file-viewer')}
        >
          查看react-file-viewer
        </Button>
      </div>
    </>
  );
};
IndexPage.title = 'tab1';
export default IndexPage;
