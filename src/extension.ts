import * as vscode from 'vscode';
import simple from "./constants/simple_component"
import redux from "./constants/redux_component"
import action from "./constants/store_action"
import reducer from "./constants/store_reducer"


export function activate(context: vscode.ExtensionContext) {


	let simpleCommand = vscode.commands.registerCommand('simple-codegen.simple', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			editor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0,0), simple)
			});
		}
	});


	let reduxCommand = vscode.commands.registerCommand('simple-codegen.redux', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			editor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0,0), redux)
			});
		}
	});

	let actionCommand = vscode.commands.registerCommand('simple-codegen.action', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			editor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0,0), action)
			});
		}
	});
	let reducerCommand = vscode.commands.registerCommand('simple-codegen.reducer', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			editor.edit(editBuilder => {
				editBuilder.insert(new vscode.Position(0,0), reducer)
			});
		}
	});


	context.subscriptions.push(simpleCommand);
	context.subscriptions.push(reduxCommand);
	context.subscriptions.push(actionCommand);
	context.subscriptions.push(reducerCommand);

}

// this method is called when your extension is deactivated
export function deactivate() {}
