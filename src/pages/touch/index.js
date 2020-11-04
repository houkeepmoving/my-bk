import React, { useState, useEffect } from "react";
import { inject, observer } from 'mobx-react';
import * as Tool from 'tool';
import styles from './touch.scss';
import classNames from 'classnames';

export default inject('Toast')(observer(function Index(props) {
  const [email, setEmail] = useState('');
  useEffect(() => {
    Tool.setTitle('Hotel\' Blog');
  }, []);

  const inputEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };
  const submitHandel = () => {
    if (!email) {
      props.Toast.$toast('请输入邮箱~');
    } else if (!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)) {
      props.Toast.$toast('邮箱格式不正确~');
    } else {
      props.Toast.$toast('敬请等待~');
    }
  };
  return (
    <div className={styles.touch_container}>
      <h1 className={styles.title}>DevBlog - A Blog Template Made For Developers</h1>
      <h3 className={styles.topic}>Welcome to my blog. Subscribe and get my latest blog post in your inbox.</h3>
      <div className={styles.input_wrapper}>
        <input type="text" placeholder="Enter email" onInput={(e) => inputEmailChange(e)}/>
        <div className={styles.submit_btn} onClick={() => submitHandel()}>Subscribe</div>
      </div>
    </div>
  );
}));