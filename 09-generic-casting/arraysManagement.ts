function createArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let myNumArr = createArray<number>([100, 200, 300]);
let myStrArr = createArray<string>(["Hello", "World"]);
let stringOrNumber = createArray<string | number>([100, "Hello"]);

myNumArr.push(400);

myStrArr.push("Hello TypeScript");

stringOrNumber.push("number");
stringOrNumber.push(1);

console.group("Type validation");

console.groupEnd();

// Display Tupe value
function displayTupeType<A, B>([index, value]: [A, B]) {
  console.group("Tuple type validation");
  console.log("index is", typeof index);
  console.log("value is", typeof value);
  console.groupEnd();
}

displayTupeType<number, string>([1, "Hi"]); // number, string

class Manager<X> {
  items: X[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: X): void {
    this.items.push(newItem);
  }

  hasSameType() {
    const firstItemType = typeof this.items[0];

    if (firstItemType === "undefined") {
      throw new Error("Push a new item before call this method");
    }

    return this.items.every((item) => typeof item === firstItemType);
  }

  getItems() {
    return this.items;
  }
}

const manager = new Manager<number>();
manager.addItem(1);
console.group("Manager class type validation");
console.log("All items has same type", manager.hasSameType());
console.groupEnd();

const hackedManager = new Manager<number>();
hackedManager.addItem(1);
hackedManager.addItem("two" as any as number);
hackedManager.addItem(3);

console.group("Hacked Manager should contains a one string");
console.log(
  "All items has same type > should be false. It is? ",
  manager.hasSameType()
);

console.groupEnd();
