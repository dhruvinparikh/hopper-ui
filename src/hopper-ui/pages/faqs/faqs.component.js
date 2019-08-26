import React, { Component } from 'react';
import FontBold from '../../../components/hopper-ui/fonts/font-bold';
import FontRegular from '../../../components/hopper-ui/fonts/font-regular';
import styles from './faqs.module.scss';

export default class FAQS extends Component {
  render() {
    const { faqs } = this.props;
    return (
      <div className={styles.faqs}>
        <FontBold className={styles.heading}>FAQs</FontBold>
        {faqs.map((faq, index) => {
          return (
            <div key={index} className={styles.list}>
              <FontBold className={styles.question}>{faq.question}</FontBold>
              <FontRegular className={styles.answer}>{faq.answer}</FontRegular>
              <div className={styles.divider} />
            </div>
          );
        })}
      </div>
    );
  }
}
