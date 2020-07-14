import React, { useRef, useState } from 'react';
import styles from './index.less';
import { Button, Toast } from 'antd-mobile';
import {
  useEventTarget,
  useKeyPress,
  useMount,
  useUnmount,
} from '@umijs/hooks';
import io from 'socket.io-client';
import { getNowTimeParse } from '@/utils/util';

// 随机初始化一个身份
let user: any;
// socket容器
let socket: any;

function ChartRoomPage() {
  // 虚拟几个用户
  const users = [
    { name: '张三', id: 3 },
    { name: '李四', id: 4 },
    { name: '王五', id: 5 },
    { name: '赵六', id: 6 },
  ];

  // 是否显示查看最新消息按钮 滚动到底部设置为false 新消息来的时候 不在最底部 设置为true
  const [hasNewChart, setHasNewChart] = useState(false);

  // 聊天内容的列表
  const [record, setRecord]: any[] = useState([]);

  // 获取滚动元素
  const scrollRef: any = useRef();

  // 初始化socket
  const initSocket = () => {
    if (socket) return;
    // 连接socket服务 默认进入房间号 10010
    socket = io('wss://www.llxhzm.xyz:6001?roomId=' + 10010);
    user = users[Math.floor(Math.random() * 4)];
    Toast.info(`当前您的身份为${user.name}`, 1.5);
    // 发送加入消息
    socket.emit('join', { ...user, time: getNowTimeParse() });
    // 获取历史消息
    socket.on('historyRecord', (value: any) => addChart(value));
    // 监听消息
    socket.on('msg', (value: any) => addChart([value]));
  };

  // 添加聊天记录到池子里
  const addChart = (value: any) => {
    record.push(...value);
    setRecord([...record]);
    if (
      scrollRef.current.scrollHeight -
        scrollRef.current.clientHeight -
        scrollRef.current.scrollTop <=
      scrollRef.current.clientHeight * 0.3
    ) {
      goBottom();
    } else {
      !hasNewChart && setHasNewChart(true);
    }
  };

  // 本次输入框的内容
  const [chart, reset] = useEventTarget('');

  // 发送消息
  const sendMsg = () => {
    if (!chart.value) return;
    socket.emit('msg', {
      type: 'chart',
      value: { ...user, time: getNowTimeParse(), message: chart.value },
    });
    reset();
  };

  // enter 键 发消息
  const InputRef: any = useKeyPress('enter', () => sendMsg());

  // input 获得焦点 判断是否需要滚动到最低点 键盘弹起 有300ms延迟
  const inputFocus = () => {
    setTimeout(() => {
      !hasNewChart && goBottom();
    }, 400);
  };

  // 点击按钮后 滚到最底部
  const goBottom = () => {
    hasNewChart && setHasNewChart(false);
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  // 监听页面滚动
  const scroll = () => {
    if (
      scrollRef.current.scrollHeight -
        scrollRef.current.clientHeight -
        scrollRef.current.scrollTop <=
      scrollRef.current.clientHeight * 0.3
    ) {
      hasNewChart && setHasNewChart(false);
    }
  };

  // 渲染列表
  const ChartList: any = () => {
    return record.map((item: any) => {
      switch (item.type) {
        case 'join':
          return (
            <div key={item.value.time} className={styles.public}>
              {item.value.name}进入了房间
            </div>
          );
        case 'exit':
          return (
            <div key={item.value.time} className={styles.public}>
              {item.value.name}离开了房间
            </div>
          );
        case 'chart':
          return (
            <div
              key={item.value.time}
              className={item.value.id === user.id ? styles.me : styles.other}
            >
              <div className={styles.name}>{item.value.name}</div>
              <div className={styles.value}>{item.value.message}</div>
            </div>
          );
        default:
          return '';
      }
    });
  };

  // 页面初始化
  useMount(() => {
    initSocket();
  });

  // 页面卸载
  useUnmount(() => {
    if (!socket) return;
    socket.close();
    socket = null;
  });

  return (
    <div className={styles.room}>
      <div onScroll={() => scroll()} ref={scrollRef} className={styles.list}>
        <ChartList />
      </div>
      <div className={styles.send}>
        <input
          ref={InputRef}
          {...chart}
          onFocus={() => inputFocus()}
          placeholder="说点什么..."
          className={styles.input}
        />
        <Button
          onClick={() => sendMsg()}
          type="ghost"
          size="small"
          inline
          className={styles.btn}
        >
          发送
        </Button>
      </div>
      <div
        onClick={() => goBottom()}
        className={hasNewChart ? styles.down : styles.hide}
      >
        <img
          className={styles.hand}
          src={require('@/assets/icons/gesture-down.png')}
        />
        <span className={styles.text}>您有新消息</span>
      </div>
    </div>
  );
}

ChartRoomPage.title = 'ChartRoom';

export default ChartRoomPage;
