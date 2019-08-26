import React, { PureComponent } from 'react';

export default class FontRegular extends PureComponent {
  render() {
    const { style, children, fontFamily, ...otherProps } = this.props;
    return (
      <div
        style={{
          fontFamily: fontFamily ? fontFamily : 'Roboto-Regular',
          ...style
        }}
        {...otherProps}
      >
        {children}
      </div>
    );
  }
}
