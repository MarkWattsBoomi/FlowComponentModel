import { FlowComponent, FlowMessageBox, FlowContextMenu } from 'flow-component-model';
import './comp.css';
export default class cust extends FlowComponent {
    version: string;
    context: any;
    messageBox: FlowMessageBox;
    contextMenu: FlowContextMenu;
    lastContent: any;
    constructor(props: any);
    flowMoved(xhr: any, request: any): Promise<void>;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): Promise<void>;
    render(): any;
}
