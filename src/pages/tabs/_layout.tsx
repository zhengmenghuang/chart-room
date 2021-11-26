import React, { useEffect } from 'react';
import { IRouteComponentProps } from 'umi';
import { TabBar, Icon } from 'antd-mobile';
import styles from './_layout.less';

const tabs = [
  { title: 'tab1', key: 'tab1', path: '/tabs/tab1', iconName: 'right' },
  { title: 'tab2', key: 'tab2', path: '/tabs/tab2', iconName: 'check' },
  { title: 'tab3', key: 'tab3', path: '/tabs/tab3', iconName: 'left' },
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
    <div className={styles.content}>
      <div>{children}</div>
      <div className={styles.footerTab}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          noRenderContent
          prerenderingSiblingsNumber={0}
          tabBarPosition="bottom"
        >
          {tabs.map((item) => (
            <TabBar.Item
              icon={<Icon type={item.iconName} />}
              selectedIcon={<Icon type={item.iconName} />}
              title={item.title}
              key={item.key}
              selected={history.location.pathname === item.path}
              onPress={() => {
                history.push(item.path);
              }}
            />
          ))}
        </TabBar>
      </div>
    </div>
  );
}
