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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./EventManager");
var FlowAttribute_1 = require("./FlowAttribute");
var FlowDisplayColumn_1 = require("./FlowDisplayColumn");
var FlowField_1 = require("./FlowField");
var FlowObjectData_1 = require("./FlowObjectData");
var FlowObjectDataArray_1 = require("./FlowObjectDataArray");
var FlowOutcome_1 = require("./FlowOutcome");
var throttle = require('lodash.throttle');
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
var eLoadingState;
(function (eLoadingState) {
    eLoadingState[eLoadingState["ready"] = 0] = "ready";
    eLoadingState[eLoadingState["loading"] = 1] = "loading";
    eLoadingState[eLoadingState["saving"] = 2] = "saving";
    eLoadingState[eLoadingState["moving"] = 3] = "moving";
    eLoadingState[eLoadingState["inititializing"] = 4] = "inititializing";
    eLoadingState[eLoadingState["inititialized"] = 5] = "inititialized";
    eLoadingState[eLoadingState["mounting"] = 6] = "mounting";
    eLoadingState[eLoadingState["mounted"] = 7] = "mounted";
})(eLoadingState = exports.eLoadingState || (exports.eLoadingState = {}));
//export type eLoadingState = "ready" | "loading" | "saving" | "moving" | "inititializing" | "inititialized" | "mounting" | "mounted";
var FlowBaseComponent = /** @class */ (function (_super) {
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
                            if (val.ContentType !== FlowField_1.eContentType.ContentObject && val.ContentType !== FlowField_1.eContentType.ContentList) {
                                result = val.value;
                            }
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        // did bits 0 get a val?
                        if (val) {
                            ele = val.value.properties[strippedBits[pos]];
                            if (ele) {
                                if (ele.contentType === FlowField_1.eContentType.ContentObject || ele.contentType === FlowField_1.eContentType.ContentList) {
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
                        return [4 /*yield*/, this.setStateValue(new FlowObjectData_1.FlowObjectData(objectData), true)];
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
                        return [4 /*yield*/, this.setStateValue(new FlowObjectDataArray_1.FlowObjectDataArray(listData), true)];
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
                this.Attributes[key] = new FlowAttribute_1.FlowAttribute(key, attrs[key]);
            }
        }
    };
    FlowBaseComponent.prototype.loadModel = function () {
        var model = manywho.model.getComponent(this.ComponentId, this.FlowKey);
        if (model) {
            this.Model = {
                contentType: model.contentType,
                dataSource: new FlowObjectDataArray_1.FlowObjectDataArray([]),
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
                    this.Model.dataSource.addItem(new FlowObjectData_1.FlowObjectData([od]));
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
                    this.Fields[value.developerName] = new FlowField_1.FlowField(value);
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
                                _this.Fields[value.developerName] = new FlowField_1.FlowField(value);
                            }
                        });
                        return [4 /*yield*/, this.callRequestOld(this.userurl, 'GET', {})];
                    case 2:
                        userval = _a.sent();
                        //manywho.connection.request(this, "", this.userurl , 'GET', this.TenantId, this.StateId, manywho.state.getAuthenticationToken(this.FlowKey), {});
                        if (userval) {
                            u = new FlowField_1.FlowField(userval);
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
                return new FlowObjectData_1.FlowObjectData(flowState.objectData && flowState.objectData[0] ? flowState.objectData[0] : flowModel.objectData[0]);
            case 'ContentList':
                return new FlowObjectDataArray_1.FlowObjectDataArray(flowState.objectData ? flowState.objectData : flowModel.objectData);
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
                return new FlowObjectData_1.FlowObjectData(flowState.objectData && flowState.objectData[0] ? flowState.objectData[0] : flowModel.objectData[0]);
            case 'ContentList':
                return new FlowObjectDataArray_1.FlowObjectDataArray(flowState.objectData ? flowState.objectData : flowModel.objectData);
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
                        if (values.constructor.name === FlowField_1.FlowField.name) {
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
exports.FlowBaseComponent = FlowBaseComponent;
