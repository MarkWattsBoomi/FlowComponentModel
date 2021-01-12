/// <reference types="react" />
import { FlowComponent } from "./FlowComponent";
import { eContentType } from "./FlowField";
export declare class columnDefinition {
    developerName: string;
    type: eContentType;
    constructor(developerName: string, type: eContentType);
}
export declare class FlowChart extends FlowComponent {
    chartData: any;
    chart: any;
    columnNames: any[];
    propertyNames: columnDefinition[];
    options: any;
    chartType: string;
    apiKey: string;
    constructor(props: any);
    componentDidMount(): Promise<void>;
    componentWillUnmount(): Promise<void>;
    flowMoved(xhr: any, request: any): Promise<void>;
    beginChartsApi(): void;
    apiLoaded(): void;
    buildData(dataTable: any[]): void;
    drawChart(): void;
    render(): JSX.Element;
}
