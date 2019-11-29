_This was created during my time as a student at [Code Chrysalis](https://www.codechrysalis.io/)._

_This was the Polyglottal Project, where I had to learn a new language and build a project within 5 days_

_Through this project I learnt Go, Browser Extensions & Google Cloud Functions_

_Therefore, please excuse the messy code, but I hope to continue working on this as I think its a useful product._

![alt text](./icons/logo-200x200.png 'Go Examine Logo')

# go_examine_browser
The Browser Extension Frontend for the go_examine API for highlighting problematic phrases in news articles to train users to spot fake news.

This extension communicates with the public Go Examine API by sending it the current URL.

Upon receving a list of flagged words and locations, the extension will edit in a 'hover over' tooltip to train users in thinking critically about the articles they consume.

The backend API part of this project can be found at [go_examine](https://github.com/FraserTooth/go_examine)

### Next Steps in Development
The next things I would like to do to develop this browser extension are:

1. Ensure that it is cross-browser compatible with Polyfill
2. Write Some Tests
3. Add a disable button to the control panel object (this section currently does nothing)
4. Improve the CSS and design of the app

## Using the Extension
This extension is not yet published, but can be used by cloning this repository.

Then nagivate to `about:debugging#/runtime/this-firefox` in your browser (for Firefox)

Then click `Load Temporary Add-on` and find this repository's `manifest.json` file.

## Example

![alt text](./misc/wikipediaExample.png 'Wikipedia Example of Go Examine')

_Example from the [Fake News](https://en.wikipedia.org/wiki/Fake_news) entry on Wikipedia_

## Deployment

You will need to install web-ext for easy local deployment: [Getting Started with web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/)

```bash
    npm install --global web-ext
```

```bash
    yarn dev
```

