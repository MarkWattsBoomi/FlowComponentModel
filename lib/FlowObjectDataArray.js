"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowObjectDataArray = exports.eSortOrder = void 0;
var FlowField_1 = require("./FlowField");
var FlowObjectData_1 = require("./FlowObjectData");
var FlowObjectDataProperty_1 = require("./FlowObjectDataProperty");
var eSortOrder;
(function (eSortOrder) {
    eSortOrder[eSortOrder["ascending"] = 0] = "ascending";
    eSortOrder[eSortOrder["descending"] = 1] = "descending";
})(eSortOrder = exports.eSortOrder || (exports.eSortOrder = {}));
var FlowObjectDataArray = /** @class */ (function () {
    function FlowObjectDataArray(array) {
        this.Items = [];
        for (var _i = 0, _a = array || []; _i < _a.length; _i++) {
            var item = _a[_i];
            this.Items.push(new FlowObjectData_1.FlowObjectData([item]));
        }
    }
    Object.defineProperty(FlowObjectDataArray.prototype, "items", {
        get: function () {
            return this.Items;
        },
        enumerable: false,
        configurable: true
    });
    FlowObjectDataArray.prototype.sort = function (order, fieldName) {
        if (order === eSortOrder.ascending) {
            if (fieldName) {
                return this.Items.sort(function (a, b) {
                    var valA;
                    var valB;
                    switch (a.properties[fieldName].contentType) {
                        case FlowField_1.eContentType.ContentNumber:
                            valA = parseFloat(a.properties[fieldName].value);
                            valB = parseFloat(b.properties[fieldName].value);
                            break;
                        case FlowField_1.eContentType.ContentDateTime:
                            valA = new Date(a.properties[fieldName].value);
                            valB = new Date(b.properties[fieldName].value);
                            break;
                        default:
                            valA = a.properties[fieldName].value;
                            valB = b.properties[fieldName].value;
                            break;
                    }
                    switch (true) {
                        case valA < valB:
                            return -1;
                        case valA > valB:
                            return 1;
                        default:
                            return 0;
                    }
                });
            }
            else {
                return this.Items.sort(function (a, b) { return a.order - b.order; });
            }
        }
        else {
            if (fieldName) {
                return this.Items.sort(function (a, b) {
                    if (a && b && a.properties && b.properties && a.properties[fieldName] &&
                        b.properties[fieldName] && a.properties[fieldName].value && b.properties[fieldName].value) {
                        if (a.properties[fieldName]) {
                            switch (true) {
                                case a.properties[fieldName].value < b.properties[fieldName].value:
                                    return 1;
                                case a.properties[fieldName].value > b.properties[fieldName].value:
                                    return -1;
                                default:
                                    return 0;
                            }
                        }
                        else {
                            return 0;
                        }
                    }
                    else {
                        return 0;
                    }
                });
            }
            else {
                return this.Items.sort(function (a, b) { return a.order - b.order; });
            }
        }
    };
    FlowObjectDataArray.fromJSONString = function (json, primaryKey, columns, flowTypeName) {
        var objDataArray = new FlowObjectDataArray();
        var model = JSON.parse(json);
        model.forEach(function (item) {
            var objData = FlowObjectData_1.FlowObjectData.newInstance(flowTypeName);
            columns.forEach(function (col) {
                var val = item[col.developerName];
                if (col.developerName === primaryKey) {
                    //objData.internalId = val;
                    objData.externalId = val;
                }
                switch (col.contentType) {
                    case FlowField_1.eContentType.ContentDateTime:
                        val = new Date(val);
                        if (val && !isNaN(val.getTime())) {
                            val = val.toISOString();
                        }
                        else {
                            val = "";
                        }
                        break;
                    case FlowField_1.eContentType.ContentNumber:
                        val = parseFloat("" + val);
                        if (val && !isNaN(val)) {
                            val = "" + val;
                        }
                        else {
                            val = "";
                        }
                        break;
                    case FlowField_1.eContentType.ContentBoolean:
                        val = (new String(val).toLowerCase() === "true");
                        break;
                }
                objData.addProperty(FlowObjectDataProperty_1.FlowObjectDataProperty.newInstance(col.developerName, col.contentType, val));
                objData.properties[col.developerName].typeElementPropertyId = col.typeElementPropertyId;
            });
            objDataArray.addItem(objData);
        });
        return objDataArray;
    };
    FlowObjectDataArray.prototype.addItem = function (item) {
        this.Items.push(item);
    };
    FlowObjectDataArray.prototype.clearItems = function () {
        this.Items = [];
    };
    FlowObjectDataArray.prototype.clone = function () {
        var clone = new FlowObjectDataArray();
        this.items.forEach(function (obj) {
            clone.addItem(obj.clone());
        });
        return clone;
    };
    FlowObjectDataArray.prototype.iFlowObjectDataArray = function (selected) {
        var output = [];
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var od = _a[_i];
            output.push(od.iObjectData(selected));
        }
        return output;
    };
    FlowObjectDataArray.prototype.getItemWithPropertyName = function (findProperty, withValue, returnProperty) {
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.properties[findProperty] && item.properties[findProperty].value != undefined) {
                var value = item.properties[findProperty].value;
                var compareTo = withValue;
                switch (item.properties[findProperty].contentType) {
                    case FlowField_1.eContentType.ContentString:
                        value = value.toLowerCase();
                        compareTo = compareTo.toLowerCase();
                        break;
                    case FlowField_1.eContentType.ContentNumber:
                        value = value;
                        compareTo = parseFloat(compareTo.toLowerCase());
                        break;
                    case FlowField_1.eContentType.ContentBoolean:
                        value = value;
                        compareTo = new String(compareTo).toLowerCase() === 'true';
                        break;
                    default:
                        break;
                }
                if (value === compareTo) {
                    return item.properties[returnProperty];
                }
            }
        }
        return null;
    };
    FlowObjectDataArray.prototype.getSelectedItems = function () {
        var results = new FlowObjectDataArray();
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.isSelected === true) {
                results.addItem(item);
            }
        }
        return results;
    };
    FlowObjectDataArray.prototype.getItemWithPropertyValue = function (findProperty, withValue) {
        for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.properties[findProperty] && item.properties[findProperty].value != undefined) {
                var value = item.properties[findProperty].value;
                var compareTo = withValue;
                switch (item.properties[findProperty].contentType) {
                    case FlowField_1.eContentType.ContentString:
                        value = value.toLowerCase();
                        compareTo = new String(compareTo).toLowerCase();
                        break;
                    case FlowField_1.eContentType.ContentNumber:
                        value = value;
                        compareTo = parseFloat(new String(compareTo).toLowerCase());
                        break;
                    case FlowField_1.eContentType.ContentBoolean:
                        value = value;
                        compareTo = new String(compareTo).toLowerCase() === 'true';
                        break;
                    default:
                        break;
                }
                if (value === compareTo) {
                    return item;
                }
            }
        }
    };
    FlowObjectDataArray.prototype.getIndexOfItemWithPropertyValue = function (findProperty, withValue) {
        for (var pos = 0; pos < this.items.length; pos++) {
            var item = this.items[pos];
            if (item.properties[findProperty] && item.properties[findProperty].value != undefined) {
                var value = item.properties[findProperty].value;
                var compareTo = withValue;
                switch (item.properties[findProperty].contentType) {
                    case FlowField_1.eContentType.ContentString:
                        value = value.toLowerCase();
                        compareTo = compareTo.toLowerCase();
                        break;
                    case FlowField_1.eContentType.ContentNumber:
                        value = value;
                        compareTo = parseFloat(new String(compareTo).toLowerCase());
                        break;
                    case FlowField_1.eContentType.ContentBoolean:
                        value = value;
                        compareTo = new String(compareTo).toLowerCase() === 'true';
                        break;
                    default:
                        break;
                }
                if (value === compareTo) {
                    return pos;
                }
            }
        }
        return -1;
    };
    FlowObjectDataArray.prototype.removeItemWithPropertyValue = function (findProperty, withValue) {
        var modifiedCount = 0;
        for (var pos = 0; pos < this.items.length; pos++) {
            var item = this.items[pos];
            if (item.properties[findProperty] && item.properties[findProperty].value != undefined) {
                var value = item.properties[findProperty].value;
                var compareTo = withValue;
                switch (item.properties[findProperty].contentType) {
                    case FlowField_1.eContentType.ContentString:
                        value = value.toLowerCase();
                        compareTo = compareTo.toLowerCase();
                        break;
                    case FlowField_1.eContentType.ContentNumber:
                        value = value;
                        compareTo = parseFloat(new String(compareTo).toLowerCase());
                        break;
                    case FlowField_1.eContentType.ContentBoolean:
                        value = value;
                        compareTo = new String(compareTo).toLowerCase() === 'true';
                        break;
                    default:
                        break;
                }
                if (value === compareTo) {
                    this.items.splice(pos, 1);
                    modifiedCount++;
                }
            }
        }
        return modifiedCount;
    };
    FlowObjectDataArray.prototype.removeItemAtIndex = function (index) {
        var modifiedCount = 0;
        if (this.items[index]) {
            this.items.splice(index, 1);
            modifiedCount = index;
        }
        return modifiedCount;
    };
    return FlowObjectDataArray;
}());
exports.FlowObjectDataArray = FlowObjectDataArray;
