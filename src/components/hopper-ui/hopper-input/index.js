import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { styles } from './styles';

class HopperInput extends Component {
  render() {
    const {
      classes, helperText, error, InputProps,activeInput, ...otherProps
    } = this.props;
    const rootLabelClassNames = classNames({
      [classes.rootErrorLabel]: error,
      [classes.rootLabel]: !error,
    });
    return (
      <TextField
        {...otherProps}
        variant="outlined"
        error={error}
        helperText={helperText}
        FormHelperTextProps={{
          classes: {
            root: classes.helperText,
            error: classes.helperTextError,
          },
        }}
        InputLabelProps={{
          classes: {
            root: rootLabelClassNames,
            focused: classes.focusedLabel,
            error: classes.errorLabel,
          },
        }}
        InputProps={{
          classes: {
            root: this.props.multiline ? activeInput ? classes.textareaRootFocused : classes.textareaRoot : activeInput ? classes.inputRootFocused : classes.inputRoot,
            error: classes.inputError,
            input: this.props.multiline ? classes.textarea : classes.input,
            notchedOutline: classes.notchedOutline,
          },
          disableUnderline:true,
          ...InputProps,
        }}
      />
    );
  }
}

export default withStyles(styles)(HopperInput);
