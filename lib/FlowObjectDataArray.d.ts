import { FlowDisplayColumn } from './FlowDisplayColumn';
import { FlowObjectData, IFlowObjectData } from './FlowObjectData';
import { FlowObjectDataProperty } from './FlowObjectDataProperty';
export declare enum eSortOrder {
    ascending = 0,
    descending = 1
}
export declare class FlowObjectDataArray {
    private Items;
    get items(): FlowObjectData[];
    sort(order: eSortOrder, fieldName?: string): FlowObjectData[];
    constructor(array?: IFlowObjectData[]);
    static fromJSONString(json: string, primaryKey: string, columns: FlowDisplayColumn[], flowTypeName: string): FlowObjectDataArray;
    addItem(item: FlowObjectData): void;
    clearItems(): void;
    clone(): FlowObjectDataArray;
    iFlowObjectDataArray(selected?: boolean): IFlowObjectData[];
    getItemWithPropertyName(findProperty: string, withValue: any, returnProperty: string): FlowObjectDataProperty | any;
    getSelectedItems(): FlowObjectDataArray;
    getItemWithPropertyValue(findProperty: string, withValue: any): FlowObjectData | undefined;
    getIndexOfItemWithPropertyValue(findProperty: string, withValue: any): number;
    removeItemWithPropertyValue(findProperty: string, withValue: any): number;
    removeItemAtIndex(index: number): number;
}
