import * as React from 'react';
import './css/ModalDialog.css';
export declare class modalDialogButton {
    label: string;
    handler: any;
    constructor(label: string, handler: any);
}
export declare enum eDragEventType {
    unknown = 0,
    canvas = 1,
    table = 2,
    link = 3,
    dialog = 4
}
export declare class DragEvent {
    type: eDragEventType;
    sourceElement: any;
    targetElement: any;
    mouseX: number;
    mouseY: number;
    mouseOffsetX: number;
    mouseOffsetY: number;
    constructor();
    static start(type: eDragEventType, sourceElement: any, mouseX: number, mouseY: number): DragEvent;
    drag(mouseX: number, mouseY: number): void;
    end(target: any, mouseX: number, mouseY: number): any;
}
export declare class ModalDialog extends React.Component<any, any> {
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
    handleOutsideClick(e: any): void;
    render(): JSX.Element;
    moveMe(left: number, top: number): void;
    onMouseDown(e: any): void;
    onMouseMove(e: any): void;
    onMouseUp(e: any): void;
}
