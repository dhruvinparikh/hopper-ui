import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './flex-space-around.module.scss';

export default class FlexSpaceAround extends PureComponent {
  render() {
    const {className, ...otherProps } = this.props;
    const flexSpaceAroundClassNames = classNames({
      [styles.spaceAround] : true,
      [className] : true
    });
    return (
      <div className={flexSpaceAroundClassNames} {...otherProps}>
        {this.props.children}
      </div>
    );
  }
}
