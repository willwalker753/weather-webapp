import { h } from 'preact';
import { Link } from 'preact-router/match';
import baseName from '../../util/baseName';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>Preact Boilerplate</h1>
		<nav>
			<Link activeClassName={style.active} href={`${baseName}/`}>Home</Link>
			<Link activeClassName={style.active} href={`${baseName}/about`}>About</Link>
		</nav>
	</header>
);

export default Header;
