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
var Employee = /** @class */ (function () {
    function Employee(empId, name, salary) {
        this.empId = empId;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.displayEmpInfo = function () {
        console.log("".concat(this.empId, " ").concat(this.name, " ").concat(this.salary));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(empId, name, salary, project) {
        var _this = _super.call(this, empId, name, salary) || this;
        _this.project = project;
        return _this;
    }
    Manager.prototype.displayEmpInfo = function () {
        _super.prototype.displayEmpInfo.call(this);
        console.log("".concat(this.project));
    };
    return Manager;
}(Employee));
var manager = new Manager(101, "Shyam", 100000, "Tech");
manager.displayEmpInfo();
// let emp:Employee = new Employee(101,"Shyam",100000);
// emp.displayEmpInfo()
