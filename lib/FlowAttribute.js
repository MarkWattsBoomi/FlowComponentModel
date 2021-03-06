"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowAttribute = void 0;
var FlowAttribute = /** @class */ (function () {
    function FlowAttribute(name, value) {
        this.Name = name;
        this.Value = value;
    }
    Object.defineProperty(FlowAttribute.prototype, "name", {
        get: function () {
            return this.Name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowAttribute.prototype, "value", {
        get: function () {
            return this.Value;
        },
        enumerable: false,
        configurable: true
    });
    return FlowAttribute;
}());
exports.FlowAttribute = FlowAttribute;
