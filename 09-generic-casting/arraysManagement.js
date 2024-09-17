function createArray(items) {
    return new Array().concat(items);
}
var myNumArr = createArray([100, 200, 300]);
var myStrArr = createArray(["Hello", "World"]);
var stringOrNumber = createArray([100, "Hello"]);
myNumArr.push(400);
myStrArr.push("Hello TypeScript");
stringOrNumber.push("number");
stringOrNumber.push(1);
console.group("Type validation");
console.groupEnd();
// Display Tupe value
function displayTupeType(_a) {
    var index = _a[0], value = _a[1];
    console.group("Tuple type validation");
    console.log("index is", typeof index);
    console.log("value is", typeof value);
    console.groupEnd();
}
displayTupeType([1, "Hi"]); // number, string
var Manager = /** @class */ (function () {
    function Manager() {
        this.items = [];
    }
    Manager.prototype.addItem = function (newItem) {
        this.items.push(newItem);
    };
    Manager.prototype.hasSameType = function () {
        var firstItemType = typeof this.items[0];
        if (firstItemType === "undefined") {
            throw new Error("Push a new item before call this method");
        }
        return this.items.every(function (item) { return typeof item === firstItemType; });
    };
    Manager.prototype.getItems = function () {
        return this.items;
    };
    return Manager;
}());
var manager = new Manager();
manager.addItem(1);
console.group("Manager class type validation");
console.log("All items has same type", manager.hasSameType());
console.groupEnd();
var hackedManager = new Manager();
hackedManager.addItem(1);
hackedManager.addItem("two");
hackedManager.addItem(3);
console.group("Hacked Manager should contains a one string");
console.log("All items has same type > should be false. It is? ", manager.hasSameType());
console.groupEnd();
