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
exports.DeptEmployee = void 0;
const typeorm_1 = require("typeorm");
let DeptEmployee = class DeptEmployee {
};
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", Number)
], DeptEmployee.prototype, "emp_no", void 0);
__decorate([
    typeorm_1.PrimaryColumn("int"),
    __metadata("design:type", String)
], DeptEmployee.prototype, "dept_no", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", String)
], DeptEmployee.prototype, "from_date", void 0);
__decorate([
    typeorm_1.Column("date"),
    __metadata("design:type", String)
], DeptEmployee.prototype, "to_date", void 0);
DeptEmployee = __decorate([
    typeorm_1.Entity("dept_emp")
], DeptEmployee);
exports.DeptEmployee = DeptEmployee;
//# sourceMappingURL=deptemp-entity.js.map