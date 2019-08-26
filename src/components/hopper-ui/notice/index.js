import React,{Component} from 'react';
import FontBold from '../fonts/font-bold';
import FontRegular from '../fonts/font-regular';
import styles from './notice.module.scss';

export default class Notice extends Component{
  render(){
    const {text,...otherProps} = this.props;
    return (
      <div {...otherProps} >
        <FontBold className={styles.title} >Note : </FontBold>
        <FontRegular className={styles.text} >{text}</FontRegular>
      </div>
    );
  }
}