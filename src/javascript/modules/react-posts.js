import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

var postJSON = require('../../posts.json');

var TablePost = [];

export default React.createClass({
	render() {
		for (var key in postJSON) {
			if (postJSON.hasOwnProperty(key)) {
				TablePost.push(
					<tr key={postJSON[key].id}>
						<td><Link activeClassName="active" to={"/posts/post/" + postJSON[key].id}>{postJSON[key].name}</Link></td>
						<td>{postJSON[key].date}</td>
					</tr>
				);
			}
		};
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Post Name</th>
							<th>Post Date/Updated</th>
						</tr>
					</thead>
					<tbody>
						{TablePost}
					</tbody>
				</table>
			</div>
		)
	}
})
