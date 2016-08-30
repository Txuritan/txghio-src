import React from 'react'

var DownloadsMinecraftModpacksJSON = require('../../../downloads-minecraft-modpacks.json');
var TableDownloadsMinecraftModpacks = [];

export default React.createClass({
	render() {
		for (var key in DownloadsMinecraftModpacksJSON) {
			if (DownloadsMinecraftModpacksJSON.hasOwnProperty(key)) {
				TableDownloadsMinecraftModpacks.push(
					<tr key={DownloadsMinecraftModpacksJSON[key].id + "mmp"}>
						<td>{DownloadsMinecraftModpacksJSON[key].minecraftVersion}</td>
						<td>{DownloadsMinecraftModpacksJSON[key].modpackName}</td>
						<td>{DownloadsMinecraftModpacksJSON[key].downloadURL}</td>
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
							<th>Modpack Name</th>
							<th>Download</th>
						</tr>
					</thead>
					<tbody>
						{TableDownloadsMinecraftModpacks}
					</tbody>
				</table>
			</div>
		);
	}
});
