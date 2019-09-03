import * as React from 'react';
import './css/IconPicker.css';
declare class IconPicker extends React.Component<any, any> {
    icons: any;
    selectedItem: string;
    onchange(e: any): void;
    constructor(props: any);
    render(): JSX.Element;
}
export default IconPicker;
