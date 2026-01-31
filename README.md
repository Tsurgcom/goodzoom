# GoodZoom - Auto Close Post-Attendee

<p align="center">
  <img src="icon128.svg" alt="GoodZoom Logo" width="128" height="128">
</p>

<p align="center">
  <a href="https://chrome.google.com/webstore/detail/your-extension-id">
    <img src="https://img.shields.io/chrome-web-store/v/your-extension-id?color=blue&style=flat-square" alt="Chrome Web Store">
  </a>
  <a href="https://addons.mozilla.org/firefox/your-addon-id">
    <img src="https://img.shields.io/amo/v/your-addon-id?color=orange&style=flat-square" alt="Firefox Add-ons">
  </a>
  <a href="https://github.com/tsurgcom/goodzoom/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/tsurgcom/goodzoom?color=orange&style=flat-square" alt="License">
  </a>
</p>

Automatically closes Zoom post-attendee pages after leaving a meeting, helping you stay productive and clutter-free.

## Features

- Automatically closes Zoom post-attendee and post-meeting pages
- Works on both Chrome and Firefox
- Lightweight and fast
- Privacy-focused (no data collection)
- Open source

## Installation

### Chrome

1. Open Chrome and navigate to [chrome://extensions/](chrome://extensions/)
2. Enable **Developer mode** in the top right corner
3. Click **Load unpacked**
4. Select the `goodzoom` folder
5. The extension is now active

### Firefox

1. Open Firefox and navigate to [about:debugging](about:debugging)
2. Click **This Firefox** in the left sidebar
3. Click **Load Temporary Add-on**
4. Select the `manifest.json` file in the `goodzoom` folder
5. The extension is now active

## Privacy

This extension does not collect, store, or transmit any personal data. It only interacts with Zoom's post-meeting URLs to automatically close them.

## Permissions

- `tabs`: Required to close tabs from the background script (browser security prevents `window.close()` from closing tabs not opened by the script)
- `host_permissions`: `*://*.zoom.us/*` - Only accesses Zoom URLs

## Development

```bash
# Clone the repository
git clone https://github.com/goodzoom/extension.git
cd goodzoom

# Make changes to any file
# Reload the extension in your browser to test
```

## Building for Release

### Chrome Web Store

1. Zip the contents of the `goodzoom` folder
2. Go to [Chrome Developer Dashboard](https://chrome.google.com/webstore/devconsole)
3. Upload and publish

### Firefox Add-ons

1. Zip the contents of the `goodzoom` folder
2. Go to [Firefox Add-ons Developer Hub](https://addons.mozilla.org/developers/)
3. Submit your extension

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
