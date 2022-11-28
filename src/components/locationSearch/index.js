import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { setLocation } from '../../redux/actions/locationAction';
import axios from 'axios';
import generalBackendBaseUrl from '../../util/generalBackendBaseUrl';
// import magnifyingGlassImg from '../../assets/image/magnifying-glass.svg';
import style from './style.css';
import baseName from '../../util/baseName';

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
			locationSuggestionList: [],
			isSearchInputFocused: false
		}
		this.queryChangeTimeoutId = null;
	}

	setLocation = (lat, lon, name='') => {
		this.props.setLocation({ lat, lon, name });
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
			this.setState({ locationSuggestionList: searchData.results });
			console.log(searchData)
		} catch(error) {
			console.log(error)
		}
	}

	render() {
		const { 
			displaySearchQuery,
			locationSuggestionList
		} = this.state;

		// const locationSuggestionList = [
		// 	{
		// 		"name": "Dallas",
		// 		"lat": 32.7762719,
		// 		"lon": -96.7968559,
		// 		"country_code": "US",
		// 		"country_name": "United States",
		// 		"state_code": "TX",
		// 		"state_name": "Texas"
		// 	},
		// 	{
		// 		"name": "Dallas",
		// 		"lat": 33.9237141,
		// 		"lon": -84.8407732,
		// 		"country_code": "US",
		// 		"country_name": "United States",
		// 		"state_code": "GA",
		// 		"state_name": "Georgia"
		// 	},
		// 	{
		// 		"name": "Dallas",
		// 		"lat": 44.9189206,
		// 		"lon": -123.315869,
		// 		"country_code": "US",
		// 		"country_name": "United States",
		// 		"state_code": "OR",
		// 		"state_name": "Oregon"
		// 	},
		// 	{
		// 		"name": "Dalat",
		// 		"lat": 11.9402416,
		// 		"lon": 108.4375758,
		// 		"country_code": "VN",
		// 		"country_name": "Vietnam",
		// 		"state_code": "Lâm Đồng Province",
		// 		"state_name": "Lâm Đồng Province"
		// 	},
		// 	{
		// 		"name": "Dallas",
		// 		"lat": 35.3160401,
		// 		"lon": -81.1764865,
		// 		"country_code": "US",
		// 		"country_name": "United States",
		// 		"state_code": "NC",
		// 		"state_name": "North Carolina"
		// 	}
		// ]

		return (
			<div class={style.locationSearch}>
				<form onSubmit={this.handleManualFormSubmit} class={style.searchForm}>
					<input 
						type='text' 
						placeholder='City, State/Country'
						value={displaySearchQuery}
						onInput={this.handleQueryChange}
						onFocus={() => this.setState({ isSearchInputFocused: true}) }
						onBlur={() => this.setState({ isSearchInputFocused: false}) }
						class={style.searchInput}
					/>
					<button type='submit'>
						<img src={`/assets/image/magnifying-glass.svg`} alt="Search" />
					</button>
				</form>
				<div class={style.suggesstionList}>
					{locationSuggestionList.map((suggesstion, index) => {
						return (
							<div key={index}>
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
			</div>
		)
	}
}

export default LocationSearch;
