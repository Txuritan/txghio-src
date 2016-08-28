import React from 'react'
import { render } from 'react-dom'
import ReactMarkdown from 'react-markdown'

var postJSON = require('../../posts.json');

export default React.createClass({
	render() {
		var id = this.props.params.id;
		var postTitle = postJSON[id].name;
		var postContent = postJSON[id].data;
		return (
			<div>
				<ReactMarkdown source={postContent} />
			</div>
		)
	}
})
