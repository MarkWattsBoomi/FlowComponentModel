import { FlowDisplayColumn } from './FlowDisplayColumn';
import { eContentType } from './FlowField';
import { FlowObjectData , IFlowObjectData} from './FlowObjectData';
import { FlowObjectDataProperty } from './FlowObjectDataProperty';

export enum eSortOrder {
    ascending,
    descending,
}

export class FlowObjectDataArray {

    private Items: FlowObjectData[];

    get items(): FlowObjectData[] {
        return this.Items;
    }

    sort(order: eSortOrder, fieldName?: string): FlowObjectData[] {

        if (order === eSortOrder.ascending) {
            if (fieldName) {
                return this.Items.sort((a, b) => {

                    let valA: any;
                    let valB: any;
                    switch (a.properties[fieldName].contentType) {
                        case  eContentType.ContentNumber:
                            valA = parseFloat(a.properties[fieldName].value as string);
                            valB = parseFloat(b.properties[fieldName].value as string);
                            break;

                        case  eContentType.ContentDateTime:
                            valA = new Date(a.properties[fieldName].value as string);
                            valB = new Date(b.properties[fieldName].value as string);
                            break;

                        default:
                            valA = a.properties[fieldName].value;
                            valB = b.properties[fieldName].value;
                            break;

                    }

                    switch (true) {
                        case valA < valB:
                            return -1;

                        case valA > valB:
                            return 1;

                        default:
                            return 0;

                    }

                });
            } else {
                return this.Items.sort((a, b) => a.order - b.order);
            }
        } else {
            if (fieldName) {
                return this.Items.sort((a, b) => {
                    if(a && b && a.properties && b.properties && a.properties[fieldName] && 
                        b.properties[fieldName] && a.properties[fieldName].value && b.properties[fieldName].value)
                    {
                        if(a.properties[fieldName]) {
                            switch (true) {
                                case a.properties[fieldName].value < b.properties[fieldName].value:
                                    return 1;

                                case a.properties[fieldName].value > b.properties[fieldName].value:
                                    return -1;

                                default:
                                    return 0;
                            }
                        }
                        else {
                            return 0;
                        }
                    }
                    else
                    {
                        return 0;
                    }

                });
            } else {
                return this.Items.sort((a, b) => a.order - b.order);
            }
        }
    }

    constructor(array?: IFlowObjectData[]) {
        this.Items = [];
        for (const item of array || []) {
            this.Items.push(new FlowObjectData([item]));
        }
    }

    static fromJSONString(json: string, primaryKey: string, columns: FlowDisplayColumn[], flowTypeName: string) : FlowObjectDataArray {
        let objDataArray: FlowObjectDataArray = new FlowObjectDataArray();
        let model: any[] = JSON.parse(json);
        model.forEach((item: any) => {
            let objData: FlowObjectData = FlowObjectData.newInstance(flowTypeName);
            columns.forEach((col: FlowDisplayColumn) => {
                let val: any = item[col.developerName]; 
                if(col.developerName===primaryKey){
                    //objData.internalId = val;
                    objData.externalId = val;
                }
                switch(col.contentType){
                    case eContentType.ContentDateTime:
                        val = new Date(val);
                        if(val && !isNaN(val.getTime())){
                            val=val.toISOString();
                        }
                        else {
                            val="";
                        }
                        break;
                    case eContentType.ContentNumber:
                        val = parseFloat(""+val);
                        if(val && !isNaN(val)){
                            val=""+val;
                        }
                        else {
                            val="";
                        }
                        break;
                    case eContentType.ContentBoolean:
                        val = (new String(val).toLowerCase() === "true");
                        break;
                }
                objData.addProperty(FlowObjectDataProperty.newInstance(col.developerName, col.contentType, val));
                objData.properties[col.developerName].typeElementPropertyId = col.typeElementPropertyId;
            });
            objDataArray.addItem(objData);
        });

        return objDataArray;
    }

    addItem(item: FlowObjectData) {
        this.Items.push(item);
    }

    clearItems() {
        this.Items = [];
    }

    clone() : FlowObjectDataArray {
        const clone: FlowObjectDataArray = new FlowObjectDataArray();

        this.items.forEach((obj: FlowObjectData) => {
            clone.addItem(obj.clone());
        });
        return clone;
    }

    iFlowObjectDataArray(selected?: boolean): IFlowObjectData[] {
        const output: IFlowObjectData[] = [];
        for (const od of this.Items) {
            output.push(od.iObjectData(selected));
        }
        return output;
    }

