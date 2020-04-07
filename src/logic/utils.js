const asyncLogic = (func, params) => {
	return new Promise(func(params));
};

export { asyncLogic };
