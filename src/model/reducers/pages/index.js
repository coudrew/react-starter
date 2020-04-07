import { createReducer } from '../utils';
import { SET_PAGE_DATA } from '../../actions/pages';

const INITIAL_STATE = {
    home: null,
    two: null,
    three: null,
    four: null
};

const setPageData = (state, { key, data }) => ({ ...state, [key]: data });

const handlers = {
    [SET_PAGE_DATA]: setPageData
};

export default createReducer(INITIAL_STATE, handlers);
