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
exports.FlowBaseComponent = exports.eLoadingState = void 0;
var React = require("react");
require("./EventManager");
var FlowAttribute_1 = require("./FlowAttribute");
var FlowDisplayColumn_1 = require("./FlowDisplayColumn");
var FlowField_1 = require("./FlowField");
var FlowObjectData_1 = require("./FlowObjectData");
var FlowObjectDataArray_1 = require("./FlowObjectDataArray");
var FlowOutcome_1 = require("./FlowOutcome");
var throttle = require('lodash.throttle');
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
        _this.loadAllValues = _this.loadAllValues.bind(_this);
        _this.dontLoadAllValues = _this.dontLoadAllValues.bind(_this);
        _this.updateValues = _this.updateValues.bind(_this);
        _this.triggerOutcome = _this.triggerOutcome.bind(_this);
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
        _this.loadProps = _this.loadProps.bind(_this);
        window.addEventListener('message', _this.receiveMessage, false);
        _this.loadProps(props);
        return _this;
    }
    Object.defineProperty(FlowBaseComponent.prototype, "tenantId", {
        get: function () {
            return this.TenantId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "stateId", {
        get: function () {
            return this.StateId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "flowKey", {
        get: function () {
            return this.FlowKey;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "componentId", {
        get: function () {
            return this.ComponentId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "parentId", {
        get: function () {
            return this.ParentId;
        },
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "loadingState", {
        get: function () {
            return this.LoadingState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "outcomes", {
        get: function () {
            return this.Outcomes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "attributes", {
        get: function () {
            return this.Attributes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "fields", {
        get: function () {
            return this.Fields;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "model", {
        get: function () {
            return this.Model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "user", {
        get: function () {
            return this.User;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "joinURI", {
        get: function () {
            return window.location.href;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "isDesignTime", {
        get: function () {
            return this.IsDesignTime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FlowBaseComponent.prototype, "authenticationToken", {
        get: function () {
            return JSON.parse(sessionStorage.flowUser).authenticationToken;
        },
        enumerable: false,
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
    FlowBaseComponent.prototype.loadProps = function (props, oldProps) {
        if (oldProps === void 0) { oldProps = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            var baseUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (oldProps) {
                            manywho.eventManager.removeBeforeSendListener(oldProps.id + "_core");
                            manywho.eventManager.removeDoneListener(oldProps.id + "_core");
                        }
                        this.Fields = {};
                        this.LoadingState = eLoadingState.inititializing;
                        this.ComponentId = this.props.id;
                        this.ParentId = this.props.parentId;
                        this.FlowKey = this.props.flowKey;
                        this.Attributes = {};
                        this.loadModel();
                        this.loadAttributes();
                        this.loadOutcomes();
                        baseUrl = "";
                        if ((!manywho.settings.global('platform.uri')) && (manywho.settings.global('platform.uri').length <= 0)) {
                            baseUrl = window.location.origin || 'https://flow.manywho.com';
                        }
                        else {
                            baseUrl = manywho.settings.global('platform.uri');
                        }
                        this.StateId = manywho.utils.extractStateId(this.props.flowKey);
                        this.TenantId = manywho.utils.extractTenantId(this.props.flowKey);
                        this.invokeurl = "".concat(baseUrl, "/api/run/1/state/").concat(this.StateId);
                        this.url = "".concat(baseUrl, "/api/run/1/state/").concat(this.StateId, "/values");
                        this.userurl = "".concat(baseUrl, "/api/run/1/state/").concat(this.StateId, "/values/03dc41dd-1c6b-4b33-bf61-cbd1d0778fff");
                        this.valueurl = "".concat(baseUrl, "/api/run/1/state/").concat(this.StateId, "/values/name");
                        this.LoadingState = eLoadingState.inititialized;
                        manywho.eventManager.addDoneListener(this.onDone, this.componentId + "_core");
                        manywho.eventManager.addBeforeSendListener(this.onBeforeSend, this.componentId + "_core");
                        return [4 /*yield*/, this.preserveState()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FlowBaseComponent.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        if ((nextProps === null || nextProps === void 0 ? void 0 : nextProps.id) !== this.componentId) {
            this.loadProps(nextProps, this.props);
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
        // is it replaceable?  starts and ends with {{}}
        if (value.startsWith('{{') && value.endsWith('}}')) {
            // value points to a field, get it's value
            var stripped = value.replace('{{', '');
            stripped = stripped.replace('}}', '');
            var val = void 0;
            var result = '';
            // it could be a sub field with parent.child
            var strippedBits = stripped.split('.');
            // loop over bits
            for (var pos = 0; pos < strippedBits.length; pos++) {
                // pos 0 will set val for any child elements
                if (pos === 0) {
                    //if(!this.fields[strippedBits[pos]]) {
                    //    await this.loadValue(strippedBits[pos]);
                    //}
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
                }
                else {
                    // did bits 0 get a val?
                    if (val) {
                        var ele = val.value.properties[strippedBits[pos]];
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
                }
            }
            return result;
        }
        else {
            return value;
        }
    };
    FlowBaseComponent.prototype.onDone = function (xhr, request) {
        return __awaiter(this, void 0, void 0, function () {
            var model, outcome_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(xhr.invokeType === 'FORWARD')) return [3 /*break*/, 2];
                        //console.log("fbc onDone forward " + new Date().getTime());
                        manywho.model.parseEngineResponse(xhr, this.flowKey);
                        model = manywho.model.getComponent(this.componentId, this.flowKey);
                        if (!model) return [3 /*break*/, 2];
                        this.loadModel();
                        this.loadAttributes();
                        this.loadOutcomes();
                        //console.log("fbc onDone preserving " + new Date().getTime());
                        return [4 /*yield*/, this.preserveState()];
                    case 1:
                        //console.log("fbc onDone preserving " + new Date().getTime());
                        _a.sent();
                        this.redraw();
                        _a.label = 2;
                    case 2:
                        if (manywho.eventManager.outcomeBeingTriggered && manywho.eventManager.outcomeBeingTriggered.attributes) {
                            outcome_1 = manywho.eventManager.outcomeBeingTriggered;
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
                        //console.log("fbc onDone end " + new Date().getTime())
                        this.LoadingState = eLoadingState.ready;
                        manywho.eventManager.outcomeBeingTriggered = undefined;
                        return [2 /*return*/];
                }
            });
        });
    };
    FlowBaseComponent.prototype.componentDidMount = function (preserveState) {
        if (preserveState === void 0) { preserveState = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.LoadingState = eLoadingState.mounting;
                //add outcome manager stuff
                //(manywho as any).eventManager.addDoneListener(this.onDone,this.componentId + "_core");
                //(manywho as any).eventManager.addBeforeSendListener(this.onBeforeSend,this.componentId + "_core");
                // preserve state
                //await this.preserveState();
                this.LoadingState = eLoadingState.mounted;
                manywho.utils.removeLoadingIndicator('loader');
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    FlowBaseComponent.prototype.preserveState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.LoadingState = eLoadingState.mounting;
                        return [4 /*yield*/, this.setStateValue(this.getStateValue(true))];
                    case 1:
                        _a.sent();
                        this.LoadingState = eLoadingState.mounted;
                        return [2 /*return*/];
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
            if (outcome.pageObjectBindingId === this.ComponentId) {
                this.Outcomes[outcome.developerName] = new FlowOutcome_1.FlowOutcome(outcome);
            }
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
        if (model) {
            // add the attributes
            var attrs = model.attributes;
            if (attrs) {
                for (var _i = 0, _a = Object.keys(attrs); _i < _a.length; _i++) {
                    var key = _a[_i];
                    this.Attributes[key] = new FlowAttribute_1.FlowAttribute(key, attrs[key]);
                }
            }
        }
    };
    FlowBaseComponent.prototype.loadModel = function () {
        var model = manywho.model.getComponent(this.ComponentId, this.FlowKey);
        if (model) {
            this.Model = {
                contentType: model.contentType,
                content: model.content,
                dataSource: new FlowObjectDataArray_1.FlowObjectDataArray([]),
                developerName: model.developerName,
                displayColumns: [],
                enabled: model.isEnabled,
                hasEvents: model.hasEvents,
                height: model.height,
                helpInfo: model.helpInfo,
                hintInfo: model.hintValue,
                joinUri: this.joinURI,
                label: model.label,
                maxSize: model.maxSize,
                multiSelect: model.isMultiSelect,
                readOnly: !model.isEditable,
                required: model.isRequired,
                searchable: model.isSearchable,
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
            var value, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.LoadingState = eLoadingState.loading;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.callRequest(this.valueurl + "/" + valueName, 'GET', {})];
                    case 2:
                        value = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_1 = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (value) {
                            this.Fields[value.developerName] = new FlowField_1.FlowField(value);
                        }
                        this.LoadingState = eLoadingState.ready;
                        return [2 /*return*/, this.Fields[value.developerName]];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FlowBaseComponent.prototype.loadValueNew = function (valueName) {
        return __awaiter(this, void 0, void 0, function () {
            var value, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.LoadingState = eLoadingState.loading;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, this.callRequest(this.valueurl + "/" + valueName, 'GET', {})];
                    case 2:
                        value = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_2 = _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        if (value) {
                            this.Fields[value.developerName] = new FlowField_1.FlowField(value);
                        }
                        this.LoadingState = eLoadingState.ready;
                        return [2 /*return*/, this.Fields[value.developerName]];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    FlowBaseComponent.prototype.callRequest = function (url, method, data) {
        return __awaiter(this, void 0, void 0, function () {
            var results, request, token, response, errorText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        request = {};
                        token = manywho.state.getAuthenticationToken(this.flowKey);
                        request.method = method;
                        request.headers = {
                            "Content-Type": "application/json",
                            "ManyWhoTenant": this.tenantId
                        };
                        if (token) {
                            request.headers.Authorization = token;
                        }
                        request.credentials = "same-origin";
                        if (method === "POST" || method === "PUT") {
                            request.body = JSON.stringify(data);
                        }
                        return [4 /*yield*/, fetch(url, request)];
                    case 1:
                        response = _a.sent();
                        if (!(response.status === 200)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        //const json = await this.getResultBodyText(response);
                        results = _a.sent();
                        console.log("Fetch Complete");
                        return [3 /*break*/, 5];
                    case 3: return [4 /*yield*/, response.text()];
                    case 4:
                        errorText = _a.sent();
                        console.log("Fetch Failed - " + errorText);
                        _a.label = 5;
                    case 5: return [2 /*return*/, results];
                }
            });
        });
    };
    FlowBaseComponent.prototype.sync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, manywho.engine.sync(this.flowKey)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FlowBaseComponent.prototype.callRequestOldxx = function (url, method, data) {
        return __awaiter(this, void 0, void 0, function () {
            var output, xhr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, manywho.connection.request(this, null, url, method, this.TenantId, this.StateId, manywho.state.getAuthenticationToken(this.FlowKey), data)];
                    case 1:
                        xhr = _a.sent();
                        return [2 /*return*/, xhr];
                }
            });
        });
    };
    FlowBaseComponent.prototype.loadAllValues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var values, userval, u, props;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.LoadingState = eLoadingState.loading;
                        this.Fields = {};
                        return [4 /*yield*/, this.callRequest(this.url, 'GET', {})];
                    case 1:
                        values = _a.sent();
                        (values || []).map(function (value) {
                            if (value) {
                                _this.Fields[value.developerName] = new FlowField_1.FlowField(value);
                            }
                        });
                        return [4 /*yield*/, this.callRequest(this.userurl, 'GET', {})];
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
    FlowBaseComponent.prototype.dontLoadAllValues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userval, u, props;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.LoadingState = eLoadingState.loading;
                        return [4 /*yield*/, this.callRequest(this.userurl, 'GET', {})];
                    case 1:
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
    FlowBaseComponent.prototype.getStateValue = function (initializing) {
        if (initializing === void 0) { initializing = false; }
        var flowState = manywho.state.getComponent(this.componentId, this.flowKey) || {};
        var flowModel = manywho.model.getComponent(this.ComponentId, this.FlowKey);
        if (flowModel) {
            switch (flowModel.contentType) {
                case 'ContentObject':
                    if (flowState.objectData && flowState.objectData[0] && flowState.objectData[0].properties.length > 0) {
                        return new FlowObjectData_1.FlowObjectData([flowState.objectData[0]]);
                    }
                    else {
                        var modelItems = this.model.dataSource.items;
                        if (modelItems.length > 0) {
                            return modelItems[0].isSelected ? modelItems[0] : undefined;
                        }
                        else {
                            return undefined;
                        }
                    }
                case 'ContentList':
                    if (flowState.objectData && flowState.objectData.length > 0) {
                        return new FlowObjectDataArray_1.FlowObjectDataArray(flowState.objectData);
                    }
                    else {
                        var selectedModelItems = this.model.dataSource.getSelectedItems();
                        if (selectedModelItems.items.length > 0) {
                            return selectedModelItems;
                        }
                        else {
                            return undefined;
                        }
                    }
                default:
                    // initializing is the mode for preservation of model to state
                    if (initializing === true) {
                        return flowModel.contentValue || null;
                    }
                    else {
                        return flowState.contentValue || null;
                    }
                    break;
            }
        }
        else {
            return undefined;
        }
    };
    FlowBaseComponent.prototype.getStateValueType = function () {
        var flowModel = manywho.model.getComponent(this.ComponentId, this.FlowKey);
        var ct = flowModel.contentType;
        return FlowField_1.eContentType[ct];
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
                    if (flowModel) {
                        switch (flowModel.contentType) {
                            case 'ContentObject':
                                objectData = null;
                                if (value) {
                                    value.isSelected = true;
                                    objectData = value.iFlowObjectDataArray();
                                    objectData = JSON.parse(JSON.stringify(objectData));
                                }
                                newState = { "objectData": objectData };
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
                                break;
                            default:
                                newState = { "contentValue": value };
                                manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                                break;
                        }
                    }
                    this.LoadingState = oldState;
                    if (manywho.collaboration.isInitialized(this.flowKey)) {
                        //manywho.collaboration.sync(this.flowKey);
                        //updateFields.forEach((field: IFlowField) => {
                        //    manywho.collaboration.push(this.ComponentId,{"message": {"action":"REFRESH_FIELD","fieldName": field.developerName }},this.flowKey);
                        //});
                    }
                }
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
                        return [4 /*yield*/, this.callRequest(this.url, 'POST', updateFields)];
                    case 1:
                        _b.sent();
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
            var baseUrl, invokeurl, info, request, resp;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.LoadingState = eLoadingState.moving;
                        baseUrl = "";
                        invokeurl = "".concat(baseUrl, "/api/run/1/state/").concat(this.stateId);
                        info = manywho.state.getState(this.flowKey);
                        request = {};
                        request.currentMapElementId = info.currentMapElementId;
                        request.invokeType = 'NAVIGATE';
                        request.mapElementInvokeRequest = {};
                        request.mapElementInvokeRequest.selectedOutcomeId = null;
                        request.pageRequest = {
                            pageComponentInputResponses: [
                                { pageComponentId: this.componentId, contentValue: null, objectData: null },
                            ],
                        };
                        request.selectedMapElementId = flowElementId;
                        request.stateId = this.stateId;
                        request.stateToken = info.token;
                        return [4 /*yield*/, manywho.connection.request(this, null, invokeurl, 'POST', this.tenantId, this.stateId, manywho.state.getAuthenticationToken(this.flowKey), request)];
                    case 1:
                        resp = _a.sent();
                        manywho.model.parseEngineResponse(resp, this.flowKey);
                        return [4 /*yield*/, manywho.engine.render(this.flowKey)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, Promise.resolve()];
                }
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
                url = "".concat(baseUrl, "/api/run/1/state");
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
                        if (!state) return [3 /*break*/, 7];
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
                    case 1: return [4 /*yield*/, this.loadAllValues()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, this.loadValue(message.fieldName)];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 5: return [3 /*break*/, 6];
                    case 6: return [2 /*return*/, message];
                    case 7: return [2 /*return*/];
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
                    case 3: return [4 /*yield*/, this.loadAllValues()];
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
//declare var FlowComponentModel: FlowBaseComponent;
