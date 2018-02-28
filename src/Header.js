import React from "react";
import { Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

const Header = () => (
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Tiramisu Watch</h1>
		<nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/containers">Containers</Link></li>
			</ul>
		</nav>
	</header>
);

export default Header;