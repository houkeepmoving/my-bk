import React, { useState, useEffect } from "react";
import * as Common from '../../../tool/common';
import styles from './header.scss';
import classNames from 'classnames';

export default function Header(props) {
  // const { type } = props;
  const [navigationWrapperShow, setNavigationWrapperShow] = useState(false);
  const [type, setType] = useState(props.type);
  console.log(props);

  useEffect(() => {
  }, []);

  const menuClickHandel = () => {
    setNavigationWrapperShow(!navigationWrapperShow);
  };
  // 联系我
  const getInTouchHandel = () => {
    Common.pageJumpHandel(`${window.location.origin}/#/touch`);
  };

  const typeCkick = (type) => {
    setType(type);
  };

  return (
    <div className={ styles.header_container }>
      <div className={ styles.header_wrapper }>
        <div className={styles.menu_icon} onClick={ () => menuClickHandel() }></div>
        <h1 className={styles.text}>Hotel's Blog</h1>
      </div>
      <div className={classNames(styles.navigation_wrapper, {[styles.navigation_wrapper_show] : navigationWrapperShow, [styles.navigation_wrapper_none] : !navigationWrapperShow})}>
        <div className={styles.portrait_wrapper}>
          <img src={require('../../../assets/images/me.jpg')} alt="" />
          <div className={styles.img_wrapper}></div>
        </div>
        <div className={styles.introduce_wrapper}>
          Hi，my name is hotel, Currently working at AutoHome as a front-end developer; I have four years of development experience;
        </div>
        <ul className={styles.directory_wrapper}>
          <li className={classNames({[styles.active] : type === 1})} onClick={() => typeCkick(1)}>Home</li>
          <li className={classNames({[styles.active] : type === 2})} onClick={() => typeCkick(2)}>Post</li>
          <li className={classNames({[styles.active] : type === 3})} onClick={() => typeCkick(3)}>About Me</li>
        </ul>
        <div className={styles.btn_wrapper} onClick={() => getInTouchHandel()}>Get in Touch</div>
      </div>
    </div>
  );
}