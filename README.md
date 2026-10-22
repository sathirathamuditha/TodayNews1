# Our Story Website

Responsive website section inspired by the supplied reference image.

## Files

- `index.html` — page structure and Watch Now link
- `style.css` — design, responsive layout, and button styling
- `script.js` — small safety check for the link
- `README.md` — setup and customization guide

## Run the website

1. Extract the ZIP file.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in your browser, or open the folder in VS Code and use Live Server.

## Change the YouTube link

1. Open `index.html` in a text editor.
2. Find the line below:

   `href="https://www.youtube.com/"`

3. Replace the URL with your own YouTube channel or video URL. For example:

   `href="https://www.youtube.com/@YourChannelName"`

4. Save the file and refresh the browser.

The `Watch Now` button opens the selected YouTube page in a new browser tab.

## Change button colors

Open `style.css` and edit these values near the top:

- `--watch-red: #ff3030;` — button background and border
- `--watch-text: #000000;` — button text color

## Image

The demo image is loaded from Unsplash, so an internet connection is required to display it. Replace the image URL in `index.html` to use your own image.

## Technologies

HTML5, CSS3, and vanilla JavaScript.
