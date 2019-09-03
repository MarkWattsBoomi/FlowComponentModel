/// <reference types="lodash" />
import * as React from 'react';
import { FlowAttribute } from './FlowAttribute';
import { FlowDisplayColumn } from './FlowDisplayColumn';
import { FlowField } from './FlowField';
import { FlowObjectData, IFlowObjectData } from './FlowObjectData';
import { FlowObjectDataArray } from './FlowObjectDataArray';
import { FlowOutcome } from './FlowOutcome';
import { IComponentProps } from './interfaces';
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
export declare class FlowBaseComponent extends React.Component<IComponentProps, any, any> {
    url: string;
    userurl: string;
    private User?;
    private TenantId;
    private StateId;
    private FlowKey;
    private ComponentId;
    private ParentId?;
    private Fields;
    private IsLoading;
    private LoadingState;
    private Attributes;
    private Outcomes;
    private Model?;
    readonly tenantId: string;
    readonly stateId: string;
    readonly flowKey: string;
    readonly componentId: string;
    readonly parentId: string | any;
    readonly isLoading: boolean;
    readonly loadingState: string;
    readonly outcomes: {
        [key: string]: FlowOutcome;
    } | any;
    readonly attributes: {
        [key: string]: FlowAttribute;
    } | any;
    readonly fields: {
        [key: string]: FlowField;
    } | any;
    readonly model: IFlowModel | any;
    readonly user: IFlowUser | any;
    readonly joinURI: string;
    getAttribute(attributeName: string, defaultValue?: string): string;
    constructor(props: any);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): Promise<void>;
    loadOutcomes(): void;
    loadAttributes(): void;
    loadModel(): void;
    loadValues(): Promise<void>;
    dontLoadValues(): Promise<void>;
    getStateValue(): string | boolean | number | Date | FlowObjectData | FlowObjectDataArray;
    getStateValueType(): string | boolean | number | Date | FlowObjectData | FlowObjectDataArray;
    setStateValue(value: string | boolean | number | Date | FlowObjectData | FlowObjectDataArray): Promise<void>;
    updateValues(values: FlowField[] | FlowField): Promise<void>;
    sendCollaborationMessage: ((message: any) => void) & import("lodash").Cancelable;
    _sendCollaborationMessage(message: any): void;
    componentDidUpdate(): Promise<void>;
    triggerOutcome(outcomeName: string, data?: IFlowObjectData[]): Promise<void>;
    log(message: string): void;
    launchFlowSilent(tenant: string, flowId: string, player: string, objectData?: FlowObjectDataArray): Promise<void>;
    launchFlowTab(tenant: string, flowId: string, player: string, objectData?: FlowObjectDataArray): Promise<void>;
    receiveMessage(message: any): Promise<void>;
    handleMessage(msg: any): Promise<void>;
}
export {};
