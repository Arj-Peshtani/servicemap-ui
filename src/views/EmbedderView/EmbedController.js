import React, { useState, useEffect } from 'react';
import { Typography, Paper, withStyles, InputBase, Divider, ButtonBase, Button } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import SMRadio from '../../components/SMRadio';
import styles from './styles';


const customStyles = () => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
});

const CustomInput = withStyles(customStyles)(({ buttonClick, buttonText, classes, initialValue, onChange, preText, }) => {
  const [value, setValue] = useState(initialValue);
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const inputOnChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e, e.target.value);
    }
  };

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase className={classes.input} value={value} onChange={inputOnChange} />
      {
        preText && (
          <pre className={classes.iconButton} aria-label="Search">
            {preText}
          </pre>
        )
      }
      {
        buttonClick && buttonText && (
          <>
            <Divider className={classes.divider} />
            <Button
              aria-label="Directions"
              color="primary"
              className={classes.iconButton}
              onClick={(e) => { buttonClick(e, value); }}
              variant="contained"
            >
              {buttonText}
            </Button>
          </>
        )
      }
    </Paper>
  );
});

const EmbedController = ({
  classes, titleID, description, inputButtonOnClick, inputButtonText, inputOnChange, inputPreText, inputValue, radioControls, radioOnChange, radioValue,
}) => {
  const renderRadio = () => {
    if (radioControls && radioOnChange) {
      return (
        <SMRadio initialValue={radioValue} controls={radioControls} onChange={radioOnChange} />
      );
    }
    return null;
  };

  const renderInput = () => {
    if (
      (!inputValue && inputValue !== '')
      || (!inputOnChange && (!inputButtonOnClick || !inputButtonText))

    ) {
      return null;
    }

    return (
      <div>
        <CustomInput
          initialValue={inputValue}
          buttonClick={inputButtonOnClick}
          preText={inputPreText}
          onChange={inputOnChange}
          buttonText={inputButtonText}
        />

      </div>
    );
  };

  return (
    <Paper className={classes.formContainerPaper}>
      {
        titleID
        && (
          <Typography align="left" variant="h5"><FormattedMessage id={titleID} /></Typography>
        )
      }
      {
        description
        && (
          <Typography align="left">{description}</Typography>
        )
      }
      {
        renderRadio()
      }
      {
        renderInput()
      }
    </Paper>
  );
};

export default withStyles(styles)(EmbedController);
