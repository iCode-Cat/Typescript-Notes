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
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: 'Jack',
};

// Type Assertion
let cid: any = 1;
// let custormerId = <number>cid;
let custormerId = cid as number;

// Functions
// Third type indicates return type
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// Interfaces
interface userInterface {
  // Prevent assign
  readonly id: number;
  name: string;
  // Optional
  age?: number;
}

const user1: userInterface = {
  id: 1,
  name: 'jack',
};

// Type vs Interface
type Point = string | number;
const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5]);
let strArray = getArray<string>(['jack', 'jason']);
