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
        await this.loadValues();
        (manywho as any).eventManager.addDoneListener(this.reloadValues,this.componentId);
    }

    async componentDidUpdate() {
        await super.componentDidUpdate();
    }

    async componentWillUnmount() {
        await super.componentWillUnmount();
        (manywho as any).eventManager.removeDoneListener(this.componentId);
    }
    //
    async triggerOutcome(outcomeName: string, data?: IFlowObjectData[]) {
        await super.triggerOutcome(outcomeName, data);
        await this.loadModel();
        await this.loadValues();
    }

    async reloadValues(xhr: XMLHttpRequest, request: any) {
        await this.loadModel();
        await this.loadValues();
    }
}
