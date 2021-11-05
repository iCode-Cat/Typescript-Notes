"use strict";
// Basic Types
let num;
let company = 'Hello World';
let isPublished = true;
let x = 'Hello';
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Test', true];
// Tuple Array
let employee;
employee = [
    [1, 'world'],
    [2, 'world'],
    [2, 'world'],
];
// Union
let id;
id = '2';
id = 2;
// Enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'Jack',
};
// Type Assertion
let cid = 1;
// let custormerId = <number>cid;
let custormerId = cid;
// Functions
// Third type indicates return type
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'jack',
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['jack', 'jason']);
