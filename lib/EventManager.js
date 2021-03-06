"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (!manywho.eventManager) {
    manywho.eventManager = {};
    manywho.eventManager.beforeSendListeners = {};
    manywho.eventManager.doneListeners = {};
    manywho.eventManager.initializedListeners = {};
    manywho.eventManager.joinListeners = {};
    manywho.eventManager.failListeners = {};
    manywho.eventManager.outcomeBeingTriggered;
    manywho.eventManager.history = [];
    manywho.eventManager.beforeSend = function (xhr, request) {
        if (xhr) {
            if (window.hasOwnProperty("culture") && culture.length > 0) {
                xhr.setRequestHeader("Culture", culture); //"Brand=XL&Country=XL&Language=ES&Variant=XL");
            }
        }
        //(manywho as any).eventManager.beforeSendListeners.forEach((listener: any) => listener(xhr, request));
        for (var key in manywho.eventManager.beforeSendListeners) {
            manywho.eventManager.beforeSendListeners[key](xhr, request);
        }
    };
    manywho.eventManager.join = function (xhr, request) {
        //(manywho as any).eventManager.doneListeners.forEach((listener: any) => listener(xhr, request));
        for (var key in manywho.eventManager.joinListeners) {
            manywho.eventManager.joinListeners[key](xhr, request);
        }
    };
    manywho.eventManager.done = function (xhr, request) {
        //(manywho as any).eventManager.doneListeners.forEach((listener: any) => listener(xhr, request));
        for (var key in manywho.eventManager.doneListeners) {
            manywho.eventManager.doneListeners[key](xhr, request);
        }
    };
    manywho.eventManager.initialized = function (xhr, request) {
        //(manywho as any).eventManager.doneListeners.forEach((listener: any) => listener(xhr, request));
        for (var key in manywho.eventManager.initializedListeners) {
            manywho.eventManager.initializedListeners[key](xhr, request);
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
    manywho.eventManager.addInitializedListener = function (handler, componentId) {
        manywho.eventManager.initializedListeners[componentId] = handler;
    };
    manywho.eventManager.removeInitializedListener = function (componentId) {
        delete manywho.eventManager.initializedListeners[componentId];
    };
    manywho.eventManager.addJoinListener = function (handler, componentId) {
        manywho.eventManager.joinListeners[componentId] = handler;
    };
    manywho.eventManager.removeJoinListener = function (componentId) {
        delete manywho.eventManager.joinListeners[componentId];
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
        initialization: {
            beforeSend: manywho.eventManager.beforeSend,
            done: manywho.eventManager.initialized,
            fail: manywho.eventManager.fail,
        },
        join: {
            beforeSend: manywho.eventManager.beforeSend,
            done: manywho.eventManager.join,
            fail: manywho.eventManager.fail,
        },
    });
}
