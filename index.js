"use strict";

function csi() {
  // Escape characters are represented by decimal 27 and \u001b is the unicode equivalent
  var escapeCharacter = "\u001b"
  console.log(escapeCharacter)
  var controlSequenceIntroducer = escapeCharacter + "[";
  // alias
  return controlSequenceIntroducer;
}

// Code String
function clearToEndOfScreenString() {
  return csi() + "0" + "J"
}

function clearToBegOfScreenString() {
  return csi() + "1" + "J"
}

function clearScreenString() {
  return csi() + "2" + "J"
}

function clearToEndOfScreen() {
  process.stdout.write(clearToEndOfScreenString())
}
function clearToBegOfScreen() {
  process.stdout.write(clearToBegOfScreenString())
}
function clearScreen() {
  process.stdout.write(clearScreenString())
}

module.exports = clearScreen
