import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

var storyJSON = require('../../stories.json');

var TableStory = [];

export default React.createClass({
	render() {
		for (var key in storyJSON) {
			if (storyJSON.hasOwnProperty(key)) {
				TableStory.push(
					<tr key={storyJSON[key].id}>
						<td><Link activeClassName="active" to={"/stories/" + storyJSON[key].undername}>{storyJSON[key].name}</Link></td>
						<td>{storyJSON[key].data}</td>
					</tr>
				);
			}
		}
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
						{TableStory}
					</tbody>
				</table>
			</div>
		)
	}
})
