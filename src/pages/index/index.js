import React, { useState, useEffect } from "react";
import { inject, observer } from 'mobx-react';
import * as Tool from 'tool';
import * as Common from '../../tool/common';
import styles from './index.scss';
import classNames from 'classnames';
import Header from '../../components/base/Header';

export default inject('Toast')(observer(function Index(props) {
  const [a] = useState(1);
  console.log(props);
  useEffect(() => {
    Tool.setTitle('Hotel\' Blog');
  }, []);

  // 跳转详情
  const linkDetail = () => {
    Common.pageJumpHandel(`${window.location.origin}/#/detail`);
  };
  return (
    <div className={styles.index_container}>
      <Header type={1}></Header>
      {/* 文章列表 */}
      <ul className={classNames(styles.list_container)}>
        <li>
          <h3 className={classNames(styles.title)}>美国大选之日，商铺加固门窗美国大选之日，商铺加固门窗美国大选之日，商铺加固门窗美国大选之日，商铺加固门窗美国大选之日，商铺加固门窗美国大选之日，商铺加固门窗美国大选之日，商铺加固门窗</h3>
          <p className={classNames(styles.content)}>das damd amd adma dmad ad mdad d adma dmad m d amsd amda dma dma dm ms jda mo shjnishinawe a nishi daodi shi naweo a hah  nizai ganshemme me xixi  wmen zayiqi na woaoni </p>
          <p className={classNames(styles.read_more)} onClick={() => linkDetail()}>Read more →</p>
        </li>
        <li>
          <h3 className={classNames(styles.title)}>dsa dad ad ad admsad amd ada dma d a da d ada d</h3>
          <p className={classNames(styles.content)}>das damd amd adma dmad ad mdad d adma dmad m d amsd amda dma dma dm ms jda mo shjnishinawe a nishi daodi shi naweo a hah  nizai ganshemme me xixi  wmen zayiqi na woaoni </p>
          <p className={classNames(styles.read_more)} onClick={() => linkDetail()}>Read more →</p>
        </li>
      </ul>
      <div className={styles.btn_container}>
        <div className={classNames(styles.btn_wrapper)}>
          <div className={classNames(styles.previous)}>Previous</div>
          <div className={classNames(styles.next)}>Next</div>
        </div>
      </div>
    </div>
  );
}));