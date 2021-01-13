import * as React from 'react';
import {DragEvent,  eDragEventType, modalDialogButton } from './Common';

import './FlowMessageBox.css';

// Declaration of the component as React Class Component
export class FlowMessageBox extends React.Component<any, any> {
    dragEvent: DragEvent = new DragEvent();
    modal: any;
    dialog: HTMLDivElement;

    top: number = 0;
    left: number = 0;

    msgboxVisible: boolean = false;
    msgboxTitle: string = '';
    msgboxButtons: any = [];
    msgboxContent: any;
    msgboxOnClose: any = this.hideMessageBox;

    setDialog(dialog: HTMLDivElement) {
        this.dialog = dialog;
        if(this.dialog) {

            const parentXCenter = this.dialog.offsetParent.clientWidth / 2;
            const parentYCenter = this.dialog.offsetParent.clientHeight / 2;
            const dialogXOffset = this.dialog.clientWidth / 2;
            const dialogYOffset = this.dialog.clientHeight / 2;

            this.left = parentXCenter - dialogXOffset;
            this.top = parentYCenter - dialogYOffset;
            this.dialog.classList.add('shown');
            this.positionDialog();
        }
    }

    // Init of the component before it is mounted.
    constructor(props: any) {
        super(props);

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.setDialog = this.setDialog.bind(this);
        this.showMessageBox = this.showMessageBox.bind(this);
        this.hideMessageBox = this.hideMessageBox.bind(this);
        this.positionDialog = this.positionDialog.bind(this);
        // this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    positionDialog() {
        if(this.dialog) {
            this.dialog.style.left = this.left + "px";
            this.dialog.style.top = this.top + "px";
        }
    }

    componentDidMount(){
        this.forceUpdate();
    }

    async showMessageBox(title: string, content: any, buttons: modalDialogButton[], onClose?: any) {
        this.msgboxVisible = true;
        this.msgboxTitle = title;
        this.msgboxContent = content;
        this.msgboxOnClose = onClose || this.hideMessageBox;
        this.msgboxButtons = buttons;
        this.forceUpdate();
        //return this.props.parent.forceUpdate();
    }

    async hideMessageBox(e? : any) {
        this.msgboxVisible = false;
        this.msgboxTitle = '';
        this.msgboxContent = undefined;
        this.msgboxOnClose = undefined;
        this.msgboxButtons = [];
        this.forceUpdate();
        //return this.props.parent.forceUpdate();
    }

    stopEventBubble(e: any) {
        if (e.stopPropagation) { e.stopPropagation(); }
        if (e.preventDefault) { e.preventDefault(); }
        e.cancelBubble = true;
        e.returnValue = false;
        return false;
    }

    // Handle the key press event.
    handleKeyUp(e: any) {
        const keys: any = {
        27: () => {
            e.preventDefault();
            this.hideMessageBox();
        },
        };

        if (keys[e.keyCode]) {
        keys[e.keyCode]();
        }
    }

    // Render the component passing onCloseRequest and children as props.
    render() {
        let content: any;
        if(this.msgboxVisible === false) {
            content = (
                <div/>
            );
        }
        else {
    
            const buttons: Array<JSX.Element> = [];
            for(const button of this.msgboxButtons) {
                buttons.push(
                    <button 
                        className="modal-dialog-button-bar-button" 
                        title="Cancel" 
                        onMouseDown={(e) => {e.stopPropagation();button.handler()}}
                    >
                        {button.label}
                    </button>
                );
            }


            content = (
        
                <div
                    className="message-box-redaction"
                    onMouseMove={(e) => {this.onMouseMove(e); }}
                    onMouseUp={(e) => {this.onMouseUp(e); }}
                    // onMouseDown={(e) => {this.handleOutsideClick(e)}}
                    onContextMenu={e => {e.preventDefault(); e.stopPropagation();if(this.props.onContextMenu){this.props.onContextMenu()}}}
                >
                    <div
                        //style={style}
                        className="message-box-content"
                        ref={(element: HTMLDivElement) => (this.setDialog(element))}
                    >
                        <div className="message-box-dialog">
                        <div
                            className="message-box-dialog-header"
                            onMouseDown={(e) => {this.onMouseDown(e); }}
                        >
                            <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
                            <span className="message-box-dialog-header-title">{this.msgboxTitle}</span>
                            </div>
                            <div style={{display: 'flex', flexDirection: 'row', marginLeft: 'auto', flexGrow: 0}}>
                            <span
                                className="glyphicon glyphicon-remove message-box-dialog-header-button"
                                style={{cursor: 'pointer' , color: '#fefefe', marginRight: '5px', fontSize: '14pt'}}
                                title="Close"
                                onMouseDown={(e) => {this.stopEventBubble(e); this.hideMessageBox() }}
                            />
                            </div>
                        </div>
                        <div className="message-box-dialog-body">
                            {this.msgboxContent}
                        </div >
                        <div className="modal-dialog-button-bar">
                            {buttons}   
                        </div>
                        </div >
                    </div>
                </div>
        
            );
        }
        return content;
    }

    moveMe(left: number, top: number) {
      this.left = left;
      this.top = top; // - this.box.getBoundingClientRect().top;
      this.positionDialog();
  }

    onMouseDown(e: any) {
    // this.stopEventBubble(e);
    // include component bounding rect to allow for mouse offset into component
    const clientRect = e.target.getBoundingClientRect();
    const mouseOffsetY: number = e.clientY - clientRect.top;
    this.dragEvent = DragEvent.start(eDragEventType.dialog, this, e.clientX - clientRect.left, mouseOffsetY);
  }

    onMouseMove(e: any) {
    // this.stopEventBubble(e);
    if (this.dragEvent.type === eDragEventType.dialog) {
      this.moveMe(e.clientX - this.dragEvent.mouseOffsetX, e.clientY - this.dragEvent.mouseOffsetY);
    }
  }

    onMouseUp(e: any) {
    // this.stopEventBubble(e);
    if (this.dragEvent.type === eDragEventType.dialog) {
      this.dragEvent.end(null, e.clientX, e.clientY);
    }
  }
}
