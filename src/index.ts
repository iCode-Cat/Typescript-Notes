// Basic Types
let num: number;
let company: string = 'Hello World';
let isPublished: boolean = true;
let x: any = 'Hello';

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'Test', true];
// Tuple Array
let employee: [number, string][];

employee = [
  [1, 'world'],
  [2, 'world'],
  [2, 'world'],
];

// Union
let id: string | number;
id = '2';
id = 2;

// Enums
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}
// Objects
