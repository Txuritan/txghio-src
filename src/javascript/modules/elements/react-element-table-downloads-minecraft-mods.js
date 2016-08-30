import React from 'react'

var DownloadsMinecraftModsJSON = require('../../../downloads-minecraft-mods.json');
var TableDownloadsMinecraftMods = [];

export default React.createClass({
	render() {
		for (var key in DownloadsMinecraftModsJSON) {
			if (DownloadsMinecraftModsJSON.hasOwnProperty(key)) {
				TableDownloadsMinecraftMods.push(
					<tr key={DownloadsMinecraftModsJSON[key].id + "mm"}>
						<td>{DownloadsMinecraftModsJSON[key].minecraftVersion}</td>
						<td>{DownloadsMinecraftModsJSON[key].modName}</td>
						<td>{DownloadsMinecraftModsJSON[key].downloadURL}</td>
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
						{TableDownloadsMinecraftMods}
					</tbody>
				</table>
			</div>
		);
	}
});
