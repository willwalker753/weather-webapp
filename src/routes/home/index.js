import { h, Component } from 'preact';
import style from '/routes/home/style.css';

class Home extends Component {
	constructor() {
		super();
		this.state = {
			
		}
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
				<button>Test</button>
			</div>
		)
	}

};

export default Home;
