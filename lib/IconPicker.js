"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./css/IconPicker.css");
// Declaration of the component as React Class Component
var IconPicker = /** @class */ (function (_super) {
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
exports.default = IconPicker;
