import React from 'react'
import { Link } from 'react-router'

import NavLink from './elements/navlink'

export default React.createClass({
	render() {
		return (
			<div className="wrapper">
				<nav className="nav">
					<div className="nav-top">
						<ul className="nav-top-left">
							<li className="menu">
								<div className="container">
									<div className="bar1"></div>
									<div className="bar2"></div>
									<div className="bar3"></div>
								</div>
							</li>
							<li className="title"><a>Txuritan</a></li>
						</ul>
					</div>
					<div className="nav-bottom">
						<div className="content">
							<ul>
								<li></li>
							</ul>
						</div>
					</div>
				</nav>
				<nav className="sidebar">
					<ul>
						<NavLink to="/">Home</NavLink>
						<NavLink to="/downloads/">Downloads</NavLink>
						<NavLink to="/posts/">Posts</NavLink>
						<NavLink to="/stories/">Stories</NavLink>
					</ul>
				</nav>
				<div className="content-wrapper">
					<div className="content">
						<div className="body">
							{this.props.children}
						</div>
					</div>
					<div className="footer">
						<div className="footer-links">
							<ul>
								<li>© 2016 Ian Cronkright</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
})
