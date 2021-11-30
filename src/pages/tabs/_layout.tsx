import React, { useEffect } from 'react';
import { IRouteComponentProps } from 'umi';
import { TabBar } from 'antd-mobile';
import { AntOutline, AlipaySquareFill, UserOutline } from 'antd-mobile-icons';
import styles from './_layout.less';

const tabs = [
  { title: 'tab1', key: '/tabs/tab1', iconName: <AntOutline /> },
  { title: 'tab2', key: '/tabs/tab2', iconName: <AlipaySquareFill /> },
  { title: 'tab3', key: '/tabs/tab3', iconName: <UserOutline /> },
];

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
        history.replace('/tabs/tab2');
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
    <div className={styles.content}>
      <div>{children}</div>
      <div className={styles.footerTab}>
        <TabBar
          activeKey={history.location.pathname}
          onChange={(key) => history.push(key)}
        >
          {tabs.map((item) => (
            <TabBar.Item
              icon={item.iconName}
              title={item.title}
              key={item.key}
            />
          ))}
        </TabBar>
      </div>
    </div>
  );
}
