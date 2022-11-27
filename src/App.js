import { h } from 'preact';
import { Router } from 'preact-router';
import Match from 'preact-router/match';
import { createHashHistory } from 'history';
import baseName from './util/baseName';

import Header from './components/header';
import Home from './routes/home';
import About from './routes/about';

const App = () => {
	return (
		<div id='app'>
			<Match>
				{() => {
					// If the page path is using hash routing
					// Then add a new history entry using standard page routing
					// This runs every time the router changes pages
					if (window?.location?.hash.startsWith(`#${baseName}`)) {
						const pagePath = window.location.hash.replace(`#`, '');
						window.history.pushState(null, null, pagePath)
					}
					return null;
				}}
			</Match>
			<Header />
			<Router history={createHashHistory()}>
				<About path={`${baseName}/about`} />
				<Home default />
			</Router>
		</div>
	)
}

export default App;
