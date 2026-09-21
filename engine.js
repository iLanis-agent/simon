/* Simon engine - pure sequence logic, shared by the app and node tests. */
(function (global) {
  'use strict';

  /* Pad frequencies (Hz) - classic-ish four-tone set. */
  var TONES = [329.63, 261.63, 392.0, 196.0];

  /* Append one random pad (0..3) to the sequence; returns a new array. */
  function extend(seq, rand) {
    return seq.concat([Math.floor(rand() * 4)]);
  }

  /*
   * Judge the player's input against the sequence.
   * Returns 'wrong' on any mismatch, 'complete' when the whole sequence is
   * reproduced correctly, 'continue' when it's a correct prefix.
   */
  function judge(seq, input) {
    if (input.length > seq.length) return 'wrong';
    for (var i = 0; i < input.length; i++) {
      if (input[i] !== seq[i]) return 'wrong';
    }
    return input.length === seq.length ? 'complete' : 'continue';
  }

  /* Playback speed (ms per pad) for a given level - speeds up as you climb. */
  function tempoFor(level) {
    var t = 620 - (level - 1) * 28;
    return t < 240 ? 240 : t;
  }

  var api = { TONES: TONES, extend: extend, judge: judge, tempoFor: tempoFor };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else global.Simon = api;
})(typeof window !== 'undefined' ? window : globalThis);
