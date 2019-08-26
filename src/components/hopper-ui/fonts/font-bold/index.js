import React, { PureComponent } from 'react';

export default class FontBold extends PureComponent {
  render() {
    const { style, children, ...otherProps } = this.props;
    return (
      <div
        style={{
          fontFamily: 'Roboto-Bold',
          ...style
        }}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
}
