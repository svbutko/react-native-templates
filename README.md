# react-native-templates
A set of files which provides live and file templates for the development of react-native applications, including:
* Redux templates
* TypeScript templates
* JavaScript templates

## Installation

1) Clone this repository
2) Copy the content of both `templates` and `fileTemplates`
3) Open the folder where your current templates are stored:

Windows: `<your home directory>\.<product name><version number>\config\`

Linux: `~/.<product name><version number>/config/`

OS X: `~/Library/Preferences/<product name><version number>/`

4) Paste the content from repository into the related folders/

## Content

### File templates

* **PureComponent File** - class which extends PureComponent and has a few common interfaces and constants
* **Redux State File** - state interface and the initial state constant
* **Redux Actions File** - class which holds two predefined static redux actions
* **Redux Reducer File** - reducer constant and several predefined cases with handler-functions
* **Redux Async Actions File** - class for async actions which holds a single static method
* **Redux Selectors File** - class with two static methods (mapStateToProps, mapDispatchToProps)
* **Redux Component File** - class which extends BaseReduxComponent and has a few common interfaces and constants

### Live templates

| Command  | Description |
| ------------- | ------------- |
| **actn**  | Inserts commonly used redux action |
| **hndlr** | Inserts commonly used handler-function for redux reducer  |
| **sactn** | Inserts commonly used redux async action  |
| **arwf**  | Inserts an arrow function  |
| **cntr**  | Inserts a class constructor with a state params definition  |
| **imgs**  | Inserts ImageStyle with the frequently used params  |
| **stls**  | Inserts styles constant with the frequently styles  |
| **txts**  | Inserts TextStyle with the frequently used params  |
| **views**  | Inserts ViewStyle with the frequently used params  |

## Additional helpers

In order to shorten frequently used parts of code and make it look cleaner you can use `additionalHelpers\codeHelper.ts` file. Pay attention to the imports and constants which are being used.

## Contributing

Feel free to contribute! Make pull requests to this repo, write stuff which you'd like to see and don't forget to star the repo if you like it :)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details