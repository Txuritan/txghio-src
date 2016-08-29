import React from 'react'
import { render } from 'react-dom'
import { Link } from 'react-router'
import ReactMarkdown from 'react-markdown'

var storyJSON = require('../../stories.json');

export default React.createClass({
	render() {
		const id = this.props.params.id;
		const chapter = this.props.params.chapter;
		const storyChapter = storyJSON[id][chapter];
		const nextChapter = (parseInt(chapter, 10) + 1).toString();
		const chNumLength = nextChapter.length;
		let zeros;
		switch(chNumLength.toString()) {
			case "1":
				zeros = "000";
				break;
			case "2":
				zeros = "00";
				break;
			case "3":
				zeros = "0";
				break;
			case "4":
				zeros = "";
				break;
		}
		const nextChapterString = zeros + nextChapter;
		return (
			<div>
				<ReactMarkdown source={storyChapter} />
				<br/>
				<Link className="button" to={"/stories/" + id + "/" + nextChapterString}>Next Chapter</Link>
			</div>
		)
	}
})
