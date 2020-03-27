import React, { PureComponent, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

class ViewPresentation extends PureComponent {
	render() {
		const { routes, children } = this.props;
		return <Fragment>{children}</Fragment>;
	}
}

export default ViewPresentation;
