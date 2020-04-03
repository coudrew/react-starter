import { createReducer } from '../utils';
import { SET_LOADING, SET_LOADED } from '../../actions/app';

const INITIAL_STATE = {
	loading: {
		set: new Set(['init']),
		queue: ['init']
	}
};

const setIsLoading = (state, payload) => {
	const {
		loading: { set }
	} = state;
	const { setLoading } = payload;
	if (set.has('init')) {
		set.delete('init');
	}
	set.add(setLoading);

	return {
		...state,
		loading: {
			set,
			queue: Array.from(set)
		}
	};
};

const setIsFinishedLoading = (state, payload) => {
	const {
		loading: { set }
	} = state;
	const { setFinishedLoading } = payload;
	if (set.has('init')) {
		set.delete('init');
	}
	if (set.has(setFinishedLoading)) {
		set.delete(setFinishedLoading);
	}

	return {
		...state,
		loading: {
			set,
			queue: Array.from(set)
		}
	};
};

const handlers = {
	[SET_LOADING]: setIsLoading,
	[SET_LOADED]: setIsFinishedLoading
};

export default createReducer(INITIAL_STATE, handlers);
