class DaemonConsole {

	constructor() {
	}

	static setOutput(element) {
		this.consoleElement = element;
	}

	static log(msg) {
		var updatedMsg = "[DaemonSmite] > " + msg;
		
		if(this.consoleElement) {
			this.consoleElement.append(updatedMsg + "\n");

		} else {
			console.log(updatedMsg);
		}
	}
};