import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import {styles} from './styles';

class ButtonMD extends Component {
  static defaultProps = {
    disabled: false,
    color:'primary'
  };

  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.oneOf(['primary','secondary'])
  };

  render() {
    const { classes, color,disabled,...otherProps } = this.props;
    return (
      <div {...otherProps} >
        <Button disabled={disabled} onClick={this.props.onClick} classes={{
          root: color === 'secondary' ? classes.rootSecondary : classes.rootPrimary
        }} >
          {this.props.children}
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(ButtonMD);