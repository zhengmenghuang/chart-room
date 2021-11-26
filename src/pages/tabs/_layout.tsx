import React, { useEffect } from 'react';
import { IRouteComponentProps } from 'umi';

export default function _layout({
  children,
  history,
  route,
}: IRouteComponentProps) {
  // 解决默认路由 404路由问题
  useEffect(() => {
    const nowPath = history.location.pathname;

    // 重定向
    if (nowPath === '/tabs') {
      setTimeout(() => {
        history.replace('/tabs/tab1');
      }, 0);
    }

    // 404
    else if (!route.routes?.find((item) => item.path === nowPath)) {
      setTimeout(() => {
        history.replace('/404');
      }, 0);
    }
  }, []);

  return (
    <div>
      <div>{children}</div>
      <div>我是父组件</div>
    </div>
  );
}
