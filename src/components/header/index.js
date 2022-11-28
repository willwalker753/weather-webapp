import { h } from 'preact';
import { Link } from 'preact-router/match';
import LocationSearch from '../locationSearch';
import baseName from '../../util/baseName';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<LocationSearch />
	</header>
);

export default Header;
