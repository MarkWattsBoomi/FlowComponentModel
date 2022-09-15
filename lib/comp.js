"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var flow_component_model_1 = require("flow-component-model");
require("./comp.css");
var cust = /** @class */ (function (_super) {
    __extends(cust, _super);
    function cust(props) {
        var _this = _super.call(this, props) || this;
        _this.version = '1.0.0';
        _this.lastContent = (react_1.default.createElement("div", null));
        _this.flowMoved = _this.flowMoved.bind(_this);
        return _this;
    }
    cust.prototype.flowMoved = function (xhr, request) {
        return __awaiter(this, void 0, void 0, function () {
            var me;
            return __generator(this, function (_a) {
                me = this;
                if (xhr.invokeType === 'FORWARD') {
                    if (this.loadingState !== flow_component_model_1.eLoadingState.ready) {
                        window.setImmediate(function () { me.flowMoved(xhr, request); });
                    }
                    else {
                        this.forceUpdate();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    cust.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.componentDidMount.call(this)];
                    case 1:
                        _a.sent();
                        manywho.eventManager.addDoneListener(this.flowMoved, this.componentId);
                        this.forceUpdate();
                        return [2 /*return*/];
                }
            });
        });
    };
    cust.prototype.componentWillUnmount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.componentWillUnmount.call(this)];
                    case 1:
                        _a.sent();
                        manywho.eventManager.removeDoneListener(this.componentId);
                        return [2 /*return*/];
                }
            });
        });
    };
    cust.prototype.render = function () {
        var _this = this;
        if (this.loadingState !== flow_component_model_1.eLoadingState.ready) {
            return this.lastContent;
        }
        //handle classes attribute and hidden and size
        var classes = 'cust ' + this.getAttribute('classes', '');
        var style = {};
        style.width = '-webkit-fill-available';
        style.height = '-webkit-fill-available';
        if (this.model.visible === false) {
            style.display = 'none';
        }
        if (this.model.width) {
            style.width = this.model.width + 'px';
        }
        if (this.model.height) {
            style.height = this.model.height + 'px';
        }
        this.lastContent = (react_1.default.createElement("div", { className: classes, style: style },
            react_1.default.createElement(flow_component_model_1.FlowContextMenu, { parent: this, ref: function (element) { _this.contextMenu = element; } }),
            react_1.default.createElement(flow_component_model_1.FlowMessageBox, { parent: this, ref: function (element) { _this.messageBox = element; } }),
            react_1.default.createElement("div", { className: 'cust-body' })));
        return this.lastContent;
    };
    return cust;
}(flow_component_model_1.FlowComponent));
exports.default = cust;
manywho.component.register('cust', cust);
