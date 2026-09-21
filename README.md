# Simon

The classic memory-tones game in the browser. Four pads light up and sound in a growing
sequence - watch, then play it back. Every level adds one pad and speeds up. Normal mode
replays the pattern after a mistake; strict mode ends the run on one wrong pad. Your best
level is kept in `localStorage`.

- No signup, nothing to install - pure static HTML/JS, tones via Web Audio
- `engine.js` holds the sequence logic as pure functions, shared between the app and node tests

## Play

Open `index.html`, or visit the deployed site.

## Run locally

Any static server works:

```
python3 -m http.server
```

Then open http://localhost:8000/.

## Engine tests

The node test suite covers sequence generation bounds, prefix/complete/wrong judging, and
the tempo curve.
