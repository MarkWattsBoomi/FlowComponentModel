import * as React from 'react';
import { modalDialogButton } from './Dialogs/Common';
import './EventManager';
import { FlowAttribute } from './FlowAttribute';
import { FlowDisplayColumn } from './FlowDisplayColumn';
import { FlowField, IFlowField, eContentType } from './FlowField';
import { FlowObjectData, IFlowObjectData} from './FlowObjectData';
import { FlowObjectDataArray } from './FlowObjectDataArray';
import { FlowOutcome, IFlowOutcome } from './FlowOutcome';

var throttle = require('lodash.throttle');


declare const manywho: any;

interface IFlowStateValue {
    contentType: string;
    contentValue: string;
    developerName: string;
    objectData: any[];
    typeElementDeveloperName: string;
    typeElementId: string;
    typeElementPropertyDeveloperName: string;
    typeElementPropertyId: string;
    valueElementId: string;
}

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


export enum eLoadingState {
    ready=0,
    loading=1,
    saving=2,
    moving=3,
    inititializing=4,
    inititialized=5,
    mounting=6,
    mounted=7
}

//export type eLoadingState = "ready" | "loading" | "saving" | "moving" | "inititializing" | "inititialized" | "mounting" | "mounted";


export class FlowBaseComponent extends React.Component<any, any, any> {

    url: string;
    invokeurl: string;
    userurl: string;
    valueurl: string;
    private User?: IFlowUser;
    private TenantId: string;
    private StateId: string;
    private FlowKey: string;
    private ComponentId: string;
    private ParentId?: string;
    private Fields: {[key: string]: FlowField} = {};
    private LoadingState: eLoadingState;
    private Attributes: {[key: string]: FlowAttribute} = {};
    private Outcomes: {[key: string]: FlowOutcome} = {};
    private Model?: IFlowModel;
    private IsDesignTime: boolean;

    get tenantId(): string {
        return this.TenantId;
    }

    get stateId(): string {
        return this.StateId;
    }

    get flowKey(): string {
        return this.FlowKey;
    }

    get componentId(): string {
        return this.ComponentId;
    }

    get parentId(): string | undefined {
        return this.ParentId;
    }

    get isReady(): boolean {
        if(this.LoadingState === eLoadingState.ready) {
            return true;
        }
        else {
            return false;
        }
    }

    get loadingState(): eLoadingState {
        return this.LoadingState;
    }

    get outcomes(): {[key: string]: FlowOutcome} | undefined {
        return this.Outcomes;
    }

    get attributes(): {[key: string]: FlowAttribute} | undefined {
        return this.Attributes;
    }

    get fields(): {[key: string]: FlowField} | undefined {
        return this.Fields;
    }

    get model(): IFlowModel | undefined {
        return this.Model;
    }

    get user(): IFlowUser | undefined {
        return this.User;
    }

    get joinURI(): string {
        return window.location.href;
    }

    get isDesignTime(): boolean {
        return this.IsDesignTime;
    }

    get authenticationToken() : string {
        return JSON.parse(sessionStorage.flowUser).authenticationToken;
    }

    getAttribute(attributeName: string, defaultValue?: string): string {
        if (this.attributes[attributeName]) {
            return this.attributes[attributeName].value;
        } else {
            return defaultValue || '';
        }
    }

    

