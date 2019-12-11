(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, ": ").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBa0M7QUFBQSxNQUMvQkMsT0FEK0IsR0FDVEQsSUFEUyxDQUMvQkMsT0FEK0I7QUFBQSxNQUN0QkMsUUFEc0IsR0FDVEYsSUFEUyxDQUN0QkUsUUFEc0I7QUFFdkNDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLGVBQTRCRCxPQUE1QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2VOb3RpZihkYXRhKSB7XG4gIGNvbnN0IHsgbWVzc2FnZSwgbmlja25hbWUgfSA9IGRhdGE7XG4gIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfTogJHttZXNzYWdlfWApO1xufVxuIl19
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

// eslint-disable-next-line no-undef
var socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("YOU: ".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfODA3NTQwNDMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTtBQUNBLElBQU1BLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7O0FBRUEsU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEI7QUFDNUJILEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLFlBQVosRUFBMEI7QUFBRUQsSUFBQUEsT0FBTyxFQUFFQTtBQUFYLEdBQTFCO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBb0JILE9BQXBCO0FBQ0Q7O0FBRUQsU0FBU0ksV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDN0JSLEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGFBQVosRUFBMkI7QUFBRUksSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQTNCO0FBQ0Q7O0FBRURSLE1BQU0sQ0FBQ1MsRUFBUCxDQUFVLGNBQVYsRUFBMEJDLHdCQUExQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU1lc3NhZ2VOb3RpZiB9IGZyb20gXCIuL2NoYXRcIjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xuXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKSB7XG4gIHNvY2tldC5lbWl0KFwibmV3TWVzc2FnZVwiLCB7IG1lc3NhZ2U6IG1lc3NhZ2UgfSk7XG4gIGNvbnNvbGUubG9nKGBZT1U6ICR7bWVzc2FnZX1gKTtcbn1cblxuZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpIHtcbiAgc29ja2V0LmVtaXQoXCJzZXROaWNrbmFtZVwiLCB7IG5pY2tuYW1lIH0pO1xufVxuXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aWZcIiwgaGFuZGxlTWVzc2FnZU5vdGlmKTtcbiJdfQ==
},{"./chat":1}]},{},[2])