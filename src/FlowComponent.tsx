import { FlowBaseComponent } from './FlowBaseComponent';

export class FlowComponent extends FlowBaseComponent {

    constructor(props: any) {
        super(props);
    }

    // the FlowPage automatically gets values
    async componentDidMount() {
        await super.componentDidMount();
        await this.dontLoadAllValues();
        return Promise.resolve();
    }
}