    constructor(props: any) {
        super(props);

        this.Fields = {};
        this.LoadingState = eLoadingState.inititializing;
        this.loadAllValues = this.loadAllValues.bind(this);
        this.dontLoadAllValues = this.dontLoadAllValues.bind(this);
        this.updateValues = this.updateValues.bind(this);
        this.triggerOutcome = this.triggerOutcome.bind(this);
        this.ComponentId = this.props.id;
        this.ParentId = this.props.parentId;
        this.FlowKey = this.props.flowKey;
        this.Attributes = {};
        this.loadModel = this.loadModel.bind(this);
        this.loadAttributes = this.loadAttributes.bind(this);
        this.loadOutcomes = this.loadOutcomes.bind(this);
        this.receiveMessage = this.receiveMessage.bind(this);
        this.getStateValue = this.getStateValue.bind(this);
        this.setStateValue = this.setStateValue.bind(this);
        this.getStateValueType = this.getStateValueType.bind(this);
        this.sendCollaborationMessage = this.sendCollaborationMessage.bind(this);
        this.onBeforeSend = this.onBeforeSend.bind(this);
        this.onDone = this.onDone.bind(this);
        this.calculateValue = this.calculateValue.bind(this);

        window.addEventListener('message', this.receiveMessage, false);

        this.loadModel();
        this.loadAttributes();
        this.loadOutcomes();

        let baseUrl: string = "";
        if((!manywho.settings.global('platform.uri')) && (manywho.settings.global('platform.uri').length <= 0)) {
            baseUrl = window.location.origin || 'https://flow.manywho.com';
        } 
        else {
            baseUrl = manywho.settings.global('platform.uri');
        }
        this.StateId = manywho.utils.extractStateId(this.props.flowKey);
        this.TenantId = manywho.utils.extractTenantId(this.props.flowKey);
        this.invokeurl = `${baseUrl}/api/run/1/state/${this.StateId}`;
        this.url = `${baseUrl}/api/run/1/state/${this.StateId}/values`;
        this.userurl = `${baseUrl}/api/run/1/state/${this.StateId}/values/03dc41dd-1c6b-4b33-bf61-cbd1d0778fff`;
        this.valueurl = `${baseUrl}/api/run/1/state/${this.StateId}/values/name`;

        this.LoadingState = eLoadingState.inititialized;
    }

    onBeforeSend(xhr: XMLHttpRequest, request: any) {
        if(request)
        {
            const oc: FlowOutcome = this.getOutcomeById(request.mapElementInvokeRequest.selectedOutcomeId);
            const oct: FlowOutcome = (manywho as any).eventManager.outcomeBeingTriggered;
            if(oc){
                if(!oct || oct.id !== oc.id)
                {
                    (manywho as any).eventManager.outcomeBeingTriggered = oc;
                }
            }
            
        }
        else
        {
            (manywho as any).eventManager.outcomeBeingTriggered = undefined;
        }


    }

    // this takes a string containing either a literal value or the name of a field surrounded with {{..}}
    // if it's literal it just returns otherwise it gets the value.
    // it can go down levels like val.attribute.subval etc
    // NOTE: there's a good chance timing wise that there are no fields yet
    // so we just return value if any errors are encountered like val === null
    calculateValue( value: string): string {
        // is it replaceable?  starts and ends with {{}}
        if (value.startsWith('{{') && value.endsWith('}}')) {
            // value points to a field, get it's value
            let stripped: string = value.replace('{{', '');
            stripped = stripped.replace('}}', '');

            let val: any;
            let result: string = '';
            // it could be a sub field with parent.child
            const strippedBits: string[] = stripped.split('.');

            // loop over bits
            for (let pos = 0 ; pos < strippedBits.length ; pos++) {
                // pos 0 will set val for any child elements
                if (pos === 0) {
                    //if(!this.fields[strippedBits[pos]]) {
                    //    await this.loadValue(strippedBits[pos]);
                    //}
                    val = this.fields[strippedBits[pos]];
                    if (!val) {
                        console.log('The Value [' + strippedBits[pos] + '] was not found, have you included it in your flow');
                        result = value;
                    } else {
                        if (val.ContentType !== eContentType.ContentObject && val.ContentType !== eContentType.ContentList) {
                        result = val.value as string;
                        }
                    }
                } else {
                    // did bits 0 get a val?
                    if (val) {
                        const ele = (val.value as FlowObjectData).properties[strippedBits[pos]];
                        if (ele) {
                            if (ele.contentType === eContentType.ContentObject || ele.contentType === eContentType.ContentList) {
                                val = (val.value as FlowObjectData).properties[strippedBits[pos]].value;
                            } else {
                                result = (val.value as FlowObjectData).properties[strippedBits[pos]].value as string;
                            }
                        } else {
                            result = value;
                        }
                    } else {
                        result = value;
                    }
                }
            }
            return result;
        } else {
            return value;
        }
    }

