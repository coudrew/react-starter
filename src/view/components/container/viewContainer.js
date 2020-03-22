import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ViewPresentation } from '../presentation';

class View extends PureComponent {
	render() {
		return <ViewPresentation {...this.props} />;
	}
}

const mapStateToProps = ({ app }) => ({ ...app });
export default withRouter(connect(mapStateToProps)(View));
