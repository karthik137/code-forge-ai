# CodeForgeAI - Visual Studio Code Extension for Code Generation

CodeForgeAI is an advanced Visual Studio Code extension that empowers you to effortlessly generate code snippets by providing comments. With the help of artificial intelligence, powered by OpenAI's GPT-3.5 language model, CodeForgeAI enhances your coding productivity and streamlines the development process.

## Features

- Seamless code generation: Simply annotate your code files with comments specifying the code you want to generate, and CodeForgeAI will automatically produce the desired code snippets for you.

- AI-driven code completion: CodeForgeAI employs cutting-edge AI technology to provide intelligent code completion suggestions, aiding you in writing code more effectively.

- Customizable code templates: Tailor CodeForgeAI to your project's specific needs by creating custom code templates that align with your preferred coding style and conventions.

- Multi-line and single-line comment support: CodeForgeAI accommodates both single-line and multi-line comments, allowing you to generate code from various comment formats.

- API key configuration: Configure your OpenAI API key through Visual Studio Code's settings, ensuring seamless integration with the CodeForgeAI extension.


## Building and Installing Locally (For Developers)

1. Clone the CodeForgeAI repository from GitHub:

    ```shell
      git clone https://github.com/karthik137/code-forge-ai.git
    ```

2. Install the project dependencies by running the following command in the terminal:

    ```shell

    npm install

    ```

3. Build the extension by running the following command in the terminal:

    ```shell

    vsce package

    ```

4. This will generate a .vsix file in the root of the project.

5. To install the extension locally, open Visual Studio Code and go to Extensions view (Ctrl+Shift+X).

6. Click on the "..." (More Options) button and choose "Install from VSIX...".

7. Select the .vsix file generated in the previous step.

8. Visual Studio Code will install the extension and you can start using CodeForgeAI.


## Configuring the API Key

1. Open the Visual Studio Code settings by going to File > Preferences > Settings (or by using the keyboard shortcut Ctrl+,).

2. Search for "CodeForgeAI" to find the extension-specific settings.

3. Enter your OpenAI API key in the "CodeForgeAI: Api Key" setting. This will allow the extension to connect to the OpenAI service for code generation.

4. Save the settings file.

## Getting Started


1. Install the CodeForgeAI extension from the Visual Studio Code Marketplace.

2. Configure your OpenAI API key in Visual Studio Code's settings to enable seamless code generation.

3. Open a code file in Visual Studio Code.

4. Add comments in the code file to specify the desired code snippets you want to generate. Select the comments containing the code description that you want to generate. You can select either single-line or multi-line comments.

5. To trigger the code generation, you have two options:
    - Option 1: Use the keyboard shortcut Ctrl+Shift+P to open the command palette, then type "CodeForgeAI" and press Enter.

    - Option 2: Right-click in the code editor, select "CodeForgeAI" from the context menu.

6. CodeForgeAI will process the comments using AI-powered models and generate the corresponding code snippets.

7. The generated code will be inserted at the appropriate locations in your code file, saving you time and effort.

## Example

To generate a simple JavaScript function that calculates the sum of two numbers, add a comment like this:

  ```javascript

  // Generate a function to calculate the sum of two numbers

  ```

Trigger the code generation using one of the methods mentioned above, and CodeForgeAI will generate the following code snippet:

Use ctrl+shift+p and search CodeForgeAI and enter. Make sure you have selected the commented text before triggering the CodeForgeCommand  and CodeForgeAI will generate the following code snippet:

```javascript
function calculateSum(num1, num2) {
  return num1 + num2;
}


```

## Feedback and Contributions

We welcome your feedback and contributions to make CodeForgeAI even better. If you encounter any issues or have suggestions for new features, please submit them in the project's issue tracker on GitHub.

Let's elevate your coding experience with the power of AI and unleash your productivity with CodeForgeAI!

Feel free to customize and expand upon this usage description based on your specific features, guidelines, and project details.

## License

[GPL-3.0](https://choosealicense.com/licenses/gpl-3.0/)