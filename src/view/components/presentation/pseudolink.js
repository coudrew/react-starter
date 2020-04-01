import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { NAVIGATE_TO } from '../../../model/actions/app';

class PseudoLink extends PureComponent {
	navigate = e => {
		const { dispatch, path } = this.props;
		e.preventDefault();
		dispatch({
			type: NAVIGATE_TO,
			payload: { path }
		});
	};

	render() {
		const { children } = this.props;
		return (
			<div className="pseudo-link" onClick={this.navigate}>
				<a href="">{children}</a>
			</div>
		);
	}
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({ dispatch });

export default connect(mapStateToProps, mapDispatchToProps)(PseudoLink);
