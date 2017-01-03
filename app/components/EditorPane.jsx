import React from 'react';

class EditorPane extends React.Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

 	handleChange(e) {
    this.props.onUserInput(e.target.value);
	}
	
	render () {
		let value = this.props.value;
		return (
			<div className="editorPane">
				<textarea value={value} onChange={this.handleChange}></textarea>
			</div>
		);
	}
}

export default EditorPane;