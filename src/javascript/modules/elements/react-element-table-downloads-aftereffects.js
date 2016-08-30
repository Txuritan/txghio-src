import React from 'react'

var DownloadsAfterEffectsJSON = require('../../../downloads-aftereffects.json');
var TableDownloadsAfterEffects = [];

export default React.createClass({
	render() {
		for (var key in DownloadsAfterEffectsJSON) {
			if (DownloadsAfterEffectsJSON.hasOwnProperty(key)) {
				TableDownloadsAfterEffects.push(
					<tr key={DownloadsAfterEffectsJSON[key].id + "af"}>
						<td>{DownloadsAfterEffectsJSON[key].name}</td>
						<td>{DownloadsAfterEffectsJSON[key].downloadURL}</td>
					</tr>
				);
			}
		}
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Download</th>
						</tr>
					</thead>
					<tbody>
						{TableDownloadsAfterEffects}
					</tbody>
				</table>
			</div>
		);
	}
});
