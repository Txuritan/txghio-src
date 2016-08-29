import React from 'react'
import { render } from 'react-dom'
import ReactMarkdown from 'react-markdown'

var storyJSON = require('../../stories.json');

export default React.createClass({
	render() {
		var id = this.props.params.id;
		var postTitle = storyJSON[id].name;
		var postContent = storyJSON[id].data;
		return (
			<div>
				<ReactMarkdown source={postContent} />
			</div>
		)
	}
})
