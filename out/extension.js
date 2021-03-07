"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const simple_component_1 = require("./constants/simple_component");
const redux_component_1 = require("./constants/redux_component");
const store_action_1 = require("./constants/store_action");
const store_reducer_1 = require("./constants/store_reducer");
function activate(context) {
    let simpleCommand = vscode.commands.registerCommand('simple-codegen.simple', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            editor.edit(editBuilder => {
                editBuilder.insert(new vscode.Position(0, 0), simple_component_1.default);
            });
        }
    });
    let reduxCommand = vscode.commands.registerCommand('simple-codegen.redux', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            editor.edit(editBuilder => {
                editBuilder.insert(new vscode.Position(0, 0), redux_component_1.default);
            });
        }
    });
    let actionCommand = vscode.commands.registerCommand('simple-codegen.action', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            editor.edit(editBuilder => {
                editBuilder.insert(new vscode.Position(0, 0), store_action_1.default);
            });
        }
    });
    let reducerCommand = vscode.commands.registerCommand('simple-codegen.reducer', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            editor.edit(editBuilder => {
                editBuilder.insert(new vscode.Position(0, 0), store_reducer_1.default);
            });
        }
    });
    context.subscriptions.push(simpleCommand);
    context.subscriptions.push(reduxCommand);
    context.subscriptions.push(actionCommand);
    context.subscriptions.push(reducerCommand);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map