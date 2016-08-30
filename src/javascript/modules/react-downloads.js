import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'

import RETDAF from './elements/react-element-table-downloads-aftereffects'
import RETDMMP from './elements/react-element-table-downloads-minecraft-modpacks'
import RETDMM from './elements/react-element-table-downloads-minecraft-mods'
import RETDSM from './elements/react-element-table-downloads-skyrim-mods'

export default React.createClass({
	render() {
		return (
			<div>
				<h3>After Effects Downloads</h3>
				<RETDAF></RETDAF>
				<br></br>
				<h3>Minecraft Modpack Downloads</h3>
				<RETDMMP></RETDMMP>
				<br></br>
				<h3>Minecraft Mod Downloads</h3>
				<RETDMM></RETDMM>
				<br></br>
				<h3>Skyrim Mod Downloads</h3>
				<RETDSM></RETDSM>
			</div>
		)
	}
})
