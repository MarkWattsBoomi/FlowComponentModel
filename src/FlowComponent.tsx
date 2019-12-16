import { FlowBaseComponent } from './FlowBaseComponent';
//import {  IManywho } from './interfaces';

declare const manywho: any;
declare const $: JQueryStatic;

export class FlowComponent extends FlowBaseComponent {

    constructor(props: any) {
        super(props);
    }

    // the FlowPage automatically gets values
    async componentDidMount() {
        await super.componentDidMount();
        await this.dontLoadValues();
    }

    async componentDidUpdate() {
        await super.componentDidUpdate();
    }
}
