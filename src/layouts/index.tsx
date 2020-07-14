import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { IRouteComponentProps, Switch } from 'umi';
export default function Layout({
  children,
  location,
  history,
}: IRouteComponentProps) {
  const ANIMATION_MAP: any = {
    PUSH: 'forward',
    POP: 'back',
  };

  return (
    <TransitionGroup
      childFactory={(child: any) =>
        React.cloneElement(child, {
          classNames: ANIMATION_MAP[history.action],
        })
      }
    >
      <CSSTransition key={location.pathname} timeout={300}>
        <Switch location={location}>{children.props.children}</Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