    async onDone(xhr: XMLHttpRequest, request: any) {
        //this handles the new subflow concept.
        //the flow could have moved to a sub flow and if so we need to reload all data
        //console.log("fbc onDone start " + new Date().getTime());
        if ((xhr as any).invokeType === 'FORWARD') {
            //console.log("fbc onDone forward " + new Date().getTime());
            manywho.model.parseEngineResponse(xhr, this.flowKey);
            this.loadModel();
            this.loadAttributes();
            this.loadOutcomes();
            //console.log("fbc onDone preserving " + new Date().getTime());
            await this.preserveState();
            //console.log("fbc onDone preserved " + new Date().getTime())
        }
        if((manywho as any).eventManager.outcomeBeingTriggered && (manywho as any).eventManager.outcomeBeingTriggered.attributes) {
            
            const outcome: FlowOutcome = (manywho as any).eventManager.outcomeBeingTriggered;
            
            Object.keys((manywho as any).eventManager.outcomeBeingTriggered.attributes).forEach(async (key: string) => {
                const attr: FlowAttribute = (manywho as any).eventManager.outcomeBeingTriggered.attributes[key];
                let targetUrl: FlowAttribute;
                switch(attr.name.toLowerCase()) {
                    case "autoclose":
                        if(attr.value.toLowerCase() === "true"){
                            window.close();
                        }
                        break;

                    case "autoopen":
                            targetUrl = outcome.attributes.AutoOpenUrl || undefined;

                            if(targetUrl && targetUrl.value.length > 0)
                            {
                                let url: string = await this.calculateValue(targetUrl.value);
                                var wnd = window.open(url, "_blank");
                            }
                            else
                            {
                                alert("No 'AutoOpenUrl' specified in the outcome's attributes");
                            }
                            break;

                    case "autonav":
                    case "automove":
                            targetUrl = outcome.attributes.AutoNavUrl || undefined;

                            if(targetUrl && targetUrl.value.length > 0)
                            {
                                let url: string = await this.calculateValue(targetUrl.value);
                                var wnd = window.open(url, "_blank");
                            }
                            else
                            {
                                alert("No 'AutoNavUrl' specified in the outcome's attributes");
                            }
                            break;

                    case "autoprint":
                            window.print();
                            break;
                    
                }
            });

            
        }
        //turn of moving flag
        //console.log("fbc onDone end " + new Date().getTime())
        this.LoadingState = eLoadingState.ready;
        (manywho as any).eventManager.outcomeBeingTriggered = undefined;
    }


    async componentDidMount(preserveState: boolean = true): Promise<void> {

        this.LoadingState = eLoadingState.mounting;
        //add outcome manager stuff
        (manywho as any).eventManager.addDoneListener(this.onDone,this.componentId + "_core");
        (manywho as any).eventManager.addBeforeSendListener(this.onBeforeSend,this.componentId + "_core");

        // preserve state
        await this.preserveState();

        this.LoadingState = eLoadingState.mounted;
        manywho.utils.removeLoadingIndicator('loader');
        return Promise.resolve();

    }

    async preserveState() {
        this.LoadingState = eLoadingState.mounting;

        await this.setStateValue(this.getStateValue(true));

        this.LoadingState = eLoadingState.mounted;
    }

    async componentWillUnmount(): Promise<void> {
        (manywho as any).eventManager.removeBeforeSendListener(this.componentId + "_core");
        (manywho as any).eventManager.removeDoneListener(this.componentId + "_core");
        return Promise.resolve();
    }

    loadOutcome(outcomeId: string) : FlowOutcome{
        if(outcomeId) {
            const outcome = manywho.model.getOutcome(outcomeId, this.props.flowKey);
            if(outcome) {
                this.Outcomes[outcome.developerName] = new FlowOutcome(outcome);
                return this.Outcomes[outcome.developerName];
            }
        }
    }

    loadOutcomes() {

        this.Outcomes = {};

        // add the outcomes from this component
        let outs = manywho.model.getOutcomes(this.props.id, this.props.flowKey);
        for (const outcome of outs) {
            this.Outcomes[outcome.developerName] = new FlowOutcome(outcome);
        }
        // and the ones from the parent page
        outs = manywho.model.getOutcomes('', this.props.flowKey);
        for (const outcome of outs) {
            if(outcome.pageObjectBindingId === this.ComponentId){
                this.Outcomes[outcome.developerName] = new FlowOutcome(outcome);
            }
        }
    }

