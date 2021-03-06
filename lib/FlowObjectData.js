"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowObjectData = void 0;
var FlowObjectDataProperty_1 = require("./FlowObjectDataProperty");
var FlowObjectData = /** @class */ (function () {
    function FlowObjectData(data) {
        this.DeveloperName = "";
        this.ExternalId = "";
        this.InternalId = "";
        this.IsSelected = false;
        this.Order = 0;
        this.TypeElementId = "";
        this.Properties = {};
        if (data && data[0]) {
            var objectData = data[0];
            this.DeveloperName = objectData.developerName;
            this.InternalId = objectData.internalId;
            this.ExternalId = objectData.externalId;
            this.Order = objectData.order;
            this.IsSelected = objectData.isSelected;
            this.TypeElementId = objectData.typeElementId;
            if (objectData.properties && objectData.properties.length > 0) {
                for (var _i = 0, _a = objectData.properties; _i < _a.length; _i++) {
                    var property = _a[_i];
                    this.Properties[property.developerName] = new FlowObjectDataProperty_1.FlowObjectDataProperty(property);
                }
            }
        }
        else {
            console.log("null data");
        }
    }
    Object.defineProperty(FlowObjectData.prototype, "developerName", {
        get: function () {
            return this.DeveloperName;
        },
        set: function (developerName) {
            this.DeveloperName = developerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowObjectData.prototype, "externalId", {
        get: function () {
            return this.ExternalId;
        },
        set: function (externalId) {
            this.ExternalId = externalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowObjectData.prototype, "internalId", {
        get: function () {
            return this.InternalId;
        },
        set: function (internalId) {
            this.InternalId = internalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowObjectData.prototype, "isSelected", {
        get: function () {
            return this.IsSelected;
        },
        set: function (isSelected) {
            this.IsSelected = isSelected;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowObjectData.prototype, "order", {
        get: function () {
            return this.Order;
        },
        set: function (order) {
            this.Order = order;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowObjectData.prototype, "typeElementId", {
        get: function () {
            return this.TypeElementId;
        },
        set: function (typeElementId) {
            this.TypeElementId = typeElementId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowObjectData.prototype, "properties", {
        get: function () {
            return this.Properties;
        },
        enumerable: false,
        configurable: true
    });
    FlowObjectData.newInstance = function (developerName) {
        var data = {
            developerName: developerName,
            externalId: "",
            internalId: manywho.utils.guid(),
            isSelected: false,
            order: 0,
            properties: [],
            typeElementId: ""
        };
        return new this([data]);
    };
    FlowObjectData.prototype.addProperty = function (newProperty) {
        this.Properties[newProperty.developerName] = newProperty;
    };
    FlowObjectData.prototype.removeProperty = function (key) {
        delete this.Properties[key];
    };
    FlowObjectData.prototype.clone = function (newTypeName) {
        var _this = this;
        var clone = FlowObjectData.newInstance(newTypeName || this.DeveloperName);
        Object.keys(this.properties).forEach(function (key) {
            var newProp = _this.properties[key].clone();
            clone.properties[key] = newProp;
        });
        return clone;
    };
    FlowObjectData.prototype.iObjectData = function (selected) {
        var props = [];
        for (var _i = 0, _a = Object.keys(this.properties); _i < _a.length; _i++) {
            var key = _a[_i];
            props.push(this.properties[key].iFlowObjectDataProperty());
        }
        var objectData = {
            developerName: this.developerName,
            externalId: this.externalId,
            internalId: this.internalId,
            isSelected: selected || this.isSelected,
            order: this.order,
            properties: props,
            typeElementId: this.TypeElementId
        };
        return objectData;
    };
    FlowObjectData.prototype.iFlowObjectDataArray = function (selected) {
        var output = [];
        output.push(this.iObjectData(selected));
        return output;
    };
    return FlowObjectData;
}());
exports.FlowObjectData = FlowObjectData;
