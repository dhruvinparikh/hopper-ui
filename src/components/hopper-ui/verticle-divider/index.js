import React,{PureComponent} from 'react';
import styles from './verticle-divider.module.scss';

export default class VerticleDivider extends PureComponent{
  render(){
    return(
      <div className={styles.verticleDivider} />
    );
  }
}