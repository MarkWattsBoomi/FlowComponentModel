import { FlowBaseComponent } from './FlowBaseComponent';
export declare class FlowComponent extends FlowBaseComponent {
    constructor(props: any);
    redraw(): void;
    componentDidMount(): Promise<void>;
}
