import * as React from 'react';
import './EventManager';
import { FlowAttribute } from './FlowAttribute';
import { FlowDisplayColumn } from './FlowDisplayColumn';
import { FlowField, eContentType } from './FlowField';
import { FlowObjectData, IFlowObjectData } from './FlowObjectData';
import { FlowObjectDataArray } from './FlowObjectDataArray';
import { FlowOutcome } from './FlowOutcome';
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
    content: string;
    dataSource: FlowObjectDataArray;
    developerName: string;
    enabled: boolean;
    hasEvents: boolean;
    height: number;
    helpInfo: string;
    hintInfo: string;
    joinUri: string;
    label: string;
    maxSize: number;
    multiSelect: boolean;
    readOnly: boolean;
    required: boolean;
    searchable: boolean;
    size: number;
    validationMessage: string;
    visible: boolean;
    width: number;
    displayColumns: FlowDisplayColumn[];
}
export declare enum eLoadingState {
    ready = 0,
    loading = 1,
    saving = 2,
    moving = 3,
    inititializing = 4,
    inititialized = 5,
    mounting = 6,
    mounted = 7
}
export declare abstract class FlowBaseComponent extends React.Component<any, any, any> {
    url: string;
    invokeurl: string;
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
    abstract redraw(): void;
    get tenantId(): string;
    get stateId(): string;
    get flowKey(): string;
    get componentId(): string;
    get parentId(): string | undefined;
    get isReady(): boolean;
    get loadingState(): eLoadingState;
    get outcomes(): {
        [key: string]: FlowOutcome;
    } | undefined;
    get attributes(): {
        [key: string]: FlowAttribute;
    } | undefined;
    get fields(): {
        [key: string]: FlowField;
    } | undefined;
    get model(): IFlowModel | undefined;
    get user(): IFlowUser | undefined;
    get joinURI(): string;
    get isDesignTime(): boolean;
    get authenticationToken(): string;
    getAttribute(attributeName: string, defaultValue?: string): string;
    constructor(props: any);
    loadProps(props: any, oldProps?: any): Promise<void>;
    componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void;
    onBeforeSend(xhr: XMLHttpRequest, request: any): void;
    calculateValue(value: string): string;
    onDone(xhr: XMLHttpRequest, request: any): Promise<void>;
    componentDidMount(preserveState?: boolean): Promise<void>;
    preserveState(): Promise<void>;
    componentWillUnmount(): Promise<void>;
    loadOutcome(outcomeId: string): FlowOutcome;
    loadOutcomes(): void;
    getOutcomeById(outcomeId: string): FlowOutcome | undefined;
    loadAttributes(): void;
    loadModel(): void;
    loadValue(valueName: string): Promise<FlowField>;
    loadValueNew(valueName: string): Promise<FlowField>;
    callRequest(url: string, method: string, data: any): Promise<any>;
    sync(): Promise<void>;
    callRequestOldxx(url: string, method: string, data: any): Promise<any>;
    loadAllValues(): Promise<void>;
    dontLoadAllValues(): Promise<void>;
    getStateValue(initializing?: boolean): string | boolean | number | Date | FlowObjectData | FlowObjectDataArray | undefined;
    getStateValueType(): eContentType;
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
export {};
