import { FlowBaseComponent } from './FlowBaseComponent';
import { IFlowObjectData } from './FlowObjectData';
import {  IManywho } from './interfaces';

declare const manywho: IManywho;
declare const $: JQueryStatic;

export class FlowPage extends FlowBaseComponent {

    constructor(props: any) {
        super(props);
        this.reloadValues = this.reloadValues.bind(this);
    }

    // the FlowPage automatically gets values
    async componentDidMount() {
        await super.componentDidMount();
        //since we are a page we now load all values
        await this.loadValues();
        this.forceUpdate();
        (manywho as any).eventManager.addDoneListener(this.reloadValues,this.componentId + "_PG");
    }

    async componentDidUpdate(): Promise<void> {
        await super.componentDidUpdate();
    }

    async componentWillUnmount() {
        await super.componentWillUnmount();
        (manywho as any).eventManager.removeDoneListener(this.componentId + "_PG");
    }
    //
    async triggerOutcome(outcomeName: string, data?: IFlowObjectData[]) {
        await super.triggerOutcome(outcomeName, data);
    }

    async reloadValues(xhr: XMLHttpRequest, request: any) {
        await this.loadModel();
        await this.loadValues();
        await this.forceUpdate();
    }
}
