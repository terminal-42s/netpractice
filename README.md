# NetPractice

NetPractice is a browser-based networking practice project. It runs as a static web app, so anyone can open it directly in Chrome or any modern browser without installing anything.

## Online Access

Open the live site here: https://terminal-42s.github.io/netpractice/. You can click this link to open the project directly in your browser. For the best experience, use Chrome on desktop.

## What It Does

- Interactive NetPractice training levels (1-10)
- **Evaluation mode**: 15-minute timed challenge with 3 randomly selected levels (6-10)
- **All Levels tab**: Direct access to any specific level for targeted practice
- **Countdown timer**: Visual timer in evaluation mode that auto-closes when time expires
- Works entirely inside the browser

## How To Use

1. Open the main page in your browser.
2. Choose your mode:
   - **Training**: Enter your intranet login and progress through levels 1-10 sequentially
   - **Evaluation**: Start a 15-minute timed challenge with 3 random levels (6-10)
   - **All Levels**: Select any specific level (1-10) to practice directly
3. In Evaluation mode, watch the countdown timer in the top-right corner
4. Complete network configuration tasks for each level
5. Use the "Check again" button to validate your configurations

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

- `index.html` - landing page with Training, Evaluation, and All Levels tabs
- `level1.html` to `level10.html` - practice levels with timer display in evaluation mode
- `end.html` - completion screen
- `css/netpractice.css` - styles and responsive layout
- `js/intro.js` - tab navigation, level selection, and evaluation mode logic
- `js/show.js` - level rendering, timer functionality, and goal checking
- `js/sim.js` - network simulation and validation logic
- `js/level1.js` to `js/level10.js` - individual level configurations
- `img/` - images and icons

## Features

### Training Mode
- Sequential progression through levels 1-10
- Personalized configurations based on your login
- Unlimited time to complete each level

### Evaluation Mode
- 15-minute countdown timer
- 3 randomly selected levels from 6-10
- Auto-close when timer expires
- Timer display in top-right corner with color coding:
  - Blue: > 1 minute remaining
  - Orange: 30 seconds - 1 minute
  - Red: < 30 seconds

### All Levels Mode
- Direct access to any level 1-10
- Quick practice for specific networking concepts
- No time restrictions

## Notes

- The addresses and network architectures used in the levels are fictitious.
- The project is designed to be lightweight and easy to share as a static site.
- Evaluation mode provides a realistic assessment environment with time pressure.

## Disclaimer

**For Practice Only** — This tool is deployed for educational and practice purposes only. I do not own this tool. All rights reserved to 42 School / 42 Network.
