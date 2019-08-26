import React,{Component} from 'react';
import styles from './banner.module.scss';
import Logo from '../logo';
import FontBold from '../fonts/font-bold';

export default class Banner extends Component{
  render() {
    return (
      <div className={styles.banner} >
        <Logo/>
        <FontBold className={styles.text}>
                    Portal
        </FontBold>
      </div>
    );
  }
}