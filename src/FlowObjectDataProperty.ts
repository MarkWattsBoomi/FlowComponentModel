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

export class FlowObjectDataProperty {

    static newInstance(developerName: string, contentType: eContentType, value: string | number | boolean | FlowObjectData | FlowObjectDataArray) {

        let cv: any;
        let objd: IFlowObjectData[] = [];

        switch (contentType) {
            case eContentType.ContentObject:
                const od: FlowObjectData = value as FlowObjectData;
                objd.push(od.iObjectData());
                break;

            case eContentType.ContentList:
                const oda: FlowObjectDataArray = value as FlowObjectDataArray;
                objd = oda.iFlowObjectDataArray();
                break;
            
            case eContentType.ContentNumber:
                cv = value as number;
                break;

            case eContentType.ContentBoolean:
                cv = value as boolean;
                break;

            default:
                cv = value as string;
                break;
        }
        const data: IFlowObjectDataProperty = {
            contentFormat: "",
            contentType: eContentType[contentType],
            contentValue: cv,
            developerName,
            objectData: objd,
            typeElementId: "",
            typeElementPropertyId: "",
        };
        return new this(data);
    }

    private ContentFormat: string = "";
    private ContentType: eContentType = eContentType.unknown;
    private DeveloperName: string = "";
    private TypeElementId: string = "";
    private TypeElementPropertyId: string= "";
    private Value: string | number | boolean | Date | FlowObjectData | FlowObjectDataArray | undefined;

    constructor(property: IFlowObjectDataProperty | undefined) {
        if(property) {
            this.DeveloperName = property.developerName;
            this.ContentType = eContentType[property.contentType as keyof typeof eContentType];
            this.ContentFormat = property.contentFormat? property.contentFormat : "";
            this.TypeElementId = property.typeElementId? property.typeElementId : "";
            this.TypeElementPropertyId = property.typeElementPropertyId;

            switch (this.ContentType) {
                case eContentType.ContentObject:
                    this.Value = property.objectData ? new FlowObjectData(property.objectData) : undefined;
                    break;

                case eContentType.ContentList:
                    this.Value = property.objectData ? new FlowObjectDataArray(property.objectData) : new FlowObjectDataArray([]);
                    break;

                case eContentType.ContentNumber:
                    this.Value = property.contentValue ? parseFloat(""+property.contentValue as string) : null;
                    break;
                
                case eContentType.ContentBoolean:
                    this.Value = (("" + property.contentValue).trim().toLowerCase()) === "true"? true : false;
                    break;
                case eContentType.ContentDateTime:
                    this.Value = new Date(property.contentValue as string);
                    break;
                default:
                    this.Value = property.contentValue? "" + property.contentValue : "" ;
                    break;
            }
        }
    }

    get contentFormat(): string {
            return this.ContentFormat;
        }
    set contentFormat(contentFormat: string) {
            this.contentFormat = contentFormat;
        }

    get contentType(): eContentType {
        return this.ContentType;
        }
    set contentType(contentType: eContentType) {
        this.ContentType = contentType;
        }

    get developerName(): string {
        return this.DeveloperName;
        }
    set developerName(developerName: string) {
        this.DeveloperName = developerName;
        }

    get typeElementId(): string {
        return this.TypeElementId;
        }
    set typeElementId(typeElementId: string) {
        this.TypeElementId = typeElementId;
        }

    get typeElementPropertyId(): string {
        return this.TypeElementPropertyId;
        }
    set typeElementPropertyId(typeElementPropertyId: string) {
        this.TypeElementPropertyId = typeElementPropertyId;
        }

    get value(): string | number | boolean | Date | FlowObjectData | FlowObjectDataArray | undefined {
        switch (this.contentType) {
            case eContentType.ContentNumber:
                return this.Value; //parseFloat(this.Value ? this.Value as string : '0');

            case eContentType.ContentBoolean:
                return this.Value;// (new String(this.Value).toLowerCase() === 'true');

            case eContentType.ContentDateTime:
                return this.Value; //isNaN((this.Value as Date).getTime()) ? "" : (this.Value as Date).toISOString() ;

            default:
                return this.Value;
        }

    }

    set value(value: string | number | boolean | Date | FlowObjectData | FlowObjectDataArray | undefined) {
        this.Value = value;
    }

    clone() : FlowObjectDataProperty {

        let value: any;
        switch(this.contentType) {
            case eContentType.ContentList: 
                value = new FlowObjectDataArray();
                (this.value as FlowObjectDataArray).items.forEach((item: FlowObjectData) => {
                    (value as FlowObjectDataArray).addItem(item.clone(item.developerName));
                })
                break;

            case eContentType.ContentObject:
                value=(this.value as FlowObjectData).clone((this.value as FlowObjectData).developerName);
                break;
            
            default:
                value = this.value;
        }
        const clone: FlowObjectDataProperty = FlowObjectDataProperty.newInstance(this.developerName, this.contentType, value);
        return clone;
    }

    iFlowObjectDataProperty(): IFlowObjectDataProperty {

        let contentValue: string = "";
        let objectData: IFlowObjectData[] = [];

        switch (this.ContentType) {
            case eContentType.ContentObject:
                const od: FlowObjectData = this.Value as FlowObjectData;

                // if it has no developerName then skip it
                if (od && od.developerName && od.developerName.length > 0) {
                    objectData.push(od.iObjectData());
                }
                break;

            case eContentType.ContentList:
                const oda: FlowObjectDataArray = this.Value as FlowObjectDataArray;
                objectData = oda.iFlowObjectDataArray();
                break;
            case eContentType.ContentNumber:
                contentValue = "" + parseFloat(this.Value ? this.Value as string : '0');
                break;

            case eContentType.ContentBoolean:
                contentValue = "" + (new String(this.Value).toLowerCase() === 'true');
                break;

            case eContentType.ContentDateTime:
                contentValue = isNaN((this.Value as Date).getTime()) ? "" : (this.Value as Date).toISOString() ;
                break;

            default:
                contentValue = this.Value as string;
                break;
        }

        const output: IFlowObjectDataProperty = {
            contentFormat: this.ContentFormat,
            contentType: eContentType[this.ContentType],
            contentValue,
            developerName: this.DeveloperName,
            objectData,
            typeElementId: this.TypeElementId,
            typeElementPropertyId: this.TypeElementPropertyId,
        };
        return output;

    }

    get displayString(): string {
        let label: string = '';
    
        if (this.Value) {
            switch (this.ContentType) {
                case eContentType.ContentString:
                case eContentType.ContentNumber:
                    label = this.Value as string;
                    break;
    
                case eContentType.ContentBoolean:
                    if (this.Value === true) {
                        label = 'True';
                    } else {
                        label = 'False';
                    }
                    break;
    
                case eContentType.ContentDateTime:
                    const d: number = Date.parse(this.Value as string);
                    if (!isNaN(d)) {
                        const dt: Date = new Date(d);
                        if (label.length <= 10) {
                            return dt.toLocaleDateString();
                        } else {
                            return dt.toLocaleString();
                        }
                    }
                    break;
    
                default:
                    label = eContentType[this.ContentType];
                    break;
            }
        } else {
            label = 'Undefined';
        }
        return label;
    }

}