    getOutcomeById(outcomeId: string): FlowOutcome | undefined {
        let oc;
        Object.keys(this.outcomes).forEach((key: string) => {
            if(this.outcomes[key].id === outcomeId) {
                oc = this.outcomes[key];
            }
        });
        if(!oc){
            oc = this.loadOutcome(outcomeId);
        }
        return oc;
    }

    loadAttributes() {
        const model = manywho.model.getComponent(this.ComponentId, this.FlowKey);
        if(model) {
            // add the attributes
            const attrs = model.attributes;
            if (attrs) {
                for (const key of Object.keys(attrs)) {
                    this.Attributes[key] = new FlowAttribute(key, attrs[key]);
                }
            }
        }
    }

    loadModel() {
        const model = manywho.model.getComponent(this.ComponentId, this.FlowKey);
        if (model) {
            this.Model = {
                contentType: model.contentType,
                content: model.content,
                dataSource:  new FlowObjectDataArray([]),
                developerName: model.developerName,
                displayColumns: [],
                enabled:  model.isEnabled,
                hasEvents: model.hasEvents,
                height:  model.height,
                helpInfo:  model.helpInfo,
                hintInfo:  model.hintValue,
                joinUri: this.joinURI,
                label:  model.label,
                maxSize:  model.maxSize,
                multiSelect:  model.isMultiSelect,
                readOnly:  !model.isEditable,
                required:  model.isRequired,
                searchable: model.isSearchable,
                size:  model.size,
                validationMessage:  model.validationMessage,
                visible:  model.isVisible,
                width: model.width,
            };

            // get the datasource value name
            const ds = model.objectData;
            if (ds) {
                for (const od of ds) {
                    this.Model.dataSource.addItem(new FlowObjectData([od]));
                }
            }

            const cols = model.columns;
            if (cols) {
                for (const col of cols) {
                    this.Model.displayColumns.push(new FlowDisplayColumn(col));
                }
            }
        }
    }

    async loadValue(valueName: string): Promise<FlowField> {
        this.LoadingState = eLoadingState.loading;

        let value: any;
        try {
            value = await this.callRequest(this.valueurl + "/" + valueName,'GET',{});
        }
        catch(e) {

        }
        finally {
            if(value) {
                this.Fields[value.developerName] = new FlowField(value); 
            }

            this.LoadingState = eLoadingState.ready;

            return this.Fields[value.developerName];
        }
    }

    async loadValueNew(valueName: string): Promise<FlowField> {
        this.LoadingState = eLoadingState.loading;

        let value: any;
        try {
            value = await this.callRequest(this.valueurl + "/" + valueName,'GET',{});
        }
        catch(e) {

        }
        finally {
            if(value) {
                this.Fields[value.developerName] = new FlowField(value); 
            }

            this.LoadingState = eLoadingState.ready;

            return this.Fields[value.developerName];
        }
    }
   
    async callRequest(url: string, method: string, data: any): Promise<any> {
        let results: any;
        const request: RequestInit = {};
        const token: string = manywho.state.getAuthenticationToken(this.flowKey);

        request.method = method;  
        request.headers = {
            "Content-Type": "application/json",
            "ManyWhoTenant": this.tenantId
        };
        if(token) {
            request.headers.Authorization = token;
        }
        request.credentials= "same-origin";

        if(method === "POST" || method === "PUT") {
            request.body = JSON.stringify(data);
        }
            
        let response = await fetch(url, request);
        //let body: string =  await this.getResultBodyTextxx(response);
        if(response.status === 200) {
            //const json = await this.getResultBodyText(response);
            
            results = await response.json();

            console.log("Fetch Complete");
           
        }
        else {
            //error
            const errorText = await response.text();
            console.log("Fetch Failed - " + errorText);
            
        }

        return results;
    }

    async callRequestOldxx( url: string, method: string, data: any): Promise<any> {
        let output: any;
        const xhr = await manywho.connection.request(this, null, url , method, this.TenantId, this.StateId, manywho.state.getAuthenticationToken(this.FlowKey), data)

        return xhr;
    }

