export const styles = () => ({
  helperText: {
    '&$helperTextError': {
      color: 'rgba(176, 0, 32, 1)',
      fontFamily: 'Roboto-Regular',
      fontSize: '11px',
    },
  },
  helperTextError: {},
  inputRoot: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    height: '54.82px',
    borderRadius:'20px',
    border:'none',
  },
  inputRootFocused: {
    backgroundColor: 'rgba(244, 244, 244, 1)',
    height: '54.82px',
    borderRadius:'20px',
    border:'none',
  },
  textareaRoot:{
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius:'20px',
  },
  textareaRootFocused:{
    backgroundColor: 'rgba(244, 244, 244, 1)',
    borderRadius:'20px',
  },
  inputUnderline: {
    '&:before': { border: 'none' },
    '&:after': {  border:'none' },
    '&:hover': { borderBottom: 'none' },
  },
  inputErrorUnderline: {
    '&$inputError': {
      '&:before': { border: 'none' },
      '&:after': {  },
      '&:hover': { border: 'none' },
    },
  },
  inputError: {},
  rootLabel: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '15px',
    fontFamily: 'Roboto-Regular',
    '&$focusedLabel': {
      color: 'rgba(215, 95, 160, 1)',
      fontFamily: 'Roboto-Regular',
      transform: 'translate(10px,12px) scale(0.73)',
    },
  },
  rootErrorLabel: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: '15px',
    fontFamily: 'Roboto-Regular',
    '&$errorLabel': {
      color: 'rgba(176, 0, 32, 1)',
      fontFamily: 'Roboto-Regular',
      transform: 'translate(10px,12px) scale(0.73)',
    },
  },
  input: {
    textAlign:'center',
    color:'rgba(0, 0, 0, 1)',
    fontFamily:'Roboto-Regular',
    fontSize:14,
    '&::placeholder': {
      color:'rgba(0, 0, 0, 0.3)',
      fontSize: '14px',
      fontFamily: 'Roboto-Italic',
    },
  },
  textarea: {
    textAlign:'center',
    color:'rgba(0, 0, 0, 1)',
    fontFamily:'Roboto-Italic',
    fontSize:14,
    '&::placeholder': {
      color:'rgba(0, 0, 0, 0.3)',
      fontSize: '14px',
      fontFamily: 'Roboto-Italic',
      textAlign:'left'
    },
  },
  focusedLabel: {},
  errorLabel: {},
  notchedOutline: {
    border:'none',
  },
});