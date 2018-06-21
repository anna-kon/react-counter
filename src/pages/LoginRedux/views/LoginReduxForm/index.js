import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import { styles } from './styles';

var LoginReduxForm = ({ classes, email, password, onSubmit, onChange, isEmailError, isPasswordError, showError }) => {
    return (
        <React.Fragment>
            <Grid
                container
                alignItems="center"
                justify="center">
                <form className={classes.container}>
                    <Grid item xs={12}  >
                        <TextField
                            id="email"
                            name="email"
                            label="Email"
                            className={classes.textField}
                            value={email}
                            onChange={onChange}
                            margin="normal"
                            error={isEmailError && showError}
                            helperText="Example: default@example.com"
                        />
                    </Grid>
                    <Grid item xs={12}  >
                        <TextField
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            className={classes.textField}
                            value={password}
                            onChange={onChange}
                            margin="normal"
                            error={isPasswordError && showError}
                            helperText="Password should contain at least 6 characters"
                        />
                    </Grid>
                    <Grid item xs={12}  >
                        <Grid
                            container
                            alignItems="center"
                            justify="center">
                            <Button type="submit" className={classes.submitButton} onClick={onSubmit}
                                variant="contained" color="primary" disabled={(isEmailError || isPasswordError) && showError}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Grid item xs={12}  >
                    <Grid
                        container
                        alignItems="center"
                        justify="center">
                        <Typography>Your Data: {email} {password}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

LoginReduxForm.propTypes = {
    classes: PropTypes.object.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    isPasswordError: PropTypes.bool,
    isEmailError: PropTypes.bool,
    showError: PropTypes.bool
};

export default withStyles(styles)(LoginReduxForm);