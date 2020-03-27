import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ViewPresentation } from '../presentation';
import { PAGE_LOAD } from '../../../model/actions/app';
import { getIsLoadingItem } from '../../../model/selectors/app';

class View extends Component {
	constructor() {
		super();
		this.state = {
			loading: true
		};
	}

	// componentDidUpdate(props) {
	// 	const { pageIsLoading } = props;
	// 	if (!pageIsLoading) {
	// 		console.log('setting loaded');
	// 		this.setState({ loading: false });
	// 	}
	// }

	shouldComponentUpdate(nextProps) {
		const { pageIsLoading } = nextProps;
		return !pageIsLoading;
	}

	render() {
		const {
			children,
			match: { path },
			pageIsLoading
		} = this.props;
		const { loading } = this.state;
		console.log(`rendering ${path} is loading ${pageIsLoading}`);
		console.log(pageIsLoading && true);
		return !(pageIsLoading && true) ? (
			<h1>loading</h1>
		) : (
			<ViewPresentation {...this.props}>{children}</ViewPresentation>
		);
	}
}

const mapStateToProps = (state, props) => {
	const {
		match: { path }
	} = props;
	const getPageIsLoading = getIsLoadingItem(path);

	return {
		pageIsLoading: getPageIsLoading(state)
	};
};
export default withRouter(connect(mapStateToProps)(View));
