import { eContentType } from './FlowField';
import { FlowObjectData, IFlowObjectData } from './FlowObjectData';
import { FlowObjectDataArray } from './FlowObjectDataArray';
export interface IFlowObjectDataProperty {
    contentFormat: string | null;
    contentType: string;
    contentValue: string | number | boolean | null;
    developerName: string;
    objectData: IFlowObjectData[] | null;
    typeElementId: string | null;
    typeElementPropertyId: string;
}
export declare class FlowObjectDataProperty {
    static newInstance(developerName: string, contentType: eContentType, value: string | number | boolean | FlowObjectData | FlowObjectDataArray | Date): FlowObjectDataProperty;
    private ContentFormat;
    private ContentType;
    private DeveloperName;
    private TypeElementId;
    private TypeElementPropertyId;
    private Value;
    constructor(property: IFlowObjectDataProperty | undefined);
    get contentFormat(): string;
    set contentFormat(contentFormat: string);
    get contentType(): eContentType;
    set contentType(contentType: eContentType);
    get developerName(): string;
    set developerName(developerName: string);
    get typeElementId(): string;
    set typeElementId(typeElementId: string);
    get typeElementPropertyId(): string;
    set typeElementPropertyId(typeElementPropertyId: string);
    get value(): string | number | boolean | Date | FlowObjectData | FlowObjectDataArray | undefined;
    set value(value: string | number | boolean | Date | FlowObjectData | FlowObjectDataArray | undefined);
    clone(): FlowObjectDataProperty;
    iFlowObjectDataProperty(): IFlowObjectDataProperty;
    get displayString(): string;
}
