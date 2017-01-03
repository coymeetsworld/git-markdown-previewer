import React from 'react';
import ReactDOM from 'react-dom'
import HeaderBar from 'HeaderBar';
import MainSection from 'MainSection';
import FooterBar from 'FooterBar';

require('style!css!sass!applicationStyles');

ReactDOM.render(
	<div>
		<HeaderBar/>
		<MainSection/>
		<FooterBar/>
	</div>,
	document.getElementById('app')
);
