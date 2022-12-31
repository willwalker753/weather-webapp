import { h } from 'preact';
import { Router } from 'preact-router';
import { Provider } from 'react-redux';
import store from './redux/store';
import Match from 'preact-router/match';
import { createHashHistory } from 'history';
import baseName from './util/baseName';

import Header from './components/header';
import Home from './routes/home';


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
			<Provider store={store}>
				<Header />
				{/* 
					IMPORTANT

					http://personal:8080/#/weather-webapp/some

					Notice the hash in the url. It is used because github pages only hosts index.html
					Normally 404.html would redirect

					Havent figured all of it out yet.
					createHashHistory is probably required
					https://github.com/remix-run/history/blob/main/docs/api-reference.md#createhashhistory
				*/}
				<Router 
					history={createHashHistory()} 
					onChange={e => console.log(e)}
				>
					<Home path="/weather-webapp/some" />
					{/* <Home default /> */}
				</Router>
			</Provider>
		</div>
	)
}

export default App;
