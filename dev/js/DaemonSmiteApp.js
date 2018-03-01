var gameConsole = $("#console");
var btnSubmit = $("#consoleSubmit");
var txtInput = $("#consoleInput");

DaemonConsole.setOutput(gameConsole);

DaemonConsole.log("Welcome!");
DaemonConsole.log("Do you want to play a game?");

var game = new DaemonSmiteGame();

var playerInput = new PlayerInput(txtInput, btnSubmit);
playerInput.daemonGame = game;

