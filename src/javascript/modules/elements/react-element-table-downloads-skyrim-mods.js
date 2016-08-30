import React from 'react'

var DownloadsSkyrimModsJSON = require('../../../downloads-skyrim-mods.json');
var TableDownloadsSkyrimMods = [];

export default React.createClass({
	render() {
		for (var key in DownloadsSkyrimModsJSON) {
			if (DownloadsSkyrimModsJSON.hasOwnProperty(key)) {
				TableDownloadsSkyrimMods.push(
					<tr key={DownloadsSkyrimModsJSON[key].id + "sm"}>
						<td>{DownloadsSkyrimModsJSON[key].skse}</td>
						<td>{DownloadsSkyrimModsJSON[key].modName}</td>
						<td>{DownloadsSkyrimModsJSON[key].downloadURL}</td>
					</tr>
				);
			}
		}
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>Minecraft Version</th>
							<th>Name</th>
							<th>Download</th>
						</tr>
					</thead>
					<tbody>
						{TableDownloadsSkyrimMods}
					</tbody>
				</table>
			</div>
		);
	}
});
