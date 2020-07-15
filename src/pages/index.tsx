import React from 'react';
import { WingBlank, WhiteSpace, Button } from 'antd-mobile';
import { history } from 'umi';

const IndexPage = () => {
  return (
    <div>
      <WhiteSpace size="lg" />
      <WingBlank>
        <Button type="ghost" onClick={() => history.push('/chart-room')}>
          进入聊天室
        </Button>
      </WingBlank>
    </div>
  );
};
IndexPage.title = 'umi3 demo';
export default IndexPage;
