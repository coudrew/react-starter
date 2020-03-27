export const getIsLoadingItem = key => state => {
	const {
		app: { loading }
	} = state;
	return key ? loading.has(key) : loading.size;
};

export const getIsLoading = state => {
	const {
		app: { loading }
	} = state;

	return loading && loading.size;
};
