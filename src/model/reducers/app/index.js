import { createReducer } from '../utils';
import { SET_LOADING, SET_LOADED } from '../../actions/app';

const INITIAL_STATE = {
	loading: []
};

const setIsLoading = (state, payload) => {
	const { loading } = state;
	const { setLoading } = payload;

	return {
		...state,
		loading: [...loading, setLoading]
	};
};

const setIsFinishedLoading = (state, payload) => {
	const { loading } = state;
	const { setFinishedLoading } = payload;

	return {
		...state,
		loading: loading.filter(loadingKey => loadingKey !== setFinishedLoading)
	};
};

const handlers = {
	[SET_LOADING]: setIsLoading,
	[SET_LOADED]: setIsFinishedLoading
};

export default createReducer(INITIAL_STATE, handlers);
