import React from 'react';
import { Button } from 'antd-mobile';
import { history } from 'umi';

const IndexPage = () => {
  return (
    <div style={{ padding: '10px' }}>
      <Button
        block
        color="primary"
        fill="outline"
        onClick={() => history.push('/chart-room')}
      >
        进入聊天室
      </Button>
    </div>
  );
};
IndexPage.title = 'umi3 demo';
export default IndexPage;
