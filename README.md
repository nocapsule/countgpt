# Count GPT

The GPT Counter Firefox extension counts requests made to `https://chat.openai.com/backend-api/conversation` with the "gpt-4" model and displays the counter as a badge on the extension icon.

## Features

- Counts requests made to the specified API endpoint with the "gpt-4" model
- Displays the counter as a badge on the extension icon
- Provides a popup with a "Reset Counter" button

## Installation

To install this extension locally:

1. Clone this repository to your local machine:

```
git clone https://github.com/yourusername/gpt-counter-firefox-extension.git
```

2. Open Firefox and go to `about:debugging#/runtime/this-firefox`
3. Click on "Load Temporary Add-on..."
4. Browse to the cloned repository and select the `manifest.json` file

The extension should now be installed and active in Firefox.

## Usage

Once the extension is installed, it will automatically start counting requests made to the specified API endpoint with the "gpt-4" model. The counter will be displayed as a badge on the extension icon.

To reset the counter:

1. Click on the extension icon in the toolbar
2. Click the "Reset Counter" button in the popup

The counter will be reset to 0.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue with any suggestions, improvements, or bug reports.

## License

This project is licensed under the [MIT License](LICENSE).
