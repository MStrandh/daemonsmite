class DaemonSmiteGame {
	constructor() {
	}

	parseCommand(userInput) {
		var lowerCaseInput = userInput.toLowerCase();

		if(lowerCaseInput === "yes") {
			DaemonConsole.log("Let's start!");

		} else if(lowerCaseInput === "no") {
			DaemonConsole.log("Awwww!")

		} else {
			DaemonConsole.log("I do not know the command \"" + userInput + "\"");			
		}
	}
}