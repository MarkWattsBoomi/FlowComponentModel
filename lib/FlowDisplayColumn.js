"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowDisplayColumn = void 0;
var FlowField_1 = require("./FlowField");
var FlowDisplayColumn = /** @class */ (function () {
    function FlowDisplayColumn(column) {
        this.Column = column;
        this.ComponentType = column.componentType;
        this.ContentFormat = column.contentFormat;
        this.ContentType = FlowField_1.eContentType[column.contentType];
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowDisplayColumn.prototype, "contentFormat", {
        get: function () {
            return this.ContentFormat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowDisplayColumn.prototype, "contentType", {
        get: function () {
            return this.ContentType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowDisplayColumn.prototype, "developerName", {
        get: function () {
            return this.DeveloperName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowDisplayColumn.prototype, "visible", {
        get: function () {
            return this.Visible;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowDisplayColumn.prototype, "readOnly", {
        get: function () {
            return this.ReadOnly;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowDisplayColumn.prototype, "label", {
        get: function () {
            return this.Label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowDisplayColumn.prototype, "displayOrder", {
        get: function () {
            return this.DisplayOrder;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowDisplayColumn.prototype, "typeElementPropertyId", {
        get: function () {
            return this.TypeElementPropertyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowDisplayColumn.prototype, "typeElememtPropertyToDisplayId", {
        get: function () {
            return this.TypeElememtPropertyToDisplayId;
        },
        enumerable: false,
        configurable: true
    });
    FlowDisplayColumn.prototype.iFlowDisplayColumn = function () {
        return this.Column;
    };
    return FlowDisplayColumn;
}());
exports.FlowDisplayColumn = FlowDisplayColumn;
