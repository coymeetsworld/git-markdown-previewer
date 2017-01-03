import React from 'react';
import marked from 'marked';

class PreviewPane extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			previewData: props.value
		};
	}

	createMarkup(data) {
		return {__html: marked(data)};
	}

	render () {
		console.log("Render called");
		return (
			<div className="previewPane">
				<div dangerouslySetInnerHTML={this.createMarkup(this.props.value)}></div>
			</div>
		);
	}
}


export default PreviewPane;