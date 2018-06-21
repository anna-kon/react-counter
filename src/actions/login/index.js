import { createAction } from 'redux-actions';

const loginActionCreators = {
    setEmail: createAction('SET_EMAIL'),
    setPassword: createAction('SET_PASSWORD'),
    setFirstSubmit: createAction('SET_FIRST_SUBMIT'),
    exit: createAction('EXIT'),
    setLoginSuccess: createAction('LOGIN_SUCCESS'),
};

export default loginActionCreators;
