import React from 'react';
import EditorPane from 'EditorPane';
import PreviewPane from 'PreviewPane';

class MainSection extends React.Component {

	constructor(props) {
		super(props);
	  this.handleUserInput = this.handleUserInput.bind(this);

	  let defaultInputData = `
Heading
		
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*
`;

		this.state = { inputData: defaultInputData };
	}
	
	handleUserInput(inputData) {
		this.setState({inputData});
	}

	render () {
		return (
			<div className="container">
				<EditorPane value={this.state.inputData} onUserInput={this.handleUserInput}/>
				<PreviewPane value={this.state.inputData}/>
			</div>
		);
	}
}

export default MainSection;