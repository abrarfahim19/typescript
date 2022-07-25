"use strict";
var _a;
let phone = 123456789;
let user_name = "Abrar";
let total_user_choices = [1, 2, 3];
let user_choices = ["Machine Learning", "Mechatronics", "Developing"];
total_user_choices.forEach((n) => n.toString);
user_choices.forEach((n) => n.length);
let tuple = [user_name, 123456789];
tuple[0].concat("Fahim");
tuple[1].toString;
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
const mySize = Size.Medium;
const mySizes = 2;
function incomeTax(earning, taxYear = 2022) {
    if (earning > 50000 && taxYear < 2022)
        return earning * 1.3;
    return earning * 1.2;
}
let employee = {
    id: 0,
    name: "Abrar",
    retire: (date) => console.log(date),
};
let employee1 = {
    id: 1,
    name: "Fahim",
    retire: (date) => console.log(date)
};
function kgToLb(weight) {
    if (typeof weight == "string") {
        return parseInt(weight) * 1.2;
    }
    else {
        return weight * 1.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let tShirtSize = 50;
function greeting(name) {
    if (name)
        console.log(name.toUpperCase);
    else
        console.log("Holla!");
}
greeting(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
;
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
console.log(log === null || log === void 0 ? void 0 : log('a'));
//# sourceMappingURL=index.js.map