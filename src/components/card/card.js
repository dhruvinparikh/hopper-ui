import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.module.scss';
import { reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Card = ({
  heading,
  placeholder,
  buttonText,
  name,
  // validate,
  value,
  type,
  object,
  onClick,
  onChange,
  backgroundColor
}) => {
  return (
    <div className={`${styles.card} ${styles[`${backgroundColor}-bg`]}`}>
      <div className={styles.cardContent}>
        <div className={styles.heading}>{heading}</div>
        <TextField
          name={name}
          label={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          margin='normal'
          variant='outlined'
        />
        <Button
          variant='contained'
          color='primary'
          className={styles.button}
          onClick={onClick}
        >
          {buttonText}
        </Button>
        <pre>{JSON.stringify(object, null, 4)}</pre>
      </div>
    </div>
  );
};

Card.displayName = 'Card';
Card.defaultProps = {
  size: 'small',
  backgroundColor: 'white'
};
Card.propTypes = {
  size: PropTypes.oneOf(['small', 'regular', 'large']).isRequired,
  heading: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  object: PropTypes.object,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  validate: PropTypes.bool,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string,
  backgroundColor: PropTypes.oneOf(['white', 'light'])
};

export default reduxForm({
  form: 'card'
})(Card);
