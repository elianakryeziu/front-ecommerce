import { createReducer } from 'reduxsauce';

import model from './model';
import registerHandler, {
    actions as registerActions,
    types as registerTypes,
} from './register/reducer';
import loginHandler, {
    actions as loginActions,
    types as loginTypes,
} from './login/reducer';

const types = {
    ...registerTypes,
    ...loginTypes,
};

const actions = {
    ...registerActions,
    ...loginActions,
};

export default createReducer(
    model, {
    ...registerHandler,
    ...loginHandler,
});

export { actions, types };