    async loadAllValues(): Promise<void> {
        this.LoadingState = eLoadingState.loading;
        this.Fields = {};
        const values: any = await this.callRequest(this.url,'GET',{});

        ((values as Array<IFlowStateValue>) || []).map((value: IFlowStateValue) => {
            if(value) {
                this.Fields[value.developerName] = new FlowField(value); 
            }
        });

        const userval = await this.callRequest(this.userurl,'GET',{});
        //manywho.connection.request(this, "", this.userurl , 'GET', this.TenantId, this.StateId, manywho.state.getAuthenticationToken(this.FlowKey), {});
        if(userval) {
            const u = new FlowField(userval);
            const props = (u.value as FlowObjectData).properties;
    
            this.User = {
                directoryId: props['Directory Id'].value as string,
                directoryName: props['Directory Name'].value as string,
                email: props['Email'].value as string || 'mark',
                firstName: props['First Name'].value as string,
                groupId: props['Primary Group Id'].value as string,
                groupName: props['Primary Group Name'].value as string,
                id: props['User ID'].value as string,
                ipAddress: props['IP Address'].value as string,
                language: props['Language'].value as string,
                lastName: props['Last Name'].value as string,
                location: props['Location'].value as string,
                roleId: props['Role Id'].value as string,
                roleName: props['Role Name'].value as string,
                status: props['Status'].value as string,
                userName: props['Username'].value as string,
            };
        }
        

        this.LoadingState = eLoadingState.ready;
        return Promise.resolve();
    }

    async dontLoadAllValues(): Promise<void> {
        this.LoadingState = eLoadingState.loading;
        const userval = await this.callRequest(this.userurl,'GET',{});
        //manywho.connection.request(this, "", this.userurl , 'GET', this.TenantId, this.StateId, manywho.state.getAuthenticationToken(this.FlowKey), {});
        if(userval) {
            const u = new FlowField(userval);
            const props = (u.value as FlowObjectData).properties;
    
            this.User = {
                directoryId: props['Directory Id'].value as string,
                directoryName: props['Directory Name'].value as string,
                email: props['Email'].value as string || 'mark',
                firstName: props['First Name'].value as string,
                groupId: props['Primary Group Id'].value as string,
                groupName: props['Primary Group Name'].value as string,
                id: props['User ID'].value as string,
                ipAddress: props['IP Address'].value as string,
                language: props['Language'].value as string,
                lastName: props['Last Name'].value as string,
                location: props['Location'].value as string,
                roleId: props['Role Id'].value as string,
                roleName: props['Role Name'].value as string,
                status: props['Status'].value as string,
                userName: props['Username'].value as string,
            };
        }
        this.LoadingState = eLoadingState.ready;
        return Promise.resolve();
    }

    getStateValue(initializing: boolean = false): string | boolean | number | Date | FlowObjectData | FlowObjectDataArray | undefined {
        const flowState = manywho.state.getComponent(this.componentId, this.flowKey) || {};
        const flowModel = manywho.model.getComponent(this.ComponentId, this.FlowKey);
        if(flowModel) {
            switch (flowModel.contentType) {
                case 'ContentObject':
                    if(flowState.objectData && flowState.objectData[0] && flowState.objectData[0].properties.length > 0) {
                        return new FlowObjectData([flowState.objectData[0]])
                    }
                    else {
                        let modelItems: FlowObjectData[] = this.model.dataSource.items;
                        if(modelItems.length > 0) {
                            return modelItems[0].isSelected? modelItems[0] : undefined;
                        }
                        else {
                            return undefined;
                        }
                    }

                case 'ContentList':
                    if(flowState.objectData && flowState.objectData.length > 0 ) {
                        return new FlowObjectDataArray(flowState.objectData)
                    }
                    else {
                        let selectedModelItems: FlowObjectDataArray = this.model.dataSource.getSelectedItems();
                        if(selectedModelItems.items.length > 0) {
                            return selectedModelItems;
                        }
                        else {
                            return undefined;
                        }
                    }

                default:
                    // initializing is the mode for preservation of model to state
                    if(initializing === true) {
                        return flowModel.contentValue || null;
                    }
                    else {
                        return flowState.contentValue || null;
                    }
                    
                    break;
            }
        }
        else {
            return undefined;
        }
    }

    getStateValueType(): eContentType {
        const flowModel = manywho.model.getComponent(this.ComponentId, this.FlowKey);
        let ct: string = flowModel.contentType as string;
        return eContentType[ct as keyof typeof eContentType];
    }


    async setStateValue(value: string | boolean | number | Date | FlowObjectData | FlowObjectDataArray, ignoreState?: boolean): Promise<void> {

        if(this.LoadingState === eLoadingState.mounting || this.LoadingState === eLoadingState.ready) {
            let oldState: eLoadingState = this.loadingState;
            this.LoadingState = eLoadingState.saving;

            const flowModel = manywho.model.getComponent(this.ComponentId, this.FlowKey);
            const flowState = manywho.state.getComponent(this.componentId, this.flowKey) || {};
            let newState: any;

            if(flowModel){
                switch (flowModel.contentType) {
                    case 'ContentObject':
                        let objectData: any = null;
                        if(value) {
                            (value as FlowObjectData).isSelected = true;
                            objectData = (value as FlowObjectData).iFlowObjectDataArray();
                            objectData = JSON.parse(JSON.stringify(objectData));
                        }
                        newState = { "objectData": objectData };
                        manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                        break;

                    case 'ContentList':
                        let objectDataArray: any = null;
                        if(value) {
                            objectDataArray = (value as FlowObjectDataArray).iFlowObjectDataArray();
                            objectDataArray = JSON.parse(JSON.stringify(objectDataArray));
                        }
                        newState = { "objectData": objectDataArray };
                        manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                        break;

                    case 'ContentDate':
                        newState = { "contentValue": (value as Date).toISOString() };
                        manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                        break;

                    default:
                        newState = { "contentValue": value };
                        manywho.state.setComponent(this.componentId, newState, this.flowKey, true);
                        break;

                }
            }

            this.LoadingState = oldState;


            if(manywho.collaboration.isInitialized(this.flowKey)) {
                //manywho.collaboration.sync(this.flowKey);
                //updateFields.forEach((field: IFlowField) => {
                //    manywho.collaboration.push(this.ComponentId,{"message": {"action":"REFRESH_FIELD","fieldName": field.developerName }},this.flowKey);
                //});
            }
            
        }

         return Promise.resolve();
    }

    eventHandled(a?: any, b?: any) {
        console.log("ping");
    }

    async updateValues(values: FlowField[] | FlowField): Promise<void> {
        this.LoadingState = eLoadingState.saving;

        const updateFields: IFlowField[] = [];

        if(values.constructor.name === FlowField.name) {
            updateFields.push((values as FlowField).iFlowField());
        }
        else
        {
            for (const field of (values as Array<FlowField>)) {
                updateFields.push(field.iFlowField());
            }
        }
        
        await this.callRequest(this.url,'POST',updateFields);
        if(manywho.collaboration.isInitialized(this.flowKey)) {
            //manywho.collaboration.sync(this.flowKey);
            updateFields.forEach((field: IFlowField) => {
                manywho.collaboration.push(this.ComponentId,{"message": {"action":"REFRESH_FIELD","fieldName": field.developerName }},this.flowKey);
            });
        }
        this.LoadingState = eLoadingState.ready;
        return Promise.resolve();
    }

    //sends a collaboration message but limited to 1 call every 100ms
    sendCollaborationMessage = throttle(this._sendCollaborationMessage, 100, null);
    _sendCollaborationMessage(message: any){
        if(manywho.collaboration.isInitialized(this.flowKey)) {
            //manywho.collaboration.sync(this.flowKey);
            manywho.collaboration.push(this.ComponentId,{"message": message},this.flowKey);
        }
    };
    
        
    //triggers the specified outcome, optionally passes a data object 
    async triggerOutcome(outcomeName: string, data?: IFlowObjectData[]): Promise<void> {
        this.LoadingState = eLoadingState.moving;
        //this.forceUpdate();

        if (!data) {
            data = [];
        }

        let oc: any;
        if (this.outcomes[outcomeName]) {
            oc = this.outcomes[outcomeName].iFlowOutcome();
        }

        if (oc) {
            await manywho.component.onOutcome(oc, data, this.FlowKey);
        } else {
            this.log('Could not find outcome ' + outcomeName);
        }
        return Promise.resolve();
    }

    //triggers the specified outcome, optionally passes a data object 
    async moveTo(flowElementId: string, data?: IFlowObjectData[]): Promise<void> {
        this.LoadingState = eLoadingState.moving;
        
        const baseUrl = "";  //manywho.settings.global('platform.uri') || window.location.origin || 'https://flow.manywho.com';
        const invokeurl = `${baseUrl}/api/run/1/state/${this.stateId}`;

        const info = manywho.state.getState(this.flowKey);
         ///  api/run/1/state/{stateId}
        const request: any = {};
        request.currentMapElementId = info.currentMapElementId;
        request.invokeType = 'NAVIGATE';
        request.mapElementInvokeRequest = {};
        request.mapElementInvokeRequest.selectedOutcomeId = null;
        request.pageRequest = {
            pageComponentInputResponses: [
              { pageComponentId: this.componentId, contentValue: null, objectData: null},
            ],
        };
        request.selectedMapElementId = flowElementId;
        request.stateId = this.stateId;
        request.stateToken = info.token;

        const resp: any = await manywho.connection.request(this, null, invokeurl , 'POST', this.tenantId, this.stateId, manywho.state.getAuthenticationToken(this.flowKey), request);

        manywho.model.parseEngineResponse(resp, this.flowKey);

        await manywho.engine.render(this.flowKey);

        return Promise.resolve();

    }

    log(message: string) {
        const now = new Date();
        const time = [('0' + now.getHours()).slice(-2), ('0' + now.getMinutes()).slice(-2),
            ('0' + now.getSeconds()).slice(-2)];
        const timestamp = '[' + time.join(':') + '] ';
        console.log(timestamp + message);
    }

    //helper to silently launch a flow
    async launchFlowSilent(tenant: string, flowId: string, player: string, objectData?: FlowObjectDataArray): Promise<void> {
        const baseUrl = manywho.settings.global('platform.uri') || 'https://flow.manywho.com';
        const url = `${baseUrl}/api/run/1/state`;

        const data: any = {};
        data.id = flowId;
        data.developerName = null;
        data.inputs = objectData ? objectData.iFlowObjectDataArray() : null;
        manywho.connection.request(this, "", url , 'POST', this.TenantId, "", manywho.state.getAuthenticationToken(this.FlowKey), data);
        return Promise.resolve();
    }

    //helper to open a specific flow in a new tab
    async launchFlowTab(tenant: string, flowId: string, player: string, objectData?: FlowObjectDataArray): Promise<void> {
        const baseUrl = manywho.settings.global('platform.uri') || 'https://flow.boomi.com';
        const url = baseUrl + '/' + tenant + '/play/' + player + '?flow-id=' + flowId;

        window.open(url, '_new');
        return Promise.resolve();
    }

    //this will get triggered by the collaboration engine
    async componentDidUpdate(): Promise<any> {
        const state: any = manywho.state.getComponent(this.componentId, this.flowKey) as any;
        if(state) {
            const message = state.message;
            this.loadModel();

            if(message) {
                manywho.state.setComponent(this.componentId,{"message": {}} as any, this.flowKey, false);
            }
            //&& state.message.action === "RELOADVALUES"
            if(message && message.action ) {
                switch (message.action.toUpperCase()) {
                    case 'REFRESH_FIELDS':
                        await this.loadAllValues();
                        break;
                    
                    case 'REFRESH_FIELD':
                        await this.loadValue(message.fieldName);
                        break;

                    default:
                        break; 
                }
            }
            return message;
        }
   }

   //this is used by other components who might want to send in a generic window message
   //nothing to do with collaboration
    async receiveMessage(message: any): Promise<void> {
        if (message.data) {
            const msg: any = message.data;
            if (msg.action) {
                switch (msg.action.toUpperCase()) {
                    case 'OUTCOME':
                        await this.triggerOutcome(msg.data);
                        break;
                    
                    case 'REFRESH_FIELDS':
                            await this.loadAllValues();
                            break;
                    
                    case 'REFRESH_FIELD':
                        await this.loadValue(msg.fieldName);
                        break;

                    default:
                        await this.handleMessage(msg);
                        break;
                }
            }
        }
        return Promise.resolve();
    }

    async handleMessage(msg: any): Promise<void> {
        return Promise.resolve();
    }

}

//declare var FlowComponentModel: FlowBaseComponent;