import * as React from 'react';
import './IconPicker.css';
export default class IconPicker extends React.Component<any, any> {
    icons: any;
    selectedItem: string;
    onchange(e: any): void;
    constructor(props: any);
    addIcons(): void;
    addIcon(name: string, label: string): void;
    render(): JSX.Element;
}
