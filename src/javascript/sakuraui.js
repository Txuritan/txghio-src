import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import Downlaods from './modules/react-downloads.js'

import App from './modules/react-index.js'
import Home from './modules/react-home.js'
import Posts from './modules/react-posts.js'
import Post from './modules/react-posts-post.js'

import Stories from './modules/react-stories.js'
import Story from './modules/react-stories-story.js'
import Chapter from './modules/react-stories-story-chapter.js'

render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />

			<Route path="downloads" component={Downlaods}/>

			<Route path="posts" component={Posts}/>
			<Route path="posts/post/:id" component={Post}/>

			<Route path="stories" component={Stories}/>
			<Route path="stories/:id" component={Story}/>
			<Route path="stories/:id/:chapter" component={Chapter}/>
		</Route>
	</Router>
), document.getElementById('app'))


// All The Javascript For Sakura UI
if (window.FastClick) {
	console.log("FastClick Is A Thing")
	if ('addEventListener' in document) {
		document.addEventListener('DOMContentLoaded', () => {
			FastClick.attach(document.body);
		}, false);
	}
}

document.querySelector(".menu").addEventListener("click", () => {
	document.querySelector(".wrapper").classList.toggle('active-nav-sidebar');
	document.querySelector(".container").classList.toggle('change');
});

const tabs = document.querySelectorAll(".tab-menu .tab a");
const tab = document.querySelectorAll(".tabs .tab");

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', event => {
		event.preventDefault();
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove("active");
		}
		for (var i = 0; i < tab.length; i++) {
			tab[i].classList.remove("active");
		}
		event.target.classList.add("active");
		document.querySelector(event.target.getAttribute("href")).classList.add("active");
	});
}
// Will Be Used On A Later Date
/*
document.querySelector('#themeDark').addEventListener('change', function () {
	if (themeDark.checked) {
		document.getElementById("darkTheme").href = "sakura.theme.dark.css";
	} else {
		document.getElementById("darkTheme").href = "";
	}
});
*/
