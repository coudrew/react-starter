import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ViewPresentation } from '../presentation';
import { PAGE_LOAD } from '../../../model/actions/app';
import { getIsLoadingItem } from '../../../model/selectors/app';

class View extends PureComponent {
	render() {
		const { pageIsLoading, children } = this.props;
		console.log('rendering');
		return pageIsLoading ? (
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
