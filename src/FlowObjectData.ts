import { FlowObjectDataProperty, IFlowObjectDataProperty } from './FlowObjectDataProperty';

declare const manywho: any;

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
    private DeveloperName: string = "";
    private ExternalId: string = "";
    private InternalId: string = "";
    private IsSelected: boolean = false;
    private Order: number = 0;
    private TypeElementId: string = "";
    private Properties: {[key: string]: FlowObjectDataProperty} = {};

    get developerName(): string {
        return this.DeveloperName;
    }
    set developerName(developerName: string) {
        this.DeveloperName = developerName;
    }

    get externalId(): string {
        return this.ExternalId;
    }
    set externalId(externalId: string) {
        this.ExternalId = externalId;
    }

    get internalId(): string {
        return this.InternalId;
    }
    set internalId(internalId: string) {
        this.InternalId = internalId;
    }

    get isSelected(): boolean {
        return this.IsSelected;
    }
    set isSelected(isSelected: boolean) {
        this.IsSelected = isSelected;
    }

    get order(): number {
        return this.Order;
    }
    set order(order: number) {
        this.Order = order;
    }

    get typeElementId(): string {
        return this.TypeElementId;
    }
    set typeElementId(typeElementId: string) {
        this.TypeElementId = typeElementId;
    }

    get properties(): {[key: string]: FlowObjectDataProperty} {
        return this.Properties;
    }

    constructor(data?: IFlowObjectData[]) {
        if (data && data[0]) {
            const objectData = data[0];
            this.DeveloperName = objectData.developerName;
            this.InternalId = objectData.internalId;
            this.ExternalId = objectData.externalId;
            this.Order = objectData.order;
            this.IsSelected = objectData.isSelected;
            this.TypeElementId = objectData.typeElementId;
            if(objectData.properties && objectData.properties.length > 0) {
                for (const property of objectData.properties) {
                    this.Properties[property.developerName] = new FlowObjectDataProperty(property);
                }
            }
        }
        else {
            console.log("null data");
        }
    }

    static newInstance(developerName: string) {

        const data: IFlowObjectData = {
            developerName,
            externalId : "",
            internalId : manywho.utils.guid(),
            isSelected : false,
            order: 0,
            properties : [],
            typeElementId : ""
        };
        return new this([data]);
    }

    addProperty(newProperty: FlowObjectDataProperty) {
        this.Properties[newProperty.developerName] = newProperty;
    }

    removeProperty(key: string) {
        delete this.Properties[key];
    }

    clone(newTypeName?: string) {
        const clone: FlowObjectData = FlowObjectData.newInstance(newTypeName || this.DeveloperName);
        Object.keys(this.properties).forEach((key: string) => {
            const newProp: FlowObjectDataProperty = this.properties[key].clone();
            clone.properties[key] = newProp;
        });
        return clone;
    }

    iObjectData(selected?: boolean) {

        const props: IFlowObjectDataProperty[] = [];

        for (const key of Object.keys(this.properties)) {
            props.push(this.properties[key].iFlowObjectDataProperty());
        }

        const objectData: any = {
            developerName: this.developerName,
            externalId : this.externalId,
            internalId : this.internalId,
            isSelected : selected || this.isSelected,
            order : this.order,
            properties: props,
            typeElementId: this.TypeElementId
        };

        return objectData;
    }

    iFlowObjectDataArray(selected?: boolean): IFlowObjectData[] {
        const output: IFlowObjectData[] = [];
        output.push(this.iObjectData(selected));
        return output;
    }

}
