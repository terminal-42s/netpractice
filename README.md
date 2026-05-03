# NetPractice

NetPractice is a browser-based networking practice project. It runs as a static web app, so anyone can open it directly in Chrome or any modern browser without installing anything.

## Online Access

Open the live site here: https://terminal-42s.github.io/netpractice/. You can click this link to open the project directly in your browser. For the best experience, use Chrome on desktop.

## What It Does

- Interactive NetPractice training levels
- Evaluation mode with randomly selected challenges
- Works entirely inside the browser

## How To Use

1. Open the main page in your browser.
2. Enter your intranet login in Training mode.
3. Click Start to begin the exercises.
4. Switch to Evaluation mode when you want a timed challenge.

## Run Locally

If you want to test it from this repository, open `index.html` in Chrome or serve the folder with any static web server.

Example:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Project Structure

- `index.html` - landing page
- `level1.html` to `level10.html` - practice levels
- `end.html` - completion screen
- `css/` - styles
- `js/` - app logic
- `img/` - images and icons

## Notes

- The addresses and network architectures used in the levels are fictitious.
- The project is designed to be lightweight and easy to share as a static site.

## Disclaimer

**For Practice Only** — This tool is deployed for educational and practice purposes only. I do not own this tool. All rights reserved to 42 School / 42 Network.
