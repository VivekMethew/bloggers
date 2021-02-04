import React from 'react';
import { Link } from 'react-router-dom';

function header() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-info pl-3 pr-3">
			<Link to="/" className="navbar-brand text-light">
				Blog App
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<Link to="/" className="nav-link text-light">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-light" to="/about">
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-light" to="/new-blogs">
							New Blog
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default header;
