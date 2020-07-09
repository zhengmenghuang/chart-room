import React from 'react';
import styles from './index.less';
import { Button } from 'antd-mobile';

function ChartRoomPage() {
  return (
    <div className={styles.room}>
      <div className={styles.list}>
        <div className={styles.public}>欢迎张三进入房间</div>

        <div className={styles.other}>
          <div className={styles.name}>张三</div>
          <div className={styles.value}>疑是地上霜</div>
        </div>

        <div className={styles.me}>
          <div className={styles.name}>李四</div>
          <div className={styles.value}>床前明月光</div>
        </div>
      </div>
      <div className={styles.send}>
        <input placeholder="说点什么..." className={styles.input} />
        <Button type="ghost" size="small" inline className={styles.btn}>
          发送
        </Button>
      </div>
      <div className={styles.down}>
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
