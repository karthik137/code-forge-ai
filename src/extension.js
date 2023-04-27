const vscode = require('vscode');
const openai = require('openai');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: "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",
});

async function generateCodeFromComment(comment) {
    // TODO: Implement code generation using ChatGPT

    const prompt = `Given the following comment:\n\n"${comment}"\n\nPlease generate the code that corresponds to this comment.`;
    const openai = new OpenAIApi(configuration);


    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 2000,
        temperature: 0,
      });

    //console.log("Printing response ",response.data.choices[0].text.trim());
    return response.data.choices[0].text.trim();
  
  }


// vscode.commands.registerCommand('extension.generateCodeFromComment', async function () {
//   const comment = await vscode.window.showInputBox({ prompt: 'Enter a comment to generate code' });
//   const generatedCode = await generateCodeFromComment(comment);

//   const editor = vscode.window.activeTextEditor;
//   editor.edit((editBuilder) => {
//     editBuilder.insert(editor.selection.active, generatedCode);
//   });
// });

function activate(context) {
  let disposable = vscode.commands.registerCommand('extension.generateCodeFromComment', async function () {
    const comment = await vscode.window.showInputBox({ prompt: 'Enter a comment to generate code' });
    const generatedCode = await generateCodeFromComment(comment);
    const editor = vscode.window.activeTextEditor;
    editor.edit((editBuilder) => {
      editBuilder.insert(editor.selection.active, generatedCode);
    });
  });

  context.subscriptions.push(disposable);
}



module.exports = {
  activate,
};

