import React, { Component, PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import configureStore, { history } from './model/reducers';
import { View } from './view/components';

const store = configureStore();
const routeConfigs = [
	{
		path: '/',
		component: () => (
			<View>
				<h1>hello</h1>
				<Link to={'/two'}>two</Link>
				<Link to={'/three'}>three</Link>
			</View>
		)
	},
	{
		path: '/two',
		component: () => (
			<View>
				<h1>two</h1>
				<Link to={'/'}>home</Link>
			</View>
		)
	},
	{
		path: '/three',
		component: () => (
			<View>
				<h1>three</h1>
				<Link to={'/'}>home</Link>
			</View>
		)
	}
];

class Shell extends PureComponent {
	render() {
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Switch>
						<ShellRouting routeConfig={routeConfigs} />
					</Switch>
				</ConnectedRouter>
			</Provider>
		);
	}
}

class ShellSwitch extends PureComponent {
	constructor(props) {
		super();
		const { routeConfig } = props;
		const routes = () => (
			<Fragment>
				{routeConfig.map(({ path, component: WrappedComponent }) => (
					<Route
						path={path}
						exact
						key={path}
						render={routeProps => (
							<WrappedComponent {...routeProps} />
						)}
					/>
				))}
			</Fragment>
		);
		this.state = {
			routes
		};
	}

	render() {
		const { routes: Routes } = this.state;
		return <Routes />;
	}
}

const ShellRouting = withRouter(connect(state => ({}))(ShellSwitch));
ReactDOM.render(<Shell />, document.getElementById('react-root'));