    getItemWithPropertyName(findProperty: string, withValue: any, returnProperty: string): FlowObjectDataProperty | any {
        for (const item of this.Items) {
            if (item.properties[findProperty] && item.properties[findProperty].value  != undefined) {

                let value = item.properties[findProperty].value;
                let compareTo = withValue;

                switch (item.properties[findProperty].contentType) {
                    case eContentType.ContentString:
                        value = (value as string).toLowerCase();
                        compareTo = compareTo.toLowerCase();
                        break;

                    case eContentType.ContentNumber:
                        value = value;
                        compareTo = parseFloat(compareTo.toLowerCase());
                        break;

                    case eContentType.ContentBoolean:
                        value = value;
                        compareTo = new String(compareTo).toLowerCase() === 'true';
                        break;

                    default:
                        break;
                }

                if (value  === compareTo) {
                    return item.properties[returnProperty];
                }
            }
        }
        return null;
    }

    getSelectedItems(): FlowObjectDataArray{
        const results: FlowObjectDataArray = new FlowObjectDataArray();
        for (const item of this.Items) {
            if(item.isSelected === true) {
                results.addItem(item);
            }
        }
        return results;
    }

    getItemWithPropertyValue(findProperty: string, withValue: any): FlowObjectData | undefined {
        for (const item of this.Items) {
            if (item.properties[findProperty] && item.properties[findProperty].value != undefined) {
                    let value = item.properties[findProperty].value;
                    let compareTo = withValue;

                    switch (item.properties[findProperty].contentType) {
                        case eContentType.ContentString:
                            value = (value as string).toLowerCase();
                            compareTo = new String(compareTo).toLowerCase();
                            break;

                        case eContentType.ContentNumber:
                            value = value;
                            compareTo = parseFloat(new String(compareTo).toLowerCase());
                            break;

                        case eContentType.ContentBoolean:
                            value = value;
                            compareTo = new String(compareTo).toLowerCase() === 'true';
                            break;

                        default:
                            break;
                    }

                    if (value === compareTo) {
                        return item;
                    }

            }
        }
    }

    getIndexOfItemWithPropertyValue(findProperty: string, withValue: any): number {
        for (let pos: number = 0; pos < this.items.length; pos++) {
            const item = this.items[pos];
            if (item.properties[findProperty] && item.properties[findProperty].value  != undefined) {
                    let value = item.properties[findProperty].value;
                    let compareTo = withValue;

                    switch (item.properties[findProperty].contentType) {
                        case eContentType.ContentString:
                            value = (value as string).toLowerCase();
                            compareTo = compareTo.toLowerCase();
                            break;

                        case eContentType.ContentNumber:
                            value = value;
                            compareTo = parseFloat(new String(compareTo).toLowerCase());
                            break;

                        case eContentType.ContentBoolean:
                            value = value;
                            compareTo = new String(compareTo).toLowerCase() === 'true';
                            break;

                        default:
                            break;
                    }

                    if (value === compareTo) {
                        return pos;
                    }

            }
        }
        return -1;
    }

    removeItemWithPropertyValue(findProperty: string, withValue: any): number {
        let modifiedCount: number = 0;
        for (let pos: number = 0; pos < this.items.length; pos++) {
            const item = this.items[pos];
            if (item.properties[findProperty] && item.properties[findProperty].value != undefined) {
                    let value = item.properties[findProperty].value;
                    let compareTo = withValue;

                    switch (item.properties[findProperty].contentType) {
                        case eContentType.ContentString:
                            value = (value as string).toLowerCase();
                            compareTo = compareTo.toLowerCase();
                            break;

                        case eContentType.ContentNumber:
                            value = value;
                            compareTo = parseFloat(new String(compareTo).toLowerCase());
                            break;

                        case eContentType.ContentBoolean:
                            value = value;
                            compareTo = new String(compareTo).toLowerCase() === 'true';
                            break;

                        default:
                            break;
                    }

                    if (value === compareTo) {
                        this.items.splice(pos,1);
                        modifiedCount++;
                    }

            }
        }
        return modifiedCount;
    }

    removeItemAtIndex(index: number): number {
        let modifiedCount: number = 0;
        if(this.items[index]) {
            this.items.splice(index,1);
            modifiedCount=index;
        }
        return modifiedCount;
    }
}
