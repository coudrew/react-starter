import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';

class View extends PureComponent {
	render() {
		const { routes } = this.props;
		return (
			<Switch>
				{routes.map(({ path, component: Component }) => (
					<Route
						path={path}
						render={routeProps => <Component {...routeProps} />}
					/>
				))}
			</Switch>
		);
	}
}

export default View;
