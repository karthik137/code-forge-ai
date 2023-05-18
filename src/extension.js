const vscode = require("vscode");
const { workspace } = require("vscode");
const openai = require("openai");
const { Configuration, OpenAIApi } = require("openai");

async function generateCodeFromComment(comment) {
  // TODO: Implement code generation using ChatGPT

  // Show a loading message while the code is being generated
  const loadingMessage = vscode.window.setStatusBarMessage(
    "Generating code...",
    vscode.StatusBarAlignment.Left
  );

  const prompt = `Given the following comment:\n\n"${comment}"\n\nPlease generate the code that corresponds to this comment.`;
  let configuration = workspace.getConfiguration("CodeGenie");
  let apiKey = configuration.get("apiKey");

  const newConfig = {
    ...configuration,
    baseOptions: {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    },
  };

  const openai = new OpenAIApi(newConfig);

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 2000,
    temperature: 0,
  });

  const generatedResponse = response.data.choices[0].text.trim();
  const responseWithNewLine = `\n${generatedResponse}`;

  // Once the code generation is complete, hide the loading message
  loadingMessage.dispose();

  // Show a notification to inform the user that the code generation is finished
  vscode.window.showInformationMessage("Code generation complete!");

  return responseWithNewLine;
}

function activate(context) {
  let disposable = vscode.commands.registerCommand(
    "extension.CodeGenie",
    async function () {
      const editor = vscode.window.activeTextEditor;
      const selection = editor.selection;
      const comment = editor.document.getText(selection);

      if (comment.trim().length > 0) {
        const code = await generateCodeFromComment(comment);
        editor.edit((editBuilder) => {
          editBuilder.insert(selection.end, "\n" + code);
        });
      } else {
        vscode.window.showErrorMessage("No comment selected.");
      }
    }
  );

  context.subscriptions.push(disposable);
}

module.exports = {
  activate,
};
