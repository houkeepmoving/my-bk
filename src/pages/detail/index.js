import React, { useState, useEffect } from "react";
import { inject, observer } from 'mobx-react';
import * as Tool from 'tool';
import styles from './detail.scss';
import classNames from 'classnames';
import Header from '../../components/base/Header';


export default inject('Toast')(observer(function Detail(props) {
  useEffect(() => {
    Tool.setTitle('Hotel\' Blog');
  }, []);

  return (
    <div className={styles.detail_container}>
      <Header type={2}></Header>
      <div className={classNames(styles.content_wrapper)}>
        <h1 className={classNames(styles.title)}>adsadj dnasd and ad adna dna da</h1>
        <div className={classNames(styles.content)}>da  das  dand asdna dnadhuefndf g g smf sfdm fnsdfnns fnf snfs fsnf sf sfnsfen snd sdandndan da dnad nadn adan dad anda  </div>
      </div>
    </div>
  );
}));