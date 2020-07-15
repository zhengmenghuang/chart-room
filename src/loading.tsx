import React from 'react';
import { Spin } from 'antd';

export default () => {
  return (
    <div className={'center-box'}>
      <Spin tip="加载中..." />
    </div>
  );
};
