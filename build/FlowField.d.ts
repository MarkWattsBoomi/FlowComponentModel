import { FlowObjectData, IFlowObjectData } from './FlowObjectData';
import { FlowObjectDataArray } from './FlowObjectDataArray';
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
export declare enum eContentType {
    ContentString = 0,
    ContentNumber = 1,
    ContentObject = 2,
    ContentBoolean = 3,
    ContentList = 4,
    ContentPassword = 5,
    ContentContent = 6,
    ContentDateTime = 7,
    ContentEncrypted = 8
}
export declare class FlowField {
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
    value: string | number | Date | boolean | FlowObjectData | FlowObjectDataArray;
    constructor(field: IFlowField);
    iFlowField(): IFlowField;
}
