var add = function (a, b) {
    return a + b;
};
var subtract = function (a, b) {
    return a - b;
};
var divide = function (a, b) {
    //tipo never se usa para devolver errores
    if (b === 0) {
        throw new Error("Division by zero is undefined");
    }
    return a / b;
};
var multiply = function (a, b) {
    return a * b;
};
var ACTIONS = [
    {
        name: "ADD",
        do: add,
    },
    {
        name: "SUBTRACT",
        do: subtract,
    },
    {
        name: "DIVIDE",
        do: divide,
    },
    {
        name: "MULTIPLY",
        do: multiply,
    },
];
// Element is type HTMLElement
function updateUserMoneyText(element, actualMoney) {
    element.innerHTML = actualMoney.toString();
}
function randomNumber(max) {
    return Math.round(Math.random() * max);
}
function playTheGame(_a) {
    var actions = _a.actions, totalClick = _a.totalClick, onError = _a.onError, onSuccess = _a.onSuccess, userMoney = _a.userMoney;
    var randomIndex = randomNumber(actions.length);
    var A_MILLION = 1000000;
    var action = actions[randomIndex];
    if (!action) {
        onError(randomIndex, actions);
        return userMoney;
    }
    if (userMoney >= A_MILLION) {
        if (typeof onSuccess === "function") {
            onSuccess(totalClick);
        }
        return userMoney;
    }
    if (userMoney <= 0) {
        throw new Error("Money must be positive");
    }
    var newMoney = Math.round(action.do(userMoney, randomNumber(actions.length * 100)));
    return newMoney;
}
function disableClickButton($button, handleClick) {
    $button.disabled = true;
    if (typeof handleClick === "function") {
        $button.removeEventListener("click", handleClick);
    }
}
var $button = document.getElementById("button");
var $userMoneyText = document.getElementById("moneyText");
var userMoney = 1000;
var totalClick = 0;
updateUserMoneyText($userMoneyText, userMoney);
$button.addEventListener("click", function handleClick() {
    totalClick++;
    var params = {
        actions: ACTIONS,
        totalClick: totalClick,
        userMoney: userMoney,
        onError: function (index, actions) {
            console.log(index, actions);
        },
        onSuccess: function (totalClick) {
            disableClickButton($button, handleClick);
            console.log("Te has convertido en millonario al hacer un total de: ", totalClick, " clicks");
        },
    };
    userMoney = playTheGame(params);
    updateUserMoneyText($userMoneyText, userMoney);
});
