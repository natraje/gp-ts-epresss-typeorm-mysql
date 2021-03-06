"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employees = exports.Gender = void 0;
const typeorm_1 = require("typeorm");
var Gender;
(function (Gender) {
    Gender["MALE"] = "M";
    Gender["FEMALE"] = "F";
})(Gender = exports.Gender || (exports.Gender = {}));
let Employees = class Employees {
};
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], Employees.prototype, "emp_no", void 0);
__decorate([
    typeorm_1.Column("varchar"),
    __metadata("design:type", String)
], Employees.prototype, "first_name", void 0);
__decorate([
    typeorm_1.Column("varchar"),
    __metadata("design:type", String)
], Employees.prototype, "last_name", void 0);
__decorate([
    typeorm_1.Column({
        type: "enum",
        enum: Gender,
    }),
    __metadata("design:type", String)
], Employees.prototype, "gender", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", String)
], Employees.prototype, "birth_date", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", String)
], Employees.prototype, "hire_date", void 0);
Employees = __decorate([
    typeorm_1.Entity("employees")
], Employees);
exports.Employees = Employees;
//# sourceMappingURL=employee-entity.js.map