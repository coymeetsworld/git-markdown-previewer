import React from 'react';

class HeaderBar extends React.Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className="headerBar">
				<h1 className="headerTitle">Markdown Previewer</h1>	
			</div>
		);
	}
}

export default HeaderBar;