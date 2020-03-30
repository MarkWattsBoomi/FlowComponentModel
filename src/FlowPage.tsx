import { FlowBaseComponent } from './FlowBaseComponent';


export class FlowPage extends FlowBaseComponent {

    constructor(props: any) {
        super(props);
    }

    // the FlowPage automatically gets values
    async componentDidMount(): Promise<void> {
        await super.componentDidMount();
        //since we are a page we now load all values
        await this.loadAllValues();
        return Promise.resolve();
    }
}
