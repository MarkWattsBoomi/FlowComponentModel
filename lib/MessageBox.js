"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageBox = void 0;
var React = require("react");
var Common_1 = require("./Dialogs/Common");
require("./MessageBox.css");
// Declaration of the component as React Class Component
var MessageBox = /** @class */ (function (_super) {
    __extends(MessageBox, _super);
    // Init of the component before it is mounted.
    function MessageBox(props) {
        var _this = _super.call(this, props) || this;
        _this.dragEvent = new Common_1.DragEvent();
        _this.top = 0;
        _this.left = 0;
        _this.handleKeyUp = _this.handleKeyUp.bind(_this);
        // this.handleOutsideClick = this.handleOutsideClick.bind(this);
        _this.onCloseRequest = _this.onCloseRequest.bind(_this);
        return _this;
    }
    MessageBox.prototype.stopEventBubble = function (e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    };
    // Add listeners immediately after the component is mounted.
    MessageBox.prototype.componentDidMount = function () {
        // need to center the window
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
        // window.addEventListener('keyup', this.handleKeyUp, false);
        // document.addEventListener('click', this.handleOutsideClick, false);
    };
    // Remove listeners immediately before a component is unmounted and destroyed.
    MessageBox.prototype.componentWillUnmount = function () {
        // window.removeEventListener('keyup', this.handleKeyUp, false);
        // document.removeEventListener('click', this.handleOutsideClick, false);
    };
    MessageBox.prototype.onCloseRequest = function () {
        if (this.props.onCloseRequest) {
            // document.removeEventListener('click', this.handleOutsideClick, false);
            // window.removeEventListener('keyup', this.handleKeyUp, false);
            this.props.onCloseRequest();
        }
    };
    // Handle the key press event.
    MessageBox.prototype.handleKeyUp = function (e) {
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
    // Render the component passing onCloseRequest and children as props.
    MessageBox.prototype.render = function () {
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
        return (React.createElement("div", { className: "message-box-redaction", onMouseMove: function (e) { _this.onMouseMove(e); }, onMouseUp: function (e) { _this.onMouseUp(e); }, 
            // onMouseDown={(e) => {this.handleOutsideClick(e)}}
            onContextMenu: function (e) { e.preventDefault(); e.stopPropagation(); if (_this.props.onContextMenu) {
                _this.props.onContextMenu();
            } } },
            React.createElement("div", { style: style, className: "message-box-content", ref: function (node) { return (_this.dialog = node); } },
                React.createElement("div", { className: "message-box-dialog" },
                    React.createElement("div", { className: "message-box-dialog-header", onMouseDown: function (e) { _this.onMouseDown(e); } },
                        React.createElement("div", { style: { display: 'flex', flexDirection: 'row', flexGrow: 1 } },
                            React.createElement("span", { className: "message-box-dialog-header-title" }, this.props.title)),
                        React.createElement("div", { style: { display: 'flex', flexDirection: 'row', marginLeft: 'auto', flexGrow: 0 } },
                            React.createElement("span", { className: "glyphicon glyphicon-remove message-box-dialog-header-button", style: { cursor: 'pointer', color: '#fefefe', marginRight: '5px', fontSize: '14pt' }, title: "Close", onMouseDown: function (e) { e.stopPropagation(); _this.props.onClose('cancel'); } }))),
                    React.createElement("div", { className: "message-box-dialog-body" }, this.props.children),
                    React.createElement("div", { className: "modal-dialog-button-bar" }, buttons)))));
    };
    MessageBox.prototype.moveMe = function (left, top) {
        this.left = left;
        this.top = top; // - this.box.getBoundingClientRect().top;
        this.forceUpdate();
    };
    MessageBox.prototype.onMouseDown = function (e) {
        // this.stopEventBubble(e);
        // include component bounding rect to allow for mouse offset into component
        var clientRect = e.target.getBoundingClientRect();
        var mouseOffsetY = e.clientY - clientRect.top;
        console.log('grab dialog');
        this.dragEvent = Common_1.DragEvent.start(Common_1.eDragEventType.dialog, this, e.clientX - clientRect.left, mouseOffsetY);
    };
    MessageBox.prototype.onMouseMove = function (e) {
        // this.stopEventBubble(e);
        if (this.dragEvent.type === Common_1.eDragEventType.dialog) {
            console.log('move dialog');
            this.moveMe(e.clientX - this.dragEvent.mouseOffsetX, e.clientY - this.dragEvent.mouseOffsetY);
        }
    };
    MessageBox.prototype.onMouseUp = function (e) {
        // this.stopEventBubble(e);
        if (this.dragEvent.type === Common_1.eDragEventType.dialog) {
            console.log('drop dialog');
            this.dragEvent.end(null, e.clientX, e.clientY);
        }
    };
    return MessageBox;
}(React.Component));
exports.MessageBox = MessageBox;
