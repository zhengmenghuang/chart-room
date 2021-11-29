import React from 'react';
import { Space, Button } from 'antd-mobile';
import { history } from 'umi';

const IndexPage = () => {
  return (
    <Button
      color="primary"
      fill="outline"
      onClick={() => history.push('/chart-room')}
    >
      进入聊天室
    </Button>
  );
};
IndexPage.title = 'umi3 demo';
export default IndexPage;
