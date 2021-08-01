var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(name, phone, eli, city) {
        this.name = name;
        this.phone = phone;
        this.eli = eli;
        this.city = city;
    }
    return Student;
}());
var wsa = /** @class */ (function (_super) {
    __extends(wsa, _super);
    function wsa(_a) {
        var name = _a.name, phone = _a.phone, eli = _a.eli, city = _a.city, cname = _a.cname, cstatus = _a.cstatus, cfee = _a.cfee, bfee = _a.bfee, cfeestatus = _a.cfeestatus;
        var _this = _super.call(this, name, phone, eli, city) || this;
        _this.cname = cname;
        _this.cstatus = cstatus;
        _this.cfee = cfee;
        _this.bfee = bfee;
        _this.cfeestatus = cfeestatus;
        return _this;
    }
    return wsa;
}(Student));
var s = new wsa({ name: "ram", phone: "987654321", eli: "eligible", city: "hyd", cname: "wt", cstatus: "ongoing", cfee: "5000", bfee: "2000", cfeestatus: "unpaid" });
if (getplace(s) == "false")
    console.log("not eligible to get placed");
else
    console.log(" eligible to get placed");
function getplace(s) {
    if (s.eli == "eligible" && s.cfeestatus == "paid")
        return "true";
    return "false";
}
pay(s, 2000);
function pay(s, a) {
    var a1 = s.bfee;
    s.bfee = (parseInt(a1) - a).toString();
    if (s.bfee == "0")
        s.cfeestatus = "paid";
}
if (getplace(s) == "false")
    console.log("not eligible to get placed");
else
    console.log(" eligible to get placed");
