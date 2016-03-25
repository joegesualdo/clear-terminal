"use strict";
var csi = require("control-sequence-introducer")

// Code String
function clearToEndOfScreenString() {
  return csi + "0" + "J"
}

function clearToBegOfScreenString() {
  return csi + "1" + "J"
}

function clearScreenString() {
  return csi + "2" + "J"
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
