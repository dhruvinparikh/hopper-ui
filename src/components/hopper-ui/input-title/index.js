import React,{Component} from 'react';
import FontBold from '../fonts/font-bold';
import styles from './input-title.module.scss';'';

export default class InputTitle extends Component{
  render(){
    const {title,title2,icon,...otherProps} = this.props;
    return(
      <div className={styles.inputTitle} {...otherProps} >
        {icon}
        <FontBold className={styles.title} >{title}</FontBold>
        <FontBold className={styles.title2}>{title2}</FontBold>
      </div>
    );
  }
} 