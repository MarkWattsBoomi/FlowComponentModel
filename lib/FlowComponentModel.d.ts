/// <reference types="react" />
declare module "EventManager" {
    export {};
}
declare module "FlowAttribute" {
    export class FlowAttribute {
        private Name;
        private Value;
        readonly name: string;
        readonly value: string;
        constructor(name: string, value: string);
    }
}
declare module "FlowObjectDataArray" {
    import { FlowObjectData, IFlowObjectData } from "FlowObjectData";
    import { FlowObjectDataProperty } from "FlowObjectDataProperty";
    export enum eSortOrder {
        ascending = 0,
        descending = 1
    }
    export class FlowObjectDataArray {
        private Items;
        readonly items: FlowObjectData[];
        sort(order: eSortOrder, fieldName?: string): FlowObjectData[];
        constructor(array?: IFlowObjectData[]);
        addItem(item: FlowObjectData): void;
        clearItems(): void;
        clone(): FlowObjectDataArray;
        iFlowObjectDataArray(): IFlowObjectData[];
        getItemWithPropertyName(findProperty: string, withValue: any, returnProperty: string): FlowObjectDataProperty | any;
        getItemWithPropertyValue(findProperty: string, withValue: any): FlowObjectData | undefined;
        getIndexOfItemWithPropertyValue(findProperty: string, withValue: any): number;
        removeItemWithPropertyValue(findProperty: string, withValue: any): number;
        removeItemAtIndex(index: number): number;
    }
}
declare module "FlowObjectDataProperty" {
    import { eContentType } from "FlowField";
    import { FlowObjectData, IFlowObjectData } from "FlowObjectData";
    import { FlowObjectDataArray } from "FlowObjectDataArray";
    export interface IFlowObjectDataProperty {
        contentFormat: string | null;
        contentType: string;
        contentValue: string | number | boolean | null;
        developerName: string;
        objectData: IFlowObjectData[] | null;
        typeElementId: string | null;
        typeElementPropertyId: string;
    }
    export class FlowObjectDataProperty {
        static newInstance(developerName: string, contentType: eContentType, value: string | number | boolean | FlowObjectData | FlowObjectDataArray): FlowObjectDataProperty;
        private ContentFormat;
        private ContentType;
        private DeveloperName;
        private TypeElementId;
        private TypeElementPropertyId;
        private Value;
        constructor(property: IFlowObjectDataProperty | undefined);
        contentFormat: string;
        contentType: eContentType;
        developerName: string;
        typeElementId: string;
        typeElementPropertyId: string;
        value: string | number | boolean | FlowObjectData | FlowObjectDataArray | undefined;
        clone(): FlowObjectDataProperty;
        iFlowObjectDataProperty(): IFlowObjectDataProperty;
        readonly displayString: string;
    }
}
declare module "FlowObjectData" {
    import { FlowObjectDataProperty, IFlowObjectDataProperty } from "FlowObjectDataProperty";
    export interface IFlowObjectData {
        developerName: string;
        externalId: string;
        internalId: string;
        isSelected: boolean;
        order: number;
        properties: IFlowObjectDataProperty[];
        typeElementId: string;
    }
    export class FlowObjectData {
        private DeveloperName;
        private ExternalId;
        private InternalId;
        private IsSelected;
        private Order;
        private TypeElementId;
        private Properties;
        developerName: string;
        externalId: string;
        internalId: string;
        isSelected: boolean;
        order: number;
        typeElementId: string;
        readonly properties: {
            [key: string]: FlowObjectDataProperty;
        };
        constructor(data?: IFlowObjectData[]);
        static newInstance(developerName: string): FlowObjectData;
        addProperty(newProperty: FlowObjectDataProperty): void;
        removeProperty(key: string): void;
        clone(newTypeName?: string): FlowObjectData;
        iObjectData(): any;
        iFlowObjectDataArray(): IFlowObjectData[];
    }
}
declare module "FlowField" {
    import { FlowObjectData, IFlowObjectData } from "FlowObjectData";
    import { FlowObjectDataArray } from "FlowObjectDataArray";
    export interface IFlowField {
        contentType: string;
        contentValue: string;
        developerName: string;
        objectData: IFlowObjectData[];
        typeElementDeveloperName: string;
        typeElementId: string;
        typeElementPropertyDeveloperName: string;
        typeElementPropertyId: string;
        valueElementId: string;
    }
    export enum eContentType {
        unknown = 0,
        ContentString = 1,
        ContentNumber = 2,
        ContentObject = 3,
        ContentBoolean = 4,
        ContentList = 5,
        ContentPassword = 6,
        ContentContent = 7,
        ContentDateTime = 8,
        ContentEncrypted = 9
    }
    export class FlowField {
        private ContentType;
        private DeveloperName;
        private TypeElementDeveloperName;
        private TypeElementId;
        private TypeElementPropertyDeveloperName;
        private TypeElementPropertyId;
        private ValueElementId;
        private Value;
        readonly contentType: eContentType;
        readonly developerName: string;
        readonly typeElementDeveloperName: string;
        readonly typeElementId: string;
        readonly typeElementPropertyDeveloperName: string;
        readonly typeElementPropertyId: string;
        readonly valueElementId: string;
        value: string | number | Date | boolean | FlowObjectData | FlowObjectDataArray | undefined;
        constructor(field?: IFlowField);
        iFlowField(): IFlowField;
    }
}
declare module "FlowDisplayColumn" {
    import { eContentType } from "FlowField";
    export interface IFlowDisplayColumn {
        componentType: string;
        contentFormat: string;
        contentType: string;
        developerName: string;
        isDisplayValue: boolean;
        isEditable: boolean;
        label: string;
        order: number;
        typeElementPropertyId: string;
        typeElememtPropertyToDisplayId: string;
    }
    export class FlowDisplayColumn {
        private ComponentType;
        private ContentFormat;
        private ContentType;
        private DeveloperName;
        private Visible;
        private ReadOnly;
        private Label;
        private DisplayOrder;
        private TypeElementPropertyId;
        private TypeElememtPropertyToDisplayId;
        private Column;
        readonly componentType: string;
        readonly contentFormat: string;
        readonly contentType: eContentType;
        readonly developerName: string;
        readonly visible: boolean;
        readonly readOnly: boolean;
        readonly label: string;
        readonly displayOrder: number;
        readonly typeElementPropertyId: string;
        readonly typeElememtPropertyToDisplayId: string;
        constructor(column: IFlowDisplayColumn);
        iFlowDisplayColumn(): IFlowDisplayColumn;
    }
}
declare module "FlowOutcome" {
    import { FlowAttribute } from "FlowAttribute";
    export enum ePageActionBindingType {
        Save = "SAVE",
        PartialSave = "PARTIAL_SAVE",
        NoSave = "NO_SAVE"
    }
    export enum ePageActionType {
        New = "NEW",
        Query = "QUERY",
        Insert = "INSERT",
        Update = "UPDATE",
        Upsert = "UPSERT",
        Delete = "DELETE",
        Remove = "REMOVE",
        Add = "ADD",
        Edit = "EDIT",
        Next = "NEXT",
        Back = "BACK",
        Done = "DONE",
        Save = "SAVE",
        Cancel = "CANCEL",
        Apply = "APPLY",
        Import = "IMPORT",
        Close = "CLOSE",
        Open = "OPEN",
        Submit = "SUBMIT",
        Escalate = "ESCALATE",
        Reject = "REJECT",
        Delegate = "DELEGATE"
    }
    export interface IFlowOutcome {
        attributes: any;
        developerName: string;
        id: string;
        isBulkAction: boolean;
        isOut: boolean;
        label: string;
        order: number;
        pageActionBindingType: ePageActionBindingType;
        pageActionType: ePageActionType;
        pageObjectBindingId: string;
    }
    export class FlowOutcome {
        private Attributes;
        private DeveloperName;
        private Id;
        private IsBulkAction;
        private IsOut;
        private Label;
        private Order;
        private PageActionBindingType;
        private PageActionType;
        private PageObjectBindingId;
        private Outcome;
        readonly developerName: string;
        readonly id: string;
        readonly isBulkAction: boolean;
        readonly isOut: boolean;
        readonly label: string;
        readonly order: number;
        readonly pageActionBindingType: ePageActionBindingType;
        readonly pageActionType: ePageActionType;
        readonly pageObjectBindingId: string;
        readonly attributes: {
            [key: string]: FlowAttribute;
        };
        constructor(outcome: IFlowOutcome);
        iFlowOutcome(): IFlowOutcome;
    }
}
declare module "FlowBaseComponent" {
    import * as React from 'react';
    import "EventManager";
    import { FlowAttribute } from "FlowAttribute";
    import { FlowDisplayColumn } from "FlowDisplayColumn";
    import { FlowField } from "FlowField";
    import { FlowObjectData, IFlowObjectData } from "FlowObjectData";
    import { FlowObjectDataArray } from "FlowObjectDataArray";
    import { FlowOutcome } from "FlowOutcome";
    interface IFlowUser {
        directoryId: string;
        directoryName: string;
        email: string;
        firstName: string;
        groupId: string;
        groupName: string;
        id: string;
        ipAddress: string;
        language: string;
        lastName: string;
        location: string;
        roleId: string;
        roleName: string;
        status: string;
        userName: string;
    }
    interface IFlowModel {
        contentType: string;
        dataSource: FlowObjectDataArray;
        developerName: string;
        enabled: boolean;
        height: number;
        helpInfo: string;
        hintInfo: string;
        joinUri: string;
        label: string;
        maxSize: number;
        multiSelect: boolean;
        readOnly: boolean;
        required: boolean;
        size: number;
        validationMessage: string;
        visible: boolean;
        width: number;
        displayColumns: FlowDisplayColumn[];
    }
    export enum eLoadingState {
        ready = 0,
        loading = 1,
        saving = 2,
        moving = 3,
        inititializing = 4,
        inititialized = 5,
        mounting = 6,
        mounted = 7
    }
    export class FlowBaseComponent extends React.Component<any, any, any> {
        url: string;
        userurl: string;
        valueurl: string;
        private User?;
        private TenantId;
        private StateId;
        private FlowKey;
        private ComponentId;
        private ParentId?;
        private Fields;
        private LoadingState;
        private Attributes;
        private Outcomes;
        private Model?;
        private IsDesignTime;
        readonly tenantId: string;
        readonly stateId: string;
        readonly flowKey: string;
        readonly componentId: string;
        readonly parentId: string | undefined;
        readonly isReady: boolean;
        readonly loadingState: eLoadingState;
        readonly outcomes: {
            [key: string]: FlowOutcome;
        } | undefined;
        readonly attributes: {
            [key: string]: FlowAttribute;
        } | undefined;
        readonly fields: {
            [key: string]: FlowField;
        } | undefined;
        readonly model: IFlowModel | undefined;
        readonly user: IFlowUser | undefined;
        readonly joinURI: string;
        readonly isDesignTime: boolean;
        getAttribute(attributeName: string, defaultValue?: string): string;
        constructor(props: any);
        onBeforeSend(xhr: XMLHttpRequest, request: any): void;
        calculateValue(value: string): Promise<string>;
        onDone(xhr: XMLHttpRequest, request: any): void;
        componentDidMount(): Promise<void>;
        componentWillUnmount(): Promise<void>;
        loadOutcome(outcomeId: string): FlowOutcome;
        loadOutcomes(): void;
        getOutcomeById(outcomeId: string): FlowOutcome | undefined;
        loadAttributes(): void;
        loadModel(): void;
        loadValue(valueName: string): Promise<void>;
        getResultBodyText(response: any): Promise<string>;
        callRequest(url: string, method: string, data: any, authenticationToken: string): Promise<any>;
        callRequestOld(url: string, method: string, data: any): Promise<any>;
        loadValues(): Promise<void>;
        dontLoadValues(): Promise<void>;
        getStateValue(): string | boolean | number | Date | FlowObjectData | FlowObjectDataArray;
        getStateValueType(): string | boolean | number | Date | FlowObjectData | FlowObjectDataArray;
        setStateValue(value: string | boolean | number | Date | FlowObjectData | FlowObjectDataArray, ignoreState?: boolean): Promise<void>;
        eventHandled(a?: any, b?: any): void;
        updateValues(values: FlowField[] | FlowField): Promise<void>;
        sendCollaborationMessage: any;
        _sendCollaborationMessage(message: any): void;
        triggerOutcome(outcomeName: string, data?: IFlowObjectData[]): Promise<void>;
        moveTo(flowElementId: string, data?: IFlowObjectData[]): Promise<void>;
        log(message: string): void;
        launchFlowSilent(tenant: string, flowId: string, player: string, objectData?: FlowObjectDataArray): Promise<void>;
        launchFlowTab(tenant: string, flowId: string, player: string, objectData?: FlowObjectDataArray): Promise<void>;
        componentDidUpdate(): Promise<any>;
        receiveMessage(message: any): Promise<void>;
        handleMessage(msg: any): Promise<void>;
    }
}
declare module "FlowComponent" {
    import { FlowBaseComponent } from "FlowBaseComponent";
    export class FlowComponent extends FlowBaseComponent {
        constructor(props: any);
        componentDidMount(): Promise<void>;
        componentDidUpdate(): Promise<void>;
    }
}
declare module "FlowPage" {
    import { FlowBaseComponent } from "FlowBaseComponent";
    import { IFlowObjectData } from "FlowObjectData";
    export class FlowPage extends FlowBaseComponent {
        constructor(props: any);
        componentDidMount(): Promise<void>;
        componentDidUpdate(): Promise<void>;
        componentWillUnmount(): Promise<void>;
        triggerOutcome(outcomeName: string, data?: IFlowObjectData[]): Promise<void>;
        reloadValues(xhr: XMLHttpRequest, request: any): Promise<void>;
    }
}
declare module "IconPicker" {
    import * as React from 'react';
    import './css/IconPicker.css';
    export default class IconPicker extends React.Component<any, any> {
        icons: any;
        selectedItem: string;
        onchange(e: any): void;
        constructor(props: any);
        render(): JSX.Element;
    }
}
declare module "ModalDialog" {
    import * as React from 'react';
    import './css/ModalDialog.css';
    export class modalDialogButton {
        label: string;
        handler: any;
        constructor(label: string, handler: any);
    }
    export enum eDragEventType {
        unknown = 0,
        canvas = 1,
        table = 2,
        link = 3,
        dialog = 4
    }
    export class DragEvent {
        type: eDragEventType;
        sourceElement: any;
        targetElement: any;
        mouseX: number;
        mouseY: number;
        mouseOffsetX: number;
        mouseOffsetY: number;
        constructor();
        static start(type: eDragEventType, sourceElement: any, mouseX: number, mouseY: number): DragEvent;
        drag(mouseX: number, mouseY: number): void;
        end(target: any, mouseX: number, mouseY: number): any;
    }
    export class ModalDialog extends React.Component<any, any> {
        dragEvent: DragEvent;
        modal: any;
        dialog: any;
        top: number;
        left: number;
        constructor(props: any);
        stopEventBubble(e: any): boolean;
        componentDidMount(): void;
        componentWillUnmount(): void;
        onCloseRequest(): void;
        handleKeyUp(e: any): void;
        handleOutsideClick(e: any): void;
        render(): JSX.Element;
        moveMe(left: number, top: number): void;
        onMouseDown(e: any): void;
        onMouseMove(e: any): void;
        onMouseUp(e: any): void;
    }
}
