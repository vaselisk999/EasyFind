import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar() {
	const navRef = useRef();
	// toggles class responsive_nav
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3>
				<img alt="logo" className="nav-logo" src={require('./../../assets/images/logo.png')} />
			</h3>
			<nav ref={navRef}>
				<Link className="nav-link" to="/">Home</Link>
				<Link className="nav-link" to="about">About</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
