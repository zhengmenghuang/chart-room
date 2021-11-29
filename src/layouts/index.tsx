import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { IRouteComponentProps, Switch } from 'umi';

export default function Layout({
  children,
  location,
  history,
  route,
  routes,
}: IRouteComponentProps) {
  const ANIMATION_MAP: any = {
    PUSH: 'forward',
    POP: 'back',
  };

  return children;

  // 体检并不好 主要是 history.action 给的值并不能按照想要的来（点击地址栏的前进后退都是 POP） 后续在研究
  // return (
  //   <TransitionGroup
  //     childFactory={(child: any) =>
  //       React.cloneElement(child, {
  //         classNames: ANIMATION_MAP[history.action],
  //       })
  //     }
  //   >
  //     <CSSTransition
  //       key={location.pathname}
  //       timeout={300}
  //     >
  //       <Switch location={location}>{children.props.children}</Switch>
  //     </CSSTransition>
  //   </TransitionGroup>
  // );
}
