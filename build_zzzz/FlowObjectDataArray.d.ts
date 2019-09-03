import { FlowObjectData, IFlowObjectData } from './FlowObjectData';
import { FlowObjectDataProperty } from './FlowObjectDataProperty';
export declare enum eSortOrder {
    ascending = 0,
    descending = 1
}
export declare class FlowObjectDataArray {
    private Items;
    readonly items: FlowObjectData[];
    sort(ascending?: eSortOrder, fieldName?: string): FlowObjectData[];
    constructor(array?: IFlowObjectData[]);
    addItem(item: FlowObjectData): void;
    clearItems(): void;
    iFlowObjectDataArray(): IFlowObjectData[];
    getItemWithPropertyName(findProperty: string, withValue: any, returnProperty: string): FlowObjectDataProperty | any;
    getItemWithPropertyValue(findProperty: string, withValue: any): FlowObjectData | undefined;
}
