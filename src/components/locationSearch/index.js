import { h, Component } from 'preact';
import { connect } from 'react-redux';
import { setLocation } from '../../redux/actions/locationAction';
import axios from 'axios';
import generalBackendBaseUrl from '../../util/generalBackendBaseUrl';
import style from './style.css';
import imagePathFormatter from '../../util/imagePathFormatter';

const defaultLocationSuggestionList = [
	{
		"name": "Dallas",
		"lat": 32.7762719,
		"lon": -96.7968559,
		"country_code": "US",
		"country_name": "United States",
		"state_code": "TX",
		"state_name": "Texas"
	},			
	{
		"name": "Seattle",
		"lat": 47.6038321,
		"lon": -122.330062,
		"country_code": "US",
		"country_name": "United States",
		"state_code": "WA",
		"state_name": "Washington"
	},
	{
		"name": "London",
		"lat": 51.5073219,
		"lon": -0.1276474,
		"country_code": "GB",
		"country_name": "United Kingdom",
		"state_code": "England",
		"state_name": "England"
	},
	{
		"name": "Miami",
		"lat": 25.7741728,
		"lon": -80.19362,
		"country_code": "US",
		"country_name": "United States",
		"state_code": "FL",
		"state_name": "Florida"
	},
	{
		"name": "Los Angeles",
		"lat": 34.0536909,
		"lon": -118.242766,
		"country_code": "US",
		"country_name": "United States",
		"state_code": "CA",
		"state_name": "California"
	},
];

@connect(
	state => {
		const { location } = state;
		return { location };
	}, 
	dispatch => ({
		setLocation: data => dispatch(setLocation(data))
	})
)
class LocationSearch extends Component {
	constructor() {
		super();
		this.state = {
			activeSearchQuery: '', // the query that was searched by
			displaySearchQuery: '', // the query currently in the input
			locationSuggestionList: defaultLocationSuggestionList,
			showSearchSuggestions: false
		}
		this.queryChangeTimeoutId = null;
	}

	selectLocation = (location) => {











		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




		// NOTEEE
		// need to change this redux to store the city, state, country, etc


		// remove browser autocomplete from search input (it covers the suggestions)

		// make search bigger. also maybe make it expand to full screen width when the input is focused

		// implement search history instead of default suggestions (only default when no history)

		// find better font

		// add 2nd api key to general-backend. Have it cycle between the 2. Also if one fails due to rate limit, try the other

		// when page loads, use the selected location from redux if it exists


		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!










		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!









		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


















































		this.props.setLocation({ lat: location.lat, lon: location.lon, name: location.name });
		const newDisplaySearchQuery = `${location.name}, ${location.country_code === 'US' ? location.state_name : location.country_name }`;
		this.setState({ displaySearchQuery: newDisplaySearchQuery });
	}

	handleQueryChange = e => {
		const query = e.target.value;
		this.setState({ displaySearchQuery: query });
		if (this.queryChangeTimeoutId) {
			clearTimeout(this.queryChangeTimeoutId)
		}
		this.queryChangeTimeoutId = setTimeout(() => {			
			if (query.length === 0) return;
			this.setState(
				{ activeSearchQuery: query },
				() => this.handleSearch()
			)
		}, 800)
	}

	handleManualFormSubmit = e => {
		e.preventDefault();
		if (this.queryChangeTimeoutId) {
			clearTimeout(this.queryChangeTimeoutId)
		}
		const { displaySearchQuery } = this.state;
		if (displaySearchQuery.length === 0) return;
		this.setState(
			{ activeSearchQuery: displaySearchQuery },
			() => this.handleSearch()
		)
	}

	handleSearch = async () => {
		try {
			const { activeSearchQuery } = this.state;
			const searchRes = await axios.get(`${generalBackendBaseUrl}weather/searchCoordsByCityStateCountry?query=${activeSearchQuery}`);
			const searchData = searchRes.data;

			if (searchData.results.length === 1) {
				this.selectLocation(searchData.results[0]);
				const searchInput = document.getElementById('locationSearch-searchInput');
				searchInput.blur();
				this.setState({ showSearchSuggestions: false });
				return;
			} 
			if (searchData.results.length === 0) {
				this.setState({ locationSuggestionList: defaultLocationSuggestionList });
			}
			if (searchData.results.length > 1) {
				this.setState({ locationSuggestionList: searchData.results });
			}
			this.setState({ showSearchSuggestions: true });
		} catch(error) {
			console.log(error)
		}
	}



	render() {
		const { 
			displaySearchQuery,
			locationSuggestionList,
			showSearchSuggestions
		} = this.state;

		return (
			<div class={style.locationSearch}>
				<form onSubmit={this.handleManualFormSubmit} class={style.searchForm}>
					<input 
						id='locationSearch-searchInput'
						type='text' 
						placeholder='City, State/Country'
						value={displaySearchQuery}
						onInput={this.handleQueryChange}
						onFocus={() => this.setState({ showSearchSuggestions: true}) }
						onBlur={() => this.setState({ showSearchSuggestions: false}) }
						class={style.searchInput}
					/>
					<button type='submit'>
						<img src={imagePathFormatter('magnifying-glass.svg')} alt='Search' />
					</button>
				</form>
				{showSearchSuggestions ? (
					<div class={style.suggesstionList}>
						<hr />
						{locationSuggestionList.map((suggesstion, index) => {
							return (
								<div key={index} onClick={() => this.selectLocation(suggesstion)}>
									<p>
										{suggesstion.name}
										<span>
											, {suggesstion.country_code === 'US' ? suggesstion.state_name : suggesstion.country_name }
										</span>
									</p>
								</div>
							)
						})}
					</div>
				) : null}
				
			</div>
		)
	}
}

export default LocationSearch;
