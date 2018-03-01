class PlayerInput {

	constructor(txtInput, btnSubmit) {
		this.inputField = txtInput;

		btnSubmit.click($.proxy(this.onButtonClick, this));

		txtInput.keypress($.proxy(this.onInputSubmit, this));
	}

	set daemonGame(game) {
		this.gameRef = game;
	}

	onInputSubmit(event) {
		if (event.which == 13) {
			this.sendUserInput();
			return false;
		}
	}

	onButtonClick(event) {
		event.stopPropagation();

		this.sendUserInput();
	}

	sendUserInput() {
		if (this.gameRef) {
			this.gameRef.parseCommand(this.inputField.val());
		}
		
		this.inputField.val("");
	}
}