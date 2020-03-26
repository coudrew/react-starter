import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ViewPresentation from '../presentation/view';
import { PAGE_LOAD } from '../../../model/actions/app';

class View extends PureComponent {
	componentDidMount() {
		const {
			dispatch,
			match: { path }
		} = this.props;
		dispatch({
			type: PAGE_LOAD,
			page: path
		});
	}
	render() {
		console.log(this.props);
		const {
			match: { path }
		} = this.props;
		return <ViewPresentation {...this.props} />;
	}
}

const mapStateToProps = state => ({ ...state });
export default withRouter(connect(mapStateToProps)(View));
