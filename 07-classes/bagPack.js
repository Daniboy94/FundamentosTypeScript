var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MaxBagsReachedException = /** @class */ (function (_super) {
    __extends(MaxBagsReachedException, _super);
    function MaxBagsReachedException() {
        var _this = _super.call(this, "Max bags reached") || this;
        // NOTE: uncomment this line when you change from js to TS
        Object.setPrototypeOf(_this, MaxBagsReachedException.prototype);
        return _this;
    }
    return MaxBagsReachedException;
}(Error));
var Item = /** @class */ (function () {
    function Item(name, category) {
        this.name = name;
        this.category = category;
    }
    Item.prototype.toString = function () {
        return "Item with name ".concat(this.name, " has category ").concat(this.category);
    };
    return Item;
}());
var Container = /** @class */ (function () {
    function Container() {
        this.items = [];
    }
    Container.prototype.add = function (item) {
        if (this.items.length >= this.getCapacity()) {
            throw new MaxBagsReachedException();
        }
        this.items.push(item);
    };
    Container.prototype.getCapacity = function () {
        return 0;
    };
    return Container;
}());
var BackPack = /** @class */ (function (_super) {
    __extends(BackPack, _super);
    function BackPack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackPack.prototype.getCapacity = function () {
        return 8;
    };
    return BackPack;
}(Container));
var Bag = /** @class */ (function (_super) {
    __extends(Bag, _super);
    function Bag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bag.prototype.getCapacity = function () {
        return 4;
    };
    return Bag;
}(Container));
var Player = /** @class */ (function () {
    function Player(bag, bags) {
        this.bag = bag;
        this.bags = bags;
    }
    Player.prototype.pickItem = function (item) {
        try {
            this.bag.add(item);
            console.log("".concat(item.toString(), " collected ON BAGPACK"));
        }
        catch (e) {
            if (e instanceof MaxBagsReachedException) {
                this.storeInNextAvailableBag(item);
            }
        }
    };
    Player.prototype.storeInNextAvailableBag = function (item) {
        for (var index = 0; index < this.bags.length; index++) {
            var bag = this.bags[index];
            try {
                bag.add(item);
                console.log("".concat(item.toString(), " collected ON A BAG"));
                break;
            }
            catch (error) {
                if (index === this.bags.length - 1) {
                    throw error;
                }
            }
        }
    };
    return Player;
}());
var $button = document.getElementById("saveItem");
var $error = document.getElementById("error");
// We can create another type of BackPack with more capacity and inject into Player object
var player = new Player(new BackPack(), [
    new Bag(),
    new Bag(),
    new Bag(),
    new Bag(),
]);
var ITEMS_CATEGORIES = ["clothes", "weapons", "herbs"];
$button.addEventListener("click", function () {
    var index = Math.round(Math.random() * (ITEMS_CATEGORIES.length - 1));
    var itemCategory = ITEMS_CATEGORIES[index];
    var item = new Item(Date.now().toString(), itemCategory);
    try {
        player.pickItem(item);
    }
    catch (e) {
        console.log(e);
        $error.innerHTML = e.toString();
        $error.style.display = "block";
    }
});
