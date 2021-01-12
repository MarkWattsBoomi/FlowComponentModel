import * as React from 'react';
import { DragEvent } from './Common';
import './MessageBox.css';
export declare class MessageBox extends React.Component<any, any> {
    dragEvent: DragEvent;
    modal: any;
    dialog: any;
    top: number;
    left: number;
    constructor(props: any);
    stopEventBubble(e: any): boolean;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onCloseRequest(): void;
    handleKeyUp(e: any): void;
    render(): JSX.Element;
    moveMe(left: number, top: number): void;
    onMouseDown(e: any): void;
    onMouseMove(e: any): void;
    onMouseUp(e: any): void;
}
