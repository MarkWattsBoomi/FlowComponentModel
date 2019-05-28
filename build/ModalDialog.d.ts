import * as React from 'react';
import './css/ModalDialog.css';
declare class ModalDialog extends React.Component<any, any> {
    modal: any;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleKeyUp(e: any): void;
    handleOutsideClick(e: any): void;
    render(): JSX.Element;
}
export default ModalDialog;
