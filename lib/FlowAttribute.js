"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FlowAttribute = /** @class */ (function () {
    function FlowAttribute(name, value) {
        this.Name = name;
        this.Value = value;
    }
    Object.defineProperty(FlowAttribute.prototype, "name", {
        get: function () {
            return this.Name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlowAttribute.prototype, "value", {
        get: function () {
            return this.Value;
        },
        enumerable: true,
        configurable: true
    });
    return FlowAttribute;
}());
exports.FlowAttribute = FlowAttribute;
