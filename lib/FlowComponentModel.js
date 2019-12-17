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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
System.register("EventManager", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            if (!manywho.eventManager) {
                manywho.eventManager = {};
                manywho.eventManager.beforeSendListeners = {};
                manywho.eventManager.doneListeners = {};
                manywho.eventManager.failListeners = {};
                manywho.eventManager.outcomeBeingTriggered;
                manywho.eventManager.beforeSend = function (xhr, request) {
                    //(manywho as any).eventManager.beforeSendListeners.forEach((listener: any) => listener(xhr, request));
                    for (var key in manywho.eventManager.beforeSendListeners) {
                        manywho.eventManager.beforeSendListeners[key](xhr, request);
                    }
                };
                manywho.eventManager.done = function (xhr, request) {
                    //(manywho as any).eventManager.doneListeners.forEach((listener: any) => listener(xhr, request));
                    for (var key in manywho.eventManager.doneListeners) {
                        manywho.eventManager.doneListeners[key](xhr, request);
                    }
                };
                manywho.eventManager.fail = function (xhr, request) {
                    //(manywho as any).eventManager.failListeners.forEach((listener: any) => listener(xhr, request));
                    for (var key in manywho.eventManager.failListeners) {
                        manywho.eventManager.failListeners[key](xhr, request);
                    }
                };
                manywho.eventManager.addBeforeSendListener = function (handler, componentId) {
                    manywho.eventManager.beforeSendListeners[componentId] = handler;
                };
                manywho.eventManager.removeBeforeSendListener = function (componentId) {
                    delete manywho.eventManager.beforeSendListeners[componentId];
                };
                manywho.eventManager.addDoneListener = function (handler, componentId) {
                    manywho.eventManager.doneListeners[componentId] = handler;
                };
                manywho.eventManager.removeDoneListener = function (componentId) {
                    delete manywho.eventManager.doneListeners[componentId];
                };
                manywho.eventManager.addFailListener = function (handler, componentId) {
                    manywho.eventManager.failListeners[componentId] = handler;
                };
                manywho.eventManager.removeFailListener = function (componentId) {
                    delete manywho.eventManager.failListeners[componentId];
                };
                manywho.settings.initialize(null, {
                    invoke: {
                        beforeSend: manywho.eventManager.beforeSend,
                        done: manywho.eventManager.done,
                        fail: manywho.eventManager.fail,
                    },
                });
            }
        }
    };
});
System.register("FlowAttribute", [], function (exports_2, context_2) {
    "use strict";
    var FlowAttribute;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            FlowAttribute = /** @class */ (function () {
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
            exports_2("FlowAttribute", FlowAttribute);
        }
    };
});
System.register("FlowObjectDataArray", ["FlowField", "FlowObjectData"], function (exports_3, context_3) {
    "use strict";
    var FlowField_1, FlowObjectData_1, eSortOrder, FlowObjectDataArray;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (FlowField_1_1) {
                FlowField_1 = FlowField_1_1;
            },
            function (FlowObjectData_1_1) {
                FlowObjectData_1 = FlowObjectData_1_1;
            }
        ],
        execute: function () {
            (function (eSortOrder) {
                eSortOrder[eSortOrder["ascending"] = 0] = "ascending";
                eSortOrder[eSortOrder["descending"] = 1] = "descending";
            })(eSortOrder || (eSortOrder = {}));
            exports_3("eSortOrder", eSortOrder);
            FlowObjectDataArray = /** @class */ (function () {
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
                    enumerable: true,
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
                FlowObjectDataArray.prototype.iFlowObjectDataArray = function () {
                    var output = [];
                    for (var _i = 0, _a = this.Items; _i < _a.length; _i++) {
                        var od = _a[_i];
                        output.push(od.iObjectData());
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
            exports_3("FlowObjectDataArray", FlowObjectDataArray);
        }
    };
});
System.register("FlowObjectDataProperty", ["FlowField", "FlowObjectData", "FlowObjectDataArray"], function (exports_4, context_4) {
    "use strict";
    var FlowField_2, FlowObjectData_2, FlowObjectDataArray_1, FlowObjectDataProperty;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (FlowField_2_1) {
                FlowField_2 = FlowField_2_1;
            },
            function (FlowObjectData_2_1) {
                FlowObjectData_2 = FlowObjectData_2_1;
            },
            function (FlowObjectDataArray_1_1) {
                FlowObjectDataArray_1 = FlowObjectDataArray_1_1;
            }
        ],
        execute: function () {
            FlowObjectDataProperty = /** @class */ (function () {
                function FlowObjectDataProperty(property) {
                    this.ContentFormat = "";
                    this.ContentType = FlowField_2.eContentType.unknown;
                    this.DeveloperName = "";
                    this.TypeElementId = "";
                    this.TypeElementPropertyId = "";
                    if (property) {
                        this.DeveloperName = property.developerName;
                        this.ContentType = FlowField_2.eContentType[property.contentType];
                        this.ContentFormat = property.contentFormat ? property.contentFormat : "";
                        this.TypeElementId = property.typeElementId ? property.typeElementId : "";
                        this.TypeElementPropertyId = property.typeElementPropertyId;
                        switch (this.ContentType) {
                            case FlowField_2.eContentType.ContentObject:
                                this.Value = property.objectData ? new FlowObjectData_2.FlowObjectData(property.objectData) : undefined;
                                break;
                            case FlowField_2.eContentType.ContentList:
                                this.value = property.objectData ? new FlowObjectDataArray_1.FlowObjectDataArray(property.objectData) : new FlowObjectDataArray_1.FlowObjectDataArray([]);
                                break;
                            default:
                                this.value = property.contentValue ? property.contentValue : "";
                                break;
                        }
                    }
                }
                FlowObjectDataProperty.newInstance = function (developerName, contentType, value) {
                    var cv = "";
                    var objd = [];
                    switch (contentType) {
                        case FlowField_2.eContentType.ContentObject:
                            var od = value;
                            objd.push(od.iObjectData());
                            break;
                        case FlowField_2.eContentType.ContentList:
                            var oda = value;
                            objd = oda.iFlowObjectDataArray();
                            break;
                        default:
                            cv = value;
                            break;
                    }
                    var data = {
                        contentFormat: "",
                        contentType: FlowField_2.eContentType[contentType],
                        contentValue: cv,
                        developerName: developerName,
                        objectData: objd,
                        typeElementId: "",
                        typeElementPropertyId: "",
                    };
                    return new this(data);
                };
                Object.defineProperty(FlowObjectDataProperty.prototype, "contentFormat", {
                    get: function () {
                        return this.ContentFormat;
                    },
                    set: function (contentFormat) {
                        this.contentFormat = contentFormat;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectDataProperty.prototype, "contentType", {
                    get: function () {
                        return this.ContentType;
                    },
                    set: function (contentType) {
                        this.ContentType = contentType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectDataProperty.prototype, "developerName", {
                    get: function () {
                        return this.DeveloperName;
                    },
                    set: function (developerName) {
                        this.DeveloperName = developerName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectDataProperty.prototype, "typeElementId", {
                    get: function () {
                        return this.TypeElementId;
                    },
                    set: function (typeElementId) {
                        this.TypeElementId = typeElementId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectDataProperty.prototype, "typeElementPropertyId", {
                    get: function () {
                        return this.TypeElementPropertyId;
                    },
                    set: function (typeElementPropertyId) {
                        this.TypeElementPropertyId = typeElementPropertyId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectDataProperty.prototype, "value", {
                    get: function () {
                        switch (this.contentType) {
                            case FlowField_2.eContentType.ContentNumber:
                                return parseFloat(this.Value ? this.Value : '0');
                            case FlowField_2.eContentType.ContentBoolean:
                                return new String(this.Value).toLowerCase() === 'true';
                            default:
                                return this.Value;
                        }
                    },
                    set: function (value) {
                        this.Value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlowObjectDataProperty.prototype.clone = function () {
                    var value;
                    switch (this.contentType) {
                        case FlowField_2.eContentType.ContentList:
                            value = new FlowObjectDataArray_1.FlowObjectDataArray();
                            this.value.items.forEach(function (item) {
                                value.addItem(item.clone(item.developerName));
                            });
                            break;
                        case FlowField_2.eContentType.ContentObject:
                            value = this.value.clone(this.value.developerName);
                            break;
                        default:
                            value = this.value;
                    }
                    var clone = FlowObjectDataProperty.newInstance(this.developerName, this.contentType, value);
                    return clone;
                };
                FlowObjectDataProperty.prototype.iFlowObjectDataProperty = function () {
                    var contentValue = "";
                    var objectData = [];
                    switch (this.ContentType) {
                        case FlowField_2.eContentType.ContentObject:
                            var od = this.Value;
                            // if it has no developerName then skip it
                            if (od && od.developerName && od.developerName.length > 0) {
                                objectData.push(od.iObjectData());
                            }
                            break;
                        case FlowField_2.eContentType.ContentList:
                            var oda = this.Value;
                            objectData = oda.iFlowObjectDataArray();
                            break;
                        default:
                            contentValue = this.Value;
                            break;
                    }
                    var output = {
                        contentFormat: this.ContentFormat,
                        contentType: FlowField_2.eContentType[this.ContentType],
                        contentValue: contentValue,
                        developerName: this.DeveloperName,
                        objectData: objectData,
                        typeElementId: this.TypeElementId,
                        typeElementPropertyId: this.TypeElementPropertyId,
                    };
                    return output;
                };
                Object.defineProperty(FlowObjectDataProperty.prototype, "displayString", {
                    get: function () {
                        var label = '';
                        if (this.Value) {
                            switch (this.ContentType) {
                                case FlowField_2.eContentType.ContentString:
                                case FlowField_2.eContentType.ContentNumber:
                                    label = this.Value;
                                    break;
                                case FlowField_2.eContentType.ContentBoolean:
                                    if (this.Value === true) {
                                        label = 'True';
                                    }
                                    else {
                                        label = 'False';
                                    }
                                    break;
                                case FlowField_2.eContentType.ContentDateTime:
                                    var d = Date.parse(this.Value);
                                    if (!isNaN(d)) {
                                        var dt = new Date(d);
                                        if (label.length <= 10) {
                                            return dt.toLocaleDateString();
                                        }
                                        else {
                                            return dt.toLocaleString();
                                        }
                                    }
                                    break;
                                default:
                                    label = FlowField_2.eContentType[this.ContentType];
                                    break;
                            }
                        }
                        else {
                            label = 'Undefined';
                        }
                        return label;
                    },
                    enumerable: true,
                    configurable: true
                });
                return FlowObjectDataProperty;
            }());
            exports_4("FlowObjectDataProperty", FlowObjectDataProperty);
        }
    };
});
System.register("FlowObjectData", ["FlowObjectDataProperty"], function (exports_5, context_5) {
    "use strict";
    var FlowObjectDataProperty_1, FlowObjectData;
    var __moduleName = context_5 && context_5.id;
    return {
        setters: [
            function (FlowObjectDataProperty_1_1) {
                FlowObjectDataProperty_1 = FlowObjectDataProperty_1_1;
            }
        ],
        execute: function () {
            FlowObjectData = /** @class */ (function () {
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
                        for (var _i = 0, _a = objectData.properties; _i < _a.length; _i++) {
                            var property = _a[_i];
                            this.Properties[property.developerName] = new FlowObjectDataProperty_1.FlowObjectDataProperty(property);
                        }
                    }
                }
                Object.defineProperty(FlowObjectData.prototype, "developerName", {
                    get: function () {
                        return this.DeveloperName;
                    },
                    set: function (developerName) {
                        this.DeveloperName = developerName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectData.prototype, "externalId", {
                    get: function () {
                        return this.ExternalId;
                    },
                    set: function (externalId) {
                        this.ExternalId = externalId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectData.prototype, "internalId", {
                    get: function () {
                        return this.InternalId;
                    },
                    set: function (internalId) {
                        this.InternalId = internalId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectData.prototype, "isSelected", {
                    get: function () {
                        return this.IsSelected;
                    },
                    set: function (isSelected) {
                        this.IsSelected = isSelected;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectData.prototype, "order", {
                    get: function () {
                        return this.Order;
                    },
                    set: function (order) {
                        this.Order = order;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectData.prototype, "typeElementId", {
                    get: function () {
                        return this.TypeElementId;
                    },
                    set: function (typeElementId) {
                        this.TypeElementId = typeElementId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowObjectData.prototype, "properties", {
                    get: function () {
                        return this.Properties;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlowObjectData.newInstance = function (developerName) {
                    var data = {
                        developerName: developerName,
                        externalId: "",
                        internalId: manywho.utils.guid(),
                        isSelected: true,
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
                FlowObjectData.prototype.iObjectData = function () {
                    var props = [];
                    for (var _i = 0, _a = Object.keys(this.properties); _i < _a.length; _i++) {
                        var key = _a[_i];
                        props.push(this.properties[key].iFlowObjectDataProperty());
                    }
                    var objectData = {
                        developerName: this.developerName,
                        externalId: this.externalId,
                        internalId: this.internalId,
                        isSelected: this.isSelected,
                        order: this.order,
                        properties: props,
                        typeElementId: this.TypeElementId
                    };
                    return objectData;
                };
                FlowObjectData.prototype.iFlowObjectDataArray = function () {
                    var output = [];
                    output.push(this.iObjectData());
                    return output;
                };
                return FlowObjectData;
            }());
            exports_5("FlowObjectData", FlowObjectData);
        }
    };
});
System.register("FlowField", ["FlowObjectData", "FlowObjectDataArray"], function (exports_6, context_6) {
    "use strict";
    var FlowObjectData_3, FlowObjectDataArray_2, eContentType, FlowField;
    var __moduleName = context_6 && context_6.id;
    return {
        setters: [
            function (FlowObjectData_3_1) {
                FlowObjectData_3 = FlowObjectData_3_1;
            },
            function (FlowObjectDataArray_2_1) {
                FlowObjectDataArray_2 = FlowObjectDataArray_2_1;
            }
        ],
        execute: function () {
            (function (eContentType) {
                eContentType[eContentType["unknown"] = 0] = "unknown";
                eContentType[eContentType["ContentString"] = 1] = "ContentString";
                eContentType[eContentType["ContentNumber"] = 2] = "ContentNumber";
                eContentType[eContentType["ContentObject"] = 3] = "ContentObject";
                eContentType[eContentType["ContentBoolean"] = 4] = "ContentBoolean";
                eContentType[eContentType["ContentList"] = 5] = "ContentList";
                eContentType[eContentType["ContentPassword"] = 6] = "ContentPassword";
                eContentType[eContentType["ContentContent"] = 7] = "ContentContent";
                eContentType[eContentType["ContentDateTime"] = 8] = "ContentDateTime";
                eContentType[eContentType["ContentEncrypted"] = 9] = "ContentEncrypted";
            })(eContentType || (eContentType = {}));
            exports_6("eContentType", eContentType);
            FlowField = /** @class */ (function () {
                function FlowField(field) {
                    this.ContentType = eContentType.unknown;
                    this.DeveloperName = "";
                    this.TypeElementDeveloperName = "";
                    this.TypeElementId = "";
                    this.TypeElementPropertyDeveloperName = "";
                    this.TypeElementPropertyId = "";
                    this.ValueElementId = "";
                    if (field) {
                        this.ContentType = eContentType[field.contentType];
                        this.DeveloperName = field.developerName;
                        this.TypeElementDeveloperName = field.typeElementDeveloperName;
                        this.TypeElementId = field.typeElementId;
                        this.TypeElementPropertyDeveloperName = field.typeElementPropertyDeveloperName;
                        this.TypeElementPropertyId = field.typeElementPropertyId;
                        this.ValueElementId = field.valueElementId;
                        switch (this.ContentType) {
                            case eContentType.ContentObject:
                                this.Value = field.objectData ? new FlowObjectData_3.FlowObjectData(field.objectData) : undefined;
                                break;
                            case eContentType.ContentList:
                                this.Value = field.objectData && field.objectData[0] ? new FlowObjectDataArray_2.FlowObjectDataArray(field.objectData) : new FlowObjectDataArray_2.FlowObjectDataArray([]);
                                break;
                            default:
                                this.Value = field.contentValue;
                                break;
                        }
                    }
                }
                Object.defineProperty(FlowField.prototype, "contentType", {
                    get: function () {
                        return this.ContentType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowField.prototype, "developerName", {
                    get: function () {
                        return this.DeveloperName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowField.prototype, "typeElementDeveloperName", {
                    get: function () {
                        return this.TypeElementDeveloperName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowField.prototype, "typeElementId", {
                    get: function () {
                        return this.TypeElementId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowField.prototype, "typeElementPropertyDeveloperName", {
                    get: function () {
                        return this.TypeElementPropertyDeveloperName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowField.prototype, "typeElementPropertyId", {
                    get: function () {
                        return this.TypeElementPropertyId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowField.prototype, "valueElementId", {
                    get: function () {
                        return this.ValueElementId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowField.prototype, "value", {
                    get: function () {
                        return this.Value;
                    },
                    set: function (value) {
                        this.Value = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlowField.prototype.iFlowField = function () {
                    var contentValue = "";
                    var objectData = [];
                    switch (this.ContentType) {
                        case eContentType.ContentObject:
                            var od = this.Value;
                            objectData.push(od.iObjectData());
                            break;
                        case eContentType.ContentList:
                            var oda = this.Value;
                            objectData = oda.iFlowObjectDataArray();
                            break;
                        default:
                            contentValue = this.Value ? this.Value : "";
                            break;
                    }
                    var output = {
                        contentType: eContentType[this.ContentType],
                        contentValue: contentValue,
                        developerName: this.DeveloperName,
                        objectData: objectData,
                        typeElementDeveloperName: this.TypeElementDeveloperName,
                        typeElementId: this.TypeElementId,
                        typeElementPropertyDeveloperName: this.TypeElementPropertyDeveloperName,
                        typeElementPropertyId: this.TypeElementPropertyId,
                        valueElementId: this.ValueElementId,
                    };
                    return output;
                };
                return FlowField;
            }());
            exports_6("FlowField", FlowField);
        }
    };
});
System.register("FlowDisplayColumn", ["FlowField"], function (exports_7, context_7) {
    "use strict";
    var FlowField_3, FlowDisplayColumn;
    var __moduleName = context_7 && context_7.id;
    return {
        setters: [
            function (FlowField_3_1) {
                FlowField_3 = FlowField_3_1;
            }
        ],
        execute: function () {
            FlowDisplayColumn = /** @class */ (function () {
                function FlowDisplayColumn(column) {
                    this.Column = column;
                    this.ComponentType = column.componentType;
                    this.ContentFormat = column.contentFormat;
                    this.ContentType = FlowField_3.eContentType[column.contentType];
                    this.DeveloperName = column.developerName;
                    this.DisplayOrder = column.order;
                    this.Label = column.label;
                    this.ReadOnly = !column.isEditable;
                    this.TypeElememtPropertyToDisplayId = column.typeElememtPropertyToDisplayId;
                    this.TypeElementPropertyId = column.typeElementPropertyId;
                    this.Visible = column.isDisplayValue;
                }
                Object.defineProperty(FlowDisplayColumn.prototype, "componentType", {
                    get: function () {
                        return this.ComponentType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowDisplayColumn.prototype, "contentFormat", {
                    get: function () {
                        return this.ContentFormat;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowDisplayColumn.prototype, "contentType", {
                    get: function () {
                        return this.ContentType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowDisplayColumn.prototype, "developerName", {
                    get: function () {
                        return this.DeveloperName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowDisplayColumn.prototype, "visible", {
                    get: function () {
                        return this.Visible;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowDisplayColumn.prototype, "readOnly", {
                    get: function () {
                        return this.ReadOnly;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowDisplayColumn.prototype, "label", {
                    get: function () {
                        return this.Label;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowDisplayColumn.prototype, "displayOrder", {
                    get: function () {
                        return this.DisplayOrder;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowDisplayColumn.prototype, "typeElementPropertyId", {
                    get: function () {
                        return this.TypeElementPropertyId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowDisplayColumn.prototype, "typeElememtPropertyToDisplayId", {
                    get: function () {
                        return this.TypeElememtPropertyToDisplayId;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlowDisplayColumn.prototype.iFlowDisplayColumn = function () {
                    return this.Column;
                };
                return FlowDisplayColumn;
            }());
            exports_7("FlowDisplayColumn", FlowDisplayColumn);
        }
    };
});
System.register("FlowOutcome", ["FlowAttribute"], function (exports_8, context_8) {
    "use strict";
    var FlowAttribute_1, ePageActionBindingType, ePageActionType, FlowOutcome;
    var __moduleName = context_8 && context_8.id;
    return {
        setters: [
            function (FlowAttribute_1_1) {
                FlowAttribute_1 = FlowAttribute_1_1;
            }
        ],
        execute: function () {
            (function (ePageActionBindingType) {
                ePageActionBindingType["Save"] = "SAVE";
                ePageActionBindingType["PartialSave"] = "PARTIAL_SAVE";
                ePageActionBindingType["NoSave"] = "NO_SAVE";
            })(ePageActionBindingType || (ePageActionBindingType = {}));
            exports_8("ePageActionBindingType", ePageActionBindingType);
            (function (ePageActionType) {
                ePageActionType["New"] = "NEW";
                ePageActionType["Query"] = "QUERY";
                ePageActionType["Insert"] = "INSERT";
                ePageActionType["Update"] = "UPDATE";
                ePageActionType["Upsert"] = "UPSERT";
                ePageActionType["Delete"] = "DELETE";
                ePageActionType["Remove"] = "REMOVE";
                ePageActionType["Add"] = "ADD";
                ePageActionType["Edit"] = "EDIT";
                ePageActionType["Next"] = "NEXT";
                ePageActionType["Back"] = "BACK";
                ePageActionType["Done"] = "DONE";
                ePageActionType["Save"] = "SAVE";
                ePageActionType["Cancel"] = "CANCEL";
                ePageActionType["Apply"] = "APPLY";
                ePageActionType["Import"] = "IMPORT";
                ePageActionType["Close"] = "CLOSE";
                ePageActionType["Open"] = "OPEN";
                ePageActionType["Submit"] = "SUBMIT";
                ePageActionType["Escalate"] = "ESCALATE";
                ePageActionType["Reject"] = "REJECT";
                ePageActionType["Delegate"] = "DELEGATE";
            })(ePageActionType || (ePageActionType = {}));
            exports_8("ePageActionType", ePageActionType);
            FlowOutcome = /** @class */ (function () {
                function FlowOutcome(outcome) {
                    this.DeveloperName = outcome.developerName;
                    this.Id = outcome.id;
                    this.IsBulkAction = outcome.isBulkAction;
                    this.IsOut = outcome.isOut;
                    this.Label = outcome.label;
                    this.Order = outcome.order;
                    this.PageActionBindingType = outcome.pageActionBindingType;
                    this.PageActionType = outcome.pageActionType;
                    this.PageObjectBindingId = outcome.pageObjectBindingId;
                    this.Attributes = {};
                    if (outcome.attributes) {
                        for (var _i = 0, _a = Object.keys(outcome.attributes); _i < _a.length; _i++) {
                            var key = _a[_i];
                            this.Attributes[key] = new FlowAttribute_1.FlowAttribute(key, outcome.attributes[key]);
                        }
                    }
                    this.Outcome = outcome;
                }
                Object.defineProperty(FlowOutcome.prototype, "developerName", {
                    get: function () {
                        return this.DeveloperName;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowOutcome.prototype, "id", {
                    get: function () {
                        return this.Id;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowOutcome.prototype, "isBulkAction", {
                    get: function () {
                        return this.IsBulkAction;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowOutcome.prototype, "isOut", {
                    get: function () {
                        return this.IsOut;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowOutcome.prototype, "label", {
                    get: function () {
                        return this.Label;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowOutcome.prototype, "order", {
                    get: function () {
                        return this.Order;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowOutcome.prototype, "pageActionBindingType", {
                    get: function () {
                        return this.PageActionBindingType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowOutcome.prototype, "pageActionType", {
                    get: function () {
                        return this.PageActionType;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowOutcome.prototype, "pageObjectBindingId", {
                    get: function () {
                        return this.PageObjectBindingId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowOutcome.prototype, "attributes", {
                    get: function () {
                        return this.Attributes;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlowOutcome.prototype.iFlowOutcome = function () {
                    return this.Outcome;
                };
                return FlowOutcome;
            }());
            exports_8("FlowOutcome", FlowOutcome);
        }
    };
});
System.register("FlowBaseComponent", ["react", "EventManager", "FlowAttribute", "FlowDisplayColumn", "FlowField", "FlowObjectData", "FlowObjectDataArray", "FlowOutcome"], function (exports_9, context_9) {
    "use strict";
    var React, FlowAttribute_2, FlowDisplayColumn_1, FlowField_4, FlowObjectData_4, FlowObjectDataArray_3, FlowOutcome_1, throttle, eLoadingState, FlowBaseComponent;
    var __moduleName = context_9 && context_9.id;
    return {
        setters: [
            function (React_1) {
                React = React_1;
            },
            function (_1) {
            },
            function (FlowAttribute_2_1) {
                FlowAttribute_2 = FlowAttribute_2_1;
            },
            function (FlowDisplayColumn_1_1) {
                FlowDisplayColumn_1 = FlowDisplayColumn_1_1;
            },
            function (FlowField_4_1) {
                FlowField_4 = FlowField_4_1;
            },
            function (FlowObjectData_4_1) {
                FlowObjectData_4 = FlowObjectData_4_1;
            },
            function (FlowObjectDataArray_3_1) {
                FlowObjectDataArray_3 = FlowObjectDataArray_3_1;
            },
            function (FlowOutcome_1_1) {
                FlowOutcome_1 = FlowOutcome_1_1;
            }
        ],
        execute: function () {
            //import { IComponentProps, IManywho, IObjectData } from './interfaces';
            //import { IComponentValue } from './interfaces/services/state';
            //import {throttle} from 'lodash';
            throttle = require('lodash.throttle');
            /*
            if (!(manywho as any).eventManager) {
                (manywho as any).eventManager = {};
                (manywho as any).eventManager.beforeSendListeners = {};
                (manywho as any).eventManager.doneListeners = {};
                (manywho as any).eventManager.failListeners = {};
                (manywho as any).eventManager.outcomeBeingTriggered;
            
                (manywho as any).eventManager.beforeSend = (xhr: XMLHttpRequest, request: any) => {
                    //(manywho as any).eventManager.beforeSendListeners.forEach((listener: any) => listener(xhr, request));
                    for(const key in (manywho as any).eventManager.beforeSendListeners )
                    {
                        (manywho as any).eventManager.beforeSendListeners[key](xhr, request);
                    }
                };
            
                (manywho as any).eventManager.done = (xhr: XMLHttpRequest, request: any) => {
                    //(manywho as any).eventManager.doneListeners.forEach((listener: any) => listener(xhr, request));
                    for(const key in (manywho as any).eventManager.doneListeners )
                    {
                        (manywho as any).eventManager.doneListeners[key](xhr, request);
                    }
                };
            
                (manywho as any).eventManager.fail = (xhr: XMLHttpRequest, request: any) => {
                    //(manywho as any).eventManager.failListeners.forEach((listener: any) => listener(xhr, request));
                    for(const key in (manywho as any).eventManager.failListeners )
                    {
                        (manywho as any).eventManager.failListeners[key](xhr, request);
                    }
                };
            
                (manywho as any).eventManager.addBeforeSendListener = (handler: (xhr: XMLHttpRequest, request: any) => void, componentId: string) => {
                    (manywho as any).eventManager.beforeSendListeners[componentId] = handler;
                };
            
                (manywho as any).eventManager.removeBeforeSendListener = (componentId: string) => {
                    delete (manywho as any).eventManager.beforeSendListeners[componentId];
                };
            
                (manywho as any).eventManager.addDoneListener = (handler: (xhr: XMLHttpRequest, request: any) => void, componentId: string) => {
                    (manywho as any).eventManager.doneListeners[componentId] = handler;
                };
            
                (manywho as any).eventManager.removeDoneListener = (componentId: string) => {
                    delete (manywho as any).eventManager.doneListeners[componentId];
                };
            
                (manywho as any).eventManager.addFailListener = (handler: (xhr: XMLHttpRequest, request: any) => void, componentId: string) => {
                    (manywho as any).eventManager.failListeners[componentId] = handler;
                };
            
                (manywho as any).eventManager.removeFailListener = (componentId: string) => {
                    delete (manywho as any).eventManager.failListeners[componentId];
                };
            
                manywho.settings.initialize(null, {
                    invoke: {
                        beforeSend: (manywho as any).eventManager.beforeSend,
                        done: (manywho as any).eventManager.done,
                        fail: (manywho as any).eventManager.fail,
                    },
                });
            }
            */
            (function (eLoadingState) {
                eLoadingState[eLoadingState["ready"] = 0] = "ready";
                eLoadingState[eLoadingState["loading"] = 1] = "loading";
                eLoadingState[eLoadingState["saving"] = 2] = "saving";
                eLoadingState[eLoadingState["moving"] = 3] = "moving";
                eLoadingState[eLoadingState["inititializing"] = 4] = "inititializing";
                eLoadingState[eLoadingState["inititialized"] = 5] = "inititialized";
                eLoadingState[eLoadingState["mounting"] = 6] = "mounting";
                eLoadingState[eLoadingState["mounted"] = 7] = "mounted";
            })(eLoadingState || (eLoadingState = {}));
            exports_9("eLoadingState", eLoadingState);
            //export type eLoadingState = "ready" | "loading" | "saving" | "moving" | "inititializing" | "inititialized" | "mounting" | "mounted";
            FlowBaseComponent = /** @class */ (function (_super) {
                __extends(FlowBaseComponent, _super);
                function FlowBaseComponent(props) {
                    var _this = _super.call(this, props) || this;
                    _this.Fields = {};
                    _this.Attributes = {};
                    _this.Outcomes = {};
                    //sends a collaboration message but limited to 1 call every 100ms
                    _this.sendCollaborationMessage = throttle(_this._sendCollaborationMessage, 100, null);
                    _this.Fields = {};
                    _this.LoadingState = eLoadingState.inititializing;
                    _this.loadValues = _this.loadValues.bind(_this);
                    _this.dontLoadValues = _this.dontLoadValues.bind(_this);
                    _this.updateValues = _this.updateValues.bind(_this);
                    _this.triggerOutcome = _this.triggerOutcome.bind(_this);
                    _this.ComponentId = _this.props.id;
                    _this.ParentId = _this.props.parentId;
                    _this.FlowKey = _this.props.flowKey;
                    _this.Attributes = {};
                    _this.loadModel = _this.loadModel.bind(_this);
                    _this.loadAttributes = _this.loadAttributes.bind(_this);
                    _this.loadOutcomes = _this.loadOutcomes.bind(_this);
                    _this.receiveMessage = _this.receiveMessage.bind(_this);
                    _this.getStateValue = _this.getStateValue.bind(_this);
                    _this.setStateValue = _this.setStateValue.bind(_this);
                    _this.getStateValueType = _this.getStateValueType.bind(_this);
                    _this.sendCollaborationMessage = _this.sendCollaborationMessage.bind(_this);
                    _this.onBeforeSend = _this.onBeforeSend.bind(_this);
                    _this.onDone = _this.onDone.bind(_this);
                    _this.calculateValue = _this.calculateValue.bind(_this);
                    window.addEventListener('message', _this.receiveMessage, false);
                    _this.loadModel();
                    _this.loadAttributes();
                    _this.loadOutcomes();
                    var baseUrl = manywho.settings.global('platform.uri') || window.location.origin || 'https://flow.manywho.com';
                    _this.StateId = manywho.utils.extractStateId(_this.props.flowKey);
                    _this.TenantId = manywho.utils.extractTenantId(_this.props.flowKey);
                    _this.url = baseUrl + "/api/run/1/state/" + _this.StateId + "/values";
                    _this.userurl = baseUrl + "/api/run/1/state/" + _this.StateId + "/values/03dc41dd-1c6b-4b33-bf61-cbd1d0778fff";
                    _this.valueurl = baseUrl + "/api/run/1/state/" + _this.StateId + "/values/name";
                    _this.LoadingState = eLoadingState.inititialized;
                    return _this;
                }
                Object.defineProperty(FlowBaseComponent.prototype, "tenantId", {
                    get: function () {
                        return this.TenantId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "stateId", {
                    get: function () {
                        return this.StateId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "flowKey", {
                    get: function () {
                        return this.FlowKey;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "componentId", {
                    get: function () {
                        return this.ComponentId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "parentId", {
                    get: function () {
                        return this.ParentId;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "isReady", {
                    get: function () {
                        if (this.LoadingState === eLoadingState.ready) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "loadingState", {
                    get: function () {
                        return this.LoadingState;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "outcomes", {
                    get: function () {
                        return this.Outcomes;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "attributes", {
                    get: function () {
                        return this.Attributes;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "fields", {
                    get: function () {
                        return this.Fields;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "model", {
                    get: function () {
                        return this.Model;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "user", {
                    get: function () {
                        return this.User;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "joinURI", {
                    get: function () {
                        return window.location.href;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(FlowBaseComponent.prototype, "isDesignTime", {
                    get: function () {
                        return this.IsDesignTime;
                    },
                    enumerable: true,
                    configurable: true
                });
                FlowBaseComponent.prototype.getAttribute = function (attributeName, defaultValue) {
                    if (this.attributes[attributeName]) {
                        return this.attributes[attributeName].value;
                    }
                    else {
                        return defaultValue || '';
                    }
                };
                FlowBaseComponent.prototype.onBeforeSend = function (xhr, request) {
                    if (request) {
                        var oc = this.getOutcomeById(request.mapElementInvokeRequest.selectedOutcomeId);
                        var oct = manywho.eventManager.outcomeBeingTriggered;
                        if (oc) {
                            if (!oct || oct.id !== oc.id) {
                                manywho.eventManager.outcomeBeingTriggered = oc;
                            }
                        }
                    }
                    else {
                        manywho.eventManager.outcomeBeingTriggered = undefined;
                    }
                };
                // this takes a string containing either a literal value or the name of a field surrounded with {{..}}
                // if it's literal it just returns otherwise it gets the value.
                // it can go down levels like val.attribute.subval etc
                // NOTE: there's a good chance timing wise that there are no fields yet
                // so we just return value if any errors are encountered like val === null
                FlowBaseComponent.prototype.calculateValue = function (value) {
                    return __awaiter(this, void 0, void 0, function () {
                        var stripped, val, result, strippedBits, pos, ele;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(value.startsWith('{{') && value.endsWith('}}'))) return [3 /*break*/, 7];
                                    stripped = value.replace('{{', '');
                                    stripped = stripped.replace('}}', '');
                                    val = void 0;
                                    result = '';
                                    strippedBits = stripped.split('.');
                                    pos = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(pos < strippedBits.length)) return [3 /*break*/, 6];
                                    if (!(pos === 0)) return [3 /*break*/, 4];
                                    if (!!this.fields[strippedBits[pos]]) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.loadValue(strippedBits[pos])];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    val = this.fields[strippedBits[pos]];
                                    if (!val) {
                                        console.log('The Value [' + strippedBits[pos] + '] was not found, have you included it in your flow');
                                        result = value;
                                    }
                                    else {
                                        if (val.ContentType !== FlowField_4.eContentType.ContentObject && val.ContentType !== FlowField_4.eContentType.ContentList) {
                                            result = val.value;
                                        }
                                    }
                                    return [3 /*break*/, 5];
                                case 4:
                                    // did bits 0 get a val?
                                    if (val) {
                                        ele = val.value.properties[strippedBits[pos]];
                                        if (ele) {
                                            if (ele.contentType === FlowField_4.eContentType.ContentObject || ele.contentType === FlowField_4.eContentType.ContentList) {
                                                val = val.value.properties[strippedBits[pos]].value;
                                            }
                                            else {
                                                result = val.value.properties[strippedBits[pos]].value;
                                            }
                                        }
                                        else {
                                            result = value;
                                        }
                                    }
                                    else {
                                        result = value;
                                    }
                                    _a.label = 5;
                                case 5:
                                    pos++;
                                    return [3 /*break*/, 1];
                                case 6: return [2 /*return*/, result];
                                case 7: return [2 /*return*/, value];
                            }
                        });
                    });
                };
                FlowBaseComponent.prototype.onDone = function (xhr, request) {
                    var _this = this;
                    if (manywho.eventManager.outcomeBeingTriggered && manywho.eventManager.outcomeBeingTriggered.attributes) {
                        var outcome_1 = manywho.eventManager.outcomeBeingTriggered;
                        Object.keys(manywho.eventManager.outcomeBeingTriggered.attributes).forEach(function (key) { return __awaiter(_this, void 0, void 0, function () {
                            var attr, targetUrl, _a, url, wnd, url, wnd;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        attr = manywho.eventManager.outcomeBeingTriggered.attributes[key];
                                        _a = attr.name.toLowerCase();
                                        switch (_a) {
                                            case "autoclose": return [3 /*break*/, 1];
                                            case "autoopen": return [3 /*break*/, 2];
                                            case "autonav": return [3 /*break*/, 6];
                                            case "automove": return [3 /*break*/, 6];
                                            case "autoprint": return [3 /*break*/, 10];
                                        }
                                        return [3 /*break*/, 11];
                                    case 1:
                                        if (attr.value.toLowerCase() === "true") {
                                            window.close();
                                        }
                                        return [3 /*break*/, 11];
                                    case 2:
                                        targetUrl = outcome_1.attributes.AutoOpenUrl || undefined;
                                        if (!(targetUrl && targetUrl.value.length > 0)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.calculateValue(targetUrl.value)];
                                    case 3:
                                        url = _b.sent();
                                        wnd = window.open(url, "_blank");
                                        return [3 /*break*/, 5];
                                    case 4:
                                        alert("No 'AutoOpenUrl' specified in the outcome's attributes");
                                        _b.label = 5;
                                    case 5: return [3 /*break*/, 11];
                                    case 6:
                                        targetUrl = outcome_1.attributes.AutoNavUrl || undefined;
                                        if (!(targetUrl && targetUrl.value.length > 0)) return [3 /*break*/, 8];
                                        return [4 /*yield*/, this.calculateValue(targetUrl.value)];
                                    case 7:
                                        url = _b.sent();
                                        wnd = window.open(url, "_blank");
                                        return [3 /*break*/, 9];
                                    case 8:
                                        alert("No 'AutoNavUrl' specified in the outcome's attributes");
                                        _b.label = 9;
                                    case 9: return [3 /*break*/, 11];
                                    case 10:
                                        window.print();
                                        return [3 /*break*/, 11];
                                    case 11: return [2 /*return*/];
                                }
                            });
                        }); });
                    }
                    //turn of moving flag
                    this.LoadingState = eLoadingState.ready;
                    manywho.eventManager.outcomeBeingTriggered = undefined;
                };
                FlowBaseComponent.prototype.componentDidMount = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var flowModel, flowState, _a, objectData, listData;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.LoadingState = eLoadingState.mounting;
                                    //add outcome manager stuff
                                    manywho.eventManager.addDoneListener(this.onDone, this.componentId + "_core");
                                    manywho.eventManager.addBeforeSendListener(this.onBeforeSend, this.componentId + "_core");
                                    flowModel = manywho.model.getComponent(this.ComponentId, this.FlowKey);
                                    flowState = manywho.state.getComponent(this.componentId, this.flowKey) || {};
                                    _a = flowModel.contentType;
                                    switch (_a) {
                                        case 'ContentObject': return [3 /*break*/, 1];
                                        case 'ContentList': return [3 /*break*/, 4];
                                    }
                                    return [3 /*break*/, 7];
                                case 1:
                                    objectData = void 0;
                                    if (!(flowState.objectData && flowState.objectData.length > 0)) return [3 /*break*/, 3];
                                    objectData = flowState.objectData;
                                    objectData = JSON.parse(JSON.stringify(objectData));
                                    return [4 /*yield*/, this.setStateValue(new FlowObjectData_4.FlowObjectData(objectData), true)];
                                case 2:
                                    _b.sent();
                                    _b.label = 3;
                                case 3: 
                                //else {
                                //    objectData = flowModel.objectData;
                                //}
                                //manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                                return [3 /*break*/, 9];
                                case 4:
                                    listData = void 0;
                                    if (!(flowState.objectData && flowState.objectData.length > 0)) return [3 /*break*/, 6];
                                    listData = flowState.objectData;
                                    listData = JSON.parse(JSON.stringify(listData));
                                    return [4 /*yield*/, this.setStateValue(new FlowObjectDataArray_3.FlowObjectDataArray(listData), true)];
                                case 5:
                                    _b.sent();
                                    _b.label = 6;
                                case 6: 
                                //else {
                                //    listData = flowModel.objectData
                                //}
                                //manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                                return [3 /*break*/, 9];
                                case 7: return [4 /*yield*/, this.setStateValue(flowModel.contentValue, true)];
                                case 8:
                                    _b.sent();
                                    //flowState.contentValue = flowModel.contentValue;
                                    return [3 /*break*/, 9];
                                case 9:
                                    this.LoadingState = eLoadingState.mounted;
                                    manywho.utils.removeLoadingIndicator('loader');
                                    return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    });
                };
                FlowBaseComponent.prototype.componentWillUnmount = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            manywho.eventManager.removeBeforeSendListener(this.componentId + "_core");
                            manywho.eventManager.removeDoneListener(this.componentId + "_core");
                            return [2 /*return*/, Promise.resolve()];
                        });
                    });
                };
                FlowBaseComponent.prototype.loadOutcome = function (outcomeId) {
                    if (outcomeId) {
                        var outcome = manywho.model.getOutcome(outcomeId, this.props.flowKey);
                        if (outcome) {
                            this.Outcomes[outcome.developerName] = new FlowOutcome_1.FlowOutcome(outcome);
                            return this.Outcomes[outcome.developerName];
                        }
                    }
                };
                FlowBaseComponent.prototype.loadOutcomes = function () {
                    this.Outcomes = {};
                    // add the outcomes from this component
                    var outs = manywho.model.getOutcomes(this.props.id, this.props.flowKey);
                    for (var _i = 0, outs_1 = outs; _i < outs_1.length; _i++) {
                        var outcome = outs_1[_i];
                        this.Outcomes[outcome.developerName] = new FlowOutcome_1.FlowOutcome(outcome);
                    }
                    // and the ones from the parent page
                    outs = manywho.model.getOutcomes('', this.props.flowKey);
                    for (var _a = 0, outs_2 = outs; _a < outs_2.length; _a++) {
                        var outcome = outs_2[_a];
                        this.Outcomes[outcome.developerName] = new FlowOutcome_1.FlowOutcome(outcome);
                    }
                };
                FlowBaseComponent.prototype.getOutcomeById = function (outcomeId) {
                    var _this = this;
                    var oc;
                    Object.keys(this.outcomes).forEach(function (key) {
                        if (_this.outcomes[key].id === outcomeId) {
                            oc = _this.outcomes[key];
                        }
                    });
                    if (!oc) {
                        oc = this.loadOutcome(outcomeId);
                    }
                    return oc;
                };
                FlowBaseComponent.prototype.loadAttributes = function () {
                    var model = manywho.model.getComponent(this.ComponentId, this.FlowKey);
                    // add the attributes
                    var attrs = model.attributes;
                    if (attrs) {
                        for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
                            var key = _a[_i];
                            this.Attributes[key] = new FlowAttribute_2.FlowAttribute(key, attrs[key]);
                        }
                    }
                };
                FlowBaseComponent.prototype.loadModel = function () {
                    var model = manywho.model.getComponent(this.ComponentId, this.FlowKey);
                    if (model) {
                        this.Model = {
                            contentType: model.contentType,
                            dataSource: new FlowObjectDataArray_3.FlowObjectDataArray([]),
                            developerName: model.developerName,
                            displayColumns: [],
                            enabled: model.isEnabled,
                            height: model.height,
                            helpInfo: model.helpInfo,
                            hintInfo: model.hintValue,
                            joinUri: this.joinURI,
                            label: model.label,
                            maxSize: model.maxSize,
                            multiSelect: model.isMultiSelect,
                            readOnly: !model.isEditable,
                            required: model.isRequired,
                            size: model.size,
                            validationMessage: model.validationMessage,
                            visible: model.isVisible,
                            width: model.width,
                        };
                        // get the datasource value name
                        var ds = model.objectData;
                        if (ds) {
                            for (var _i = 0, ds_1 = ds; _i < ds_1.length; _i++) {
                                var od = ds_1[_i];
                                this.Model.dataSource.addItem(new FlowObjectData_4.FlowObjectData([od]));
                            }
                        }
                        var cols = model.columns;
                        if (cols) {
                            for (var _a = 0, cols_1 = cols; _a < cols_1.length; _a++) {
                                var col = cols_1[_a];
                                this.Model.displayColumns.push(new FlowDisplayColumn_1.FlowDisplayColumn(col));
                            }
                        }
                    }
                };
                FlowBaseComponent.prototype.loadValue = function (valueName) {
                    return __awaiter(this, void 0, void 0, function () {
                        var value;
                        return __generator(this, function (_a) {
                            this.LoadingState = eLoadingState.loading;
                            value = manywho.connection.request(this, "", this.valueurl + "/" + valueName, 'GET', this.TenantId, this.StateId, manywho.state.getAuthenticationToken(this.FlowKey), {});
                            if (value) {
                                this.Fields[value.developerName] = new FlowField_4.FlowField(value);
                            }
                            this.LoadingState = eLoadingState.ready;
                            return [2 /*return*/, Promise.resolve()];
                        });
                    });
                };
                FlowBaseComponent.prototype.getResultBodyText = function (response) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, response.text()
                                    .then(function (text) {
                                    if (text.startsWith("\"")) {
                                        text = text.substr(1);
                                    }
                                    if (text.endsWith("\"")) {
                                        text = text.substr(0, text.length - 1);
                                    }
                                    return text;
                                })];
                        });
                    });
                };
                FlowBaseComponent.prototype.callRequest = function (url, method, data, authenticationToken) {
                    return __awaiter(this, void 0, void 0, function () {
                        var results, request;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    results = [];
                                    request = {};
                                    request.method = method;
                                    request.headers = {
                                        "Content-Type": "application/json",
                                        "Authorization": authenticationToken,
                                        "ManyWhoTenant": this.tenantId
                                    };
                                    request.credentials = "same-origin";
                                    if (method === "POST" || method === "PUT") {
                                        request.body = data;
                                    }
                                    return [4 /*yield*/, fetch(url, request)
                                            .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                            var json, errorText;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!(response.status === 200)) return [3 /*break*/, 2];
                                                        return [4 /*yield*/, this.getResultBodyText(response)];
                                                    case 1:
                                                        json = _a.sent();
                                                        JSON.parse(json).forEach(function (value) {
                                                            results.push(value);
                                                        });
                                                        ;
                                                        console.log("Loaded Values");
                                                        return [2 /*return*/, results];
                                                    case 2: return [4 /*yield*/, this.getResultBodyText(response)];
                                                    case 3:
                                                        errorText = _a.sent();
                                                        console.log("Can't load values - " + errorText);
                                                        return [2 /*return*/, results];
                                                }
                                            });
                                        }); })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                FlowBaseComponent.prototype.callRequestOld = function (url, method, data) {
                    return __awaiter(this, void 0, void 0, function () {
                        var output, xhr;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, manywho.connection.request(this, null, url, method, this.TenantId, this.StateId, manywho.state.getAuthenticationToken(this.FlowKey), null)];
                                case 1:
                                    xhr = _a.sent();
                                    return [2 /*return*/, xhr];
                            }
                        });
                    });
                };
                FlowBaseComponent.prototype.loadValues = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var values, userval, u, props;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.LoadingState = eLoadingState.loading;
                                    this.Fields = {};
                                    return [4 /*yield*/, this.callRequestOld(this.url, 'GET', {})];
                                case 1:
                                    values = _a.sent();
                                    (values || []).map(function (value) {
                                        if (value) {
                                            _this.Fields[value.developerName] = new FlowField_4.FlowField(value);
                                        }
                                    });
                                    return [4 /*yield*/, this.callRequestOld(this.userurl, 'GET', {})];
                                case 2:
                                    userval = _a.sent();
                                    //manywho.connection.request(this, "", this.userurl , 'GET', this.TenantId, this.StateId, manywho.state.getAuthenticationToken(this.FlowKey), {});
                                    if (userval) {
                                        u = new FlowField_4.FlowField(userval);
                                        props = u.value.properties;
                                        this.User = {
                                            directoryId: props['Directory Id'].value,
                                            directoryName: props['Directory Name'].value,
                                            email: props['Email'].value || 'mark',
                                            firstName: props['First Name'].value,
                                            groupId: props['Primary Group Id'].value,
                                            groupName: props['Primary Group Name'].value,
                                            id: props['User ID'].value,
                                            ipAddress: props['IP Address'].value,
                                            language: props['Language'].value,
                                            lastName: props['Last Name'].value,
                                            location: props['Location'].value,
                                            roleId: props['Role Id'].value,
                                            roleName: props['Role Name'].value,
                                            status: props['Status'].value,
                                            userName: props['Username'].value,
                                        };
                                    }
                                    this.LoadingState = eLoadingState.ready;
                                    return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    });
                };
                FlowBaseComponent.prototype.dontLoadValues = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.LoadingState = eLoadingState.ready;
                            return [2 /*return*/, Promise.resolve()];
                        });
                    });
                };
                FlowBaseComponent.prototype.getStateValue = function () {
                    var flowState = manywho.state.getComponent(this.componentId, this.flowKey) || {};
                    var flowModel = manywho.model.getComponent(this.ComponentId, this.FlowKey);
                    switch (flowModel.contentType) {
                        case 'ContentObject':
                            return new FlowObjectData_4.FlowObjectData(flowState.objectData && flowState.objectData[0] ? flowState.objectData[0] : flowModel.objectData[0]);
                        case 'ContentList':
                            return new FlowObjectDataArray_3.FlowObjectDataArray(flowState.objectData ? flowState.objectData : flowModel.objectData);
                            break;
                        default:
                            return flowState.contentValue ? flowState.contentValue : "";
                            break;
                    }
                };
                FlowBaseComponent.prototype.getStateValueType = function () {
                    var flowState = manywho.state.getComponent(this.componentId, this.flowKey) || {};
                    var flowModel = manywho.model.getComponent(this.ComponentId, this.FlowKey);
                    switch (flowModel.contentType) {
                        case 'ContentObject':
                            return new FlowObjectData_4.FlowObjectData(flowState.objectData && flowState.objectData[0] ? flowState.objectData[0] : flowModel.objectData[0]);
                        case 'ContentList':
                            return new FlowObjectDataArray_3.FlowObjectDataArray(flowState.objectData ? flowState.objectData : flowModel.objectData);
                            break;
                        default:
                            return flowState.contentValue ? flowState.contentValue : "";
                            break;
                    }
                };
                FlowBaseComponent.prototype.setStateValue = function (value, ignoreState) {
                    return __awaiter(this, void 0, void 0, function () {
                        var oldState, flowModel, flowState, newState, objectData, objectDataArray;
                        return __generator(this, function (_a) {
                            if (this.LoadingState === eLoadingState.mounting || this.LoadingState === eLoadingState.ready) {
                                oldState = this.loadingState;
                                this.LoadingState = eLoadingState.saving;
                                flowModel = manywho.model.getComponent(this.ComponentId, this.FlowKey);
                                flowState = manywho.state.getComponent(this.componentId, this.flowKey) || {};
                                newState = void 0;
                                switch (flowModel.contentType) {
                                    case 'ContentObject':
                                        objectData = null;
                                        if (value) {
                                            objectData = value.iFlowObjectDataArray();
                                            objectData = JSON.parse(JSON.stringify(objectData));
                                        }
                                        newState = { "objectData": objectData };
                                        //newState = { objectData };
                                        manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                                        break;
                                    case 'ContentList':
                                        objectDataArray = null;
                                        if (value) {
                                            objectDataArray = value.iFlowObjectDataArray();
                                            objectDataArray = JSON.parse(JSON.stringify(objectDataArray));
                                        }
                                        newState = { "objectData": objectDataArray };
                                        manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                                        break;
                                    case 'ContentDate':
                                        newState = { "contentValue": value.toISOString() };
                                        manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                                        //flowState.contentValue = (value as Date).toISOString();
                                        break;
                                    default:
                                        newState = { "contentValue": value };
                                        manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                                        //flowState.contentValue = value as string;
                                        break;
                                }
                                this.LoadingState = oldState;
                                //manywho.component.handleEvent(this,manywho.model.getComponent(this.ComponentId,this.FlowKey),this.FlowKey,null);
                                //await manywho.engine.sync(this.flowKey);
                                if (manywho.collaboration.isInitialized(this.flowKey)) {
                                    //manywho.collaboration.sync(this.flowKey);
                                    //updateFields.forEach((field: IFlowField) => {
                                    //    manywho.collaboration.push(this.ComponentId,{"message": {"action":"REFRESH_FIELD","fieldName": field.developerName }},this.flowKey);
                                    //});
                                }
                            }
                            //manywho.component.handleEvent(this,manywho.model.getComponent(this.componentId, this.flowKey),this.FlowKey, this.eventHandled);
                            //manywho.engine.sync(this.flowKey);
                            return [2 /*return*/, Promise.resolve()];
                        });
                    });
                };
                FlowBaseComponent.prototype.eventHandled = function (a, b) {
                    console.log("ping");
                };
                FlowBaseComponent.prototype.updateValues = function (values) {
                    return __awaiter(this, void 0, void 0, function () {
                        var updateFields, _i, _a, field;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    this.LoadingState = eLoadingState.saving;
                                    updateFields = [];
                                    if (values.constructor.name === FlowField_4.FlowField.name) {
                                        updateFields.push(values.iFlowField());
                                    }
                                    else {
                                        for (_i = 0, _a = values; _i < _a.length; _i++) {
                                            field = _a[_i];
                                            updateFields.push(field.iFlowField());
                                        }
                                    }
                                    return [4 /*yield*/, manywho.connection.request(this, null, this.url, 'POST', this.TenantId, this.StateId, manywho.state.getAuthenticationToken(this.FlowKey), updateFields)];
                                case 1:
                                    _b.sent();
                                    //manywho.component.handleEvent(this,manywho.model.getComponent(this.ComponentId,this.FlowKey),this.FlowKey,null);
                                    //await manywho.engine.sync(this.flowKey);
                                    if (manywho.collaboration.isInitialized(this.flowKey)) {
                                        //manywho.collaboration.sync(this.flowKey);
                                        updateFields.forEach(function (field) {
                                            manywho.collaboration.push(_this.ComponentId, { "message": { "action": "REFRESH_FIELD", "fieldName": field.developerName } }, _this.flowKey);
                                        });
                                    }
                                    this.LoadingState = eLoadingState.ready;
                                    return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    });
                };
                FlowBaseComponent.prototype._sendCollaborationMessage = function (message) {
                    if (manywho.collaboration.isInitialized(this.flowKey)) {
                        //manywho.collaboration.sync(this.flowKey);
                        manywho.collaboration.push(this.ComponentId, { "message": message }, this.flowKey);
                    }
                };
                ;
                //triggers the specified outcome, optionally passes a data object 
                FlowBaseComponent.prototype.triggerOutcome = function (outcomeName, data) {
                    return __awaiter(this, void 0, void 0, function () {
                        var oc;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.LoadingState = eLoadingState.moving;
                                    //this.forceUpdate();
                                    if (!data) {
                                        data = [];
                                    }
                                    if (this.outcomes[outcomeName]) {
                                        oc = this.outcomes[outcomeName].iFlowOutcome();
                                    }
                                    if (!oc) return [3 /*break*/, 2];
                                    return [4 /*yield*/, manywho.component.onOutcome(oc, data, this.FlowKey)];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    this.log('Could not find outcome ' + outcomeName);
                                    _a.label = 3;
                                case 3: return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    });
                };
                //triggers the specified outcome, optionally passes a data object 
                FlowBaseComponent.prototype.moveTo = function (flowElementId, data) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            this.LoadingState = eLoadingState.moving;
                            //this.forceUpdate();
                            if (!data) {
                                data = [];
                            }
                            /*
                            let oc: any;
                            if (this.outcomes[outcomeName]) {
                                oc = this.outcomes[outcomeName].iFlowOutcome();
                            }
                    
                            if (oc) {
                                await manywho.component.onOutcome(oc, data, this.FlowKey);
                            } else {
                                this.log('Could not find outcome ' + outcomeName);
                            }
                            */
                            return [2 /*return*/, Promise.resolve()];
                        });
                    });
                };
                FlowBaseComponent.prototype.log = function (message) {
                    var now = new Date();
                    var time = [('0' + now.getHours()).slice(-2), ('0' + now.getMinutes()).slice(-2),
                        ('0' + now.getSeconds()).slice(-2)];
                    var timestamp = '[' + time.join(':') + '] ';
                    console.log(timestamp + message);
                };
                //helper to silently launch a flow
                FlowBaseComponent.prototype.launchFlowSilent = function (tenant, flowId, player, objectData) {
                    return __awaiter(this, void 0, void 0, function () {
                        var baseUrl, url, data;
                        return __generator(this, function (_a) {
                            baseUrl = manywho.settings.global('platform.uri') || 'https://flow.manywho.com';
                            url = baseUrl + "/api/run/1/state";
                            data = {};
                            data.id = flowId;
                            data.developerName = null;
                            data.inputs = objectData ? objectData.iFlowObjectDataArray() : null;
                            manywho.connection.request(this, "", url, 'POST', this.TenantId, "", manywho.state.getAuthenticationToken(this.FlowKey), data);
                            return [2 /*return*/, Promise.resolve()];
                        });
                    });
                };
                //helper to open a specific flow in a new tab
                FlowBaseComponent.prototype.launchFlowTab = function (tenant, flowId, player, objectData) {
                    return __awaiter(this, void 0, void 0, function () {
                        var baseUrl, url;
                        return __generator(this, function (_a) {
                            baseUrl = manywho.settings.global('platform.uri') || 'https://flow.boomi.com';
                            url = baseUrl + '/' + tenant + '/play/' + player + '?flow-id=' + flowId;
                            window.open(url, '_new');
                            return [2 /*return*/, Promise.resolve()];
                        });
                    });
                };
                //this will get triggered by the collaboration engine
                FlowBaseComponent.prototype.componentDidUpdate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var state, message, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    state = manywho.state.getComponent(this.componentId, this.flowKey);
                                    message = state.message;
                                    this.loadModel();
                                    if (message) {
                                        manywho.state.setComponent(this.componentId, { "message": {} }, this.flowKey, false);
                                    }
                                    if (!(message && message.action)) return [3 /*break*/, 6];
                                    _a = message.action.toUpperCase();
                                    switch (_a) {
                                        case 'REFRESH_FIELDS': return [3 /*break*/, 1];
                                        case 'REFRESH_FIELD': return [3 /*break*/, 3];
                                    }
                                    return [3 /*break*/, 5];
                                case 1: return [4 /*yield*/, this.loadValues()];
                                case 2:
                                    _b.sent();
                                    return [3 /*break*/, 6];
                                case 3: return [4 /*yield*/, this.loadValue(message.fieldName)];
                                case 4:
                                    _b.sent();
                                    return [3 /*break*/, 6];
                                case 5: return [3 /*break*/, 6];
                                case 6: return [2 /*return*/, message];
                            }
                        });
                    });
                };
                //this is used by other components who might want to send in a generic window message
                //nothing to do with collaboration
                FlowBaseComponent.prototype.receiveMessage = function (message) {
                    return __awaiter(this, void 0, void 0, function () {
                        var msg, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (!message.data) return [3 /*break*/, 9];
                                    msg = message.data;
                                    if (!msg.action) return [3 /*break*/, 9];
                                    _a = msg.action.toUpperCase();
                                    switch (_a) {
                                        case 'OUTCOME': return [3 /*break*/, 1];
                                        case 'REFRESH_FIELDS': return [3 /*break*/, 3];
                                        case 'REFRESH_FIELD': return [3 /*break*/, 5];
                                    }
                                    return [3 /*break*/, 7];
                                case 1: return [4 /*yield*/, this.triggerOutcome(msg.data)];
                                case 2:
                                    _b.sent();
                                    return [3 /*break*/, 9];
                                case 3: return [4 /*yield*/, this.loadValues()];
                                case 4:
                                    _b.sent();
                                    return [3 /*break*/, 9];
                                case 5: return [4 /*yield*/, this.loadValue(msg.fieldName)];
                                case 6:
                                    _b.sent();
                                    return [3 /*break*/, 9];
                                case 7: return [4 /*yield*/, this.handleMessage(msg)];
                                case 8:
                                    _b.sent();
                                    return [3 /*break*/, 9];
                                case 9: return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    });
                };
                FlowBaseComponent.prototype.handleMessage = function (msg) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            return [2 /*return*/, Promise.resolve()];
                        });
                    });
                };
                return FlowBaseComponent;
            }(React.Component));
            exports_9("FlowBaseComponent", FlowBaseComponent);
        }
    };
});
System.register("FlowComponent", ["FlowBaseComponent"], function (exports_10, context_10) {
    "use strict";
    var FlowBaseComponent_1, FlowComponent;
    var __moduleName = context_10 && context_10.id;
    return {
        setters: [
            function (FlowBaseComponent_1_1) {
                FlowBaseComponent_1 = FlowBaseComponent_1_1;
            }
        ],
        execute: function () {
            FlowComponent = /** @class */ (function (_super) {
                __extends(FlowComponent, _super);
                function FlowComponent(props) {
                    return _super.call(this, props) || this;
                }
                // the FlowPage automatically gets values
                FlowComponent.prototype.componentDidMount = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _super.prototype.componentDidMount.call(this)];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.dontLoadValues()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                FlowComponent.prototype.componentDidUpdate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _super.prototype.componentDidUpdate.call(this)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return FlowComponent;
            }(FlowBaseComponent_1.FlowBaseComponent));
            exports_10("FlowComponent", FlowComponent);
        }
    };
});
System.register("FlowPage", ["FlowBaseComponent"], function (exports_11, context_11) {
    "use strict";
    var FlowBaseComponent_2, FlowPage;
    var __moduleName = context_11 && context_11.id;
    return {
        setters: [
            function (FlowBaseComponent_2_1) {
                FlowBaseComponent_2 = FlowBaseComponent_2_1;
            }
        ],
        execute: function () {
            FlowPage = /** @class */ (function (_super) {
                __extends(FlowPage, _super);
                function FlowPage(props) {
                    var _this = _super.call(this, props) || this;
                    _this.reloadValues = _this.reloadValues.bind(_this);
                    return _this;
                }
                // the FlowPage automatically gets values
                FlowPage.prototype.componentDidMount = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _super.prototype.componentDidMount.call(this)];
                                case 1:
                                    _a.sent();
                                    manywho.eventManager.addDoneListener(this.reloadValues, this.componentId + "_PG");
                                    //since we are a page we now load all values
                                    return [4 /*yield*/, this.loadValues()];
                                case 2:
                                    //since we are a page we now load all values
                                    _a.sent();
                                    //this.forceUpdate();
                                    return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    });
                };
                FlowPage.prototype.componentDidUpdate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _super.prototype.componentDidUpdate.call(this)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                FlowPage.prototype.componentWillUnmount = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _super.prototype.componentWillUnmount.call(this)];
                                case 1:
                                    _a.sent();
                                    manywho.eventManager.removeDoneListener(this.componentId + "_PG");
                                    return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    });
                };
                //
                FlowPage.prototype.triggerOutcome = function (outcomeName, data) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, _super.prototype.triggerOutcome.call(this, outcomeName, data)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    });
                };
                FlowPage.prototype.reloadValues = function (xhr, request) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadModel()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.loadValues()];
                                case 2:
                                    _a.sent();
                                    return [4 /*yield*/, this.forceUpdate()];
                                case 3:
                                    _a.sent();
                                    return [2 /*return*/, Promise.resolve()];
                            }
                        });
                    });
                };
                return FlowPage;
            }(FlowBaseComponent_2.FlowBaseComponent));
            exports_11("FlowPage", FlowPage);
        }
    };
});
System.register("IconPicker", ["react", "./css/IconPicker.css"], function (exports_12, context_12) {
    "use strict";
    var React, IconPicker;
    var __moduleName = context_12 && context_12.id;
    return {
        setters: [
            function (React_2) {
                React = React_2;
            },
            function (_2) {
            }
        ],
        execute: function () {
            // Declaration of the component as React Class Component
            IconPicker = /** @class */ (function (_super) {
                __extends(IconPicker, _super);
                function IconPicker(props) {
                    var _this = _super.call(this, props) || this;
                    _this.icons = {};
                    _this.selectedItem = _this.props.onChangeValue;
                    _this.icons.asterisk = { name: 'asterisk', title: 'Asterisk', code: '&#x2a;' };
                    _this.icons.plus = { name: 'plus', title: 'Plus', code: '&#x2b;' };
                    _this.icons.euro = { name: 'euro', title: 'Euro', code: '&#x20ac;' };
                    _this.icons.minus = { name: 'minus', title: 'Minus', code: '&#x2212;' };
                    _this.icons.cloud = { name: 'cloud', title: 'Cloud', code: '&#x2601;' };
                    _this.onchange = _this.onchange.bind(_this);
                    return _this;
                }
                IconPicker.prototype.onchange = function (e) {
                    this.selectedItem = e.target.innerText;
                    if (this.props.onChange) {
                        this.props.onChange(this.selectedItem);
                    }
                    this.forceUpdate();
                };
                IconPicker.prototype.render = function () {
                    var _this = this;
                    var options = [];
                    var cls;
                    for (var _i = 0, _a = Object.keys(this.icons); _i < _a.length; _i++) {
                        var opt = _a[_i];
                        var cls_1 = 'glyphicon glyphicon-' + this.icons[opt].name + ' icon-picker-icon';
                        options.push(React.createElement("li", { onClick: function (e) { _this.onchange(e); } },
                            React.createElement("span", { className: cls_1 }),
                            this.icons[opt].name));
                    }
                    return (React.createElement("div", { className: "btn-group" },
                        React.createElement("button", { type: "button", className: "btn btn-default dropdown-toggle", "data-toggle": "dropdown" },
                            React.createElement("span", { className: 'glyphicon glyphicon-' + this.selectedItem }),
                            React.createElement("span", { className: "caret" })),
                        React.createElement("ul", { className: "dropdown-menu", role: "menu" }, options)));
                    // <select className="modal-dialog-select" data-show-icon="true" onChange={(e) => {this.itemSelected; }}>
                    //    {options}
                    // </select>
                };
                return IconPicker;
            }(React.Component));
            exports_12("default", IconPicker);
        }
    };
});
System.register("ModalDialog", ["react", "./css/ModalDialog.css"], function (exports_13, context_13) {
    "use strict";
    var React, modalDialogButton, eDragEventType, DragEvent, ModalDialog;
    var __moduleName = context_13 && context_13.id;
    return {
        setters: [
            function (React_3) {
                React = React_3;
            },
            function (_3) {
            }
        ],
        execute: function () {
            modalDialogButton = /** @class */ (function () {
                function modalDialogButton(label, handler) {
                    this.label = label;
                    this.handler = handler;
                }
                return modalDialogButton;
            }());
            exports_13("modalDialogButton", modalDialogButton);
            (function (eDragEventType) {
                eDragEventType[eDragEventType["unknown"] = 0] = "unknown";
                eDragEventType[eDragEventType["canvas"] = 1] = "canvas";
                eDragEventType[eDragEventType["table"] = 2] = "table";
                eDragEventType[eDragEventType["link"] = 3] = "link";
                eDragEventType[eDragEventType["dialog"] = 4] = "dialog";
            })(eDragEventType || (eDragEventType = {}));
            exports_13("eDragEventType", eDragEventType);
            DragEvent = /** @class */ (function () {
                function DragEvent() {
                    this.type = eDragEventType.unknown;
                    this.sourceElement = null;
                    this.targetElement = null;
                    this.mouseX = 0;
                    this.mouseY = 0;
                    this.mouseOffsetX = 0;
                    this.mouseOffsetY = 0;
                }
                DragEvent.start = function (type, sourceElement, mouseX, mouseY) {
                    var evt = new DragEvent();
                    evt.type = type;
                    evt.sourceElement = sourceElement;
                    evt.targetElement = null;
                    evt.mouseX = mouseX;
                    evt.mouseY = mouseY;
                    evt.mouseOffsetX = mouseX;
                    evt.mouseOffsetY = mouseY;
                    return evt;
                };
                DragEvent.prototype.drag = function (mouseX, mouseY) {
                    this.mouseX = mouseX;
                    this.mouseY = mouseY;
                };
                DragEvent.prototype.end = function (target, mouseX, mouseY) {
                    this.targetElement = target;
                    this.mouseX = mouseX;
                    this.mouseY = mouseY;
                    this.type = eDragEventType.unknown;
                };
                return DragEvent;
            }());
            exports_13("DragEvent", DragEvent);
            // Declaration of the component as React Class Component
            ModalDialog = /** @class */ (function (_super) {
                __extends(ModalDialog, _super);
                // Init of the component before it is mounted.
                function ModalDialog(props) {
                    var _this = _super.call(this, props) || this;
                    _this.dragEvent = new DragEvent();
                    _this.top = 0;
                    _this.left = 0;
                    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
                    _this.handleOutsideClick = _this.handleOutsideClick.bind(_this);
                    _this.onCloseRequest = _this.onCloseRequest.bind(_this);
                    return _this;
                }
                ModalDialog.prototype.stopEventBubble = function (e) {
                    if (e.stopPropagation)
                        e.stopPropagation();
                    if (e.preventDefault)
                        e.preventDefault();
                    e.cancelBubble = true;
                    e.returnValue = false;
                    return false;
                };
                // Add listeners immediately after the component is mounted.
                ModalDialog.prototype.componentDidMount = function () {
                    //need to center the window
                    if (this.dialog) {
                        var parentXCenter = this.dialog.offsetParent.clientWidth / 2;
                        var parentYCenter = this.dialog.offsetParent.clientHeight / 2;
                        var dialogXOffset = this.dialog.clientWidth / 2;
                        var dialogYOffset = this.dialog.clientHeight / 2;
                        this.left = parentXCenter - dialogXOffset;
                        this.top = parentYCenter - dialogYOffset;
                        this.forceUpdate();
                        this.dialog.classList.add('shown');
                        this.forceUpdate();
                    }
                    //window.addEventListener('keyup', this.handleKeyUp, false);
                    //document.addEventListener('click', this.handleOutsideClick, false);
                };
                // Remove listeners immediately before a component is unmounted and destroyed.
                ModalDialog.prototype.componentWillUnmount = function () {
                    //window.removeEventListener('keyup', this.handleKeyUp, false);
                    //document.removeEventListener('click', this.handleOutsideClick, false);
                };
                ModalDialog.prototype.onCloseRequest = function () {
                    if (this.props.onCloseRequest) {
                        //document.removeEventListener('click', this.handleOutsideClick, false);
                        //window.removeEventListener('keyup', this.handleKeyUp, false);
                        this.props.onCloseRequest();
                    }
                };
                // Handle the key press event.
                ModalDialog.prototype.handleKeyUp = function (e) {
                    var _this = this;
                    var keys = {
                        27: function () {
                            e.preventDefault();
                            _this.onCloseRequest();
                        },
                    };
                    if (keys[e.keyCode]) {
                        keys[e.keyCode]();
                    }
                };
                // Handle the mouse click on browser window.
                ModalDialog.prototype.handleOutsideClick = function (e) {
                    if (!this.dialog) {
                        if (!this.dialog.contains(e.target)) {
                            this.onCloseRequest();
                        }
                    }
                };
                // Render the component passing onCloseRequest and children as props.
                ModalDialog.prototype.render = function () {
                    var _this = this;
                    var style = {};
                    style.left = this.left;
                    style.top = this.top;
                    var buttons = [];
                    var _loop_1 = function (button) {
                        buttons.push(React.createElement("button", { className: "modal-dialog-button-bar-button", title: "Cancel", onMouseDown: function (e) { e.stopPropagation(); button.handler(); } }, button.label));
                    };
                    for (var _i = 0, _a = this.props.buttons; _i < _a.length; _i++) {
                        var button = _a[_i];
                        _loop_1(button);
                    }
                    return (React.createElement("div", { className: "modal-redaction", onMouseMove: function (e) { _this.onMouseMove(e); }, onMouseUp: function (e) { _this.onMouseUp(e); }, onMouseDown: function (e) { _this.handleOutsideClick(e); } },
                        React.createElement("div", { style: style, className: "modal-content", ref: function (node) { return (_this.dialog = node); } },
                            React.createElement("div", { className: "modal-dialog" },
                                React.createElement("div", { className: "modal-dialog-header", onMouseDown: function (e) { _this.onMouseDown(e); } },
                                    React.createElement("div", { style: { display: 'flex', flexDirection: "row", flexGrow: 1 } },
                                        React.createElement("span", { className: "modal-dialog-header-title" }, this.props.title)),
                                    React.createElement("div", { style: { display: 'flex', flexDirection: "row", marginLeft: 'auto', flexGrow: 0 } },
                                        React.createElement("span", { className: "glyphicon glyphicon-remove modal-dialog-header-button", style: { cursor: 'pointer', color: '#fefefe', marginRight: '5px', fontSize: '14pt' }, title: "Close", onMouseDown: function (e) { e.stopPropagation(); _this.props.onClose('cancel'); } }))),
                                React.createElement("div", { className: "modal-dialog-body" },
                                    React.createElement("div", { className: "modal-dialog-body-client" }, this.props.children)),
                                React.createElement("div", { className: "modal-dialog-button-bar" }, buttons)))));
                };
                ModalDialog.prototype.moveMe = function (left, top) {
                    this.left = left;
                    this.top = top; // - this.box.getBoundingClientRect().top;
                    this.forceUpdate();
                };
                ModalDialog.prototype.onMouseDown = function (e) {
                    //this.stopEventBubble(e);
                    //include component bounding rect to allow for mouse offset into component
                    var clientRect = e.target.getBoundingClientRect();
                    var mouseOffsetY = e.clientY - clientRect.top;
                    console.log("grab dialog");
                    this.dragEvent = DragEvent.start(eDragEventType.dialog, this, e.clientX - clientRect.left, mouseOffsetY);
                };
                ModalDialog.prototype.onMouseMove = function (e) {
                    //this.stopEventBubble(e);
                    if (this.dragEvent.type === eDragEventType.dialog) {
                        console.log("move dialog");
                        this.moveMe(e.clientX - this.dragEvent.mouseOffsetX, e.clientY - this.dragEvent.mouseOffsetY);
                    }
                };
                ModalDialog.prototype.onMouseUp = function (e) {
                    //this.stopEventBubble(e);
                    if (this.dragEvent.type === eDragEventType.dialog) {
                        console.log("drop dialog");
                        this.dragEvent.end(null, e.clientX, e.clientY);
                    }
                };
                return ModalDialog;
            }(React.Component));
            exports_13("ModalDialog", ModalDialog);
        }
    };
});
