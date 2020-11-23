
This library will allow you to create Flow custom components which are a level above the standard version, these are given direct access to read and write the entire state not just the state and data source attached to them in the designer.

You can implement a component which functions as an entire Flow page or as a component on a page but which isn't restriced to what it can read/write.

## Overview

The package contains two basic classes you can use: -

### FlowComponent

This is designed to function as a component that replaces a standard component on a page.  You will be using the component's datasource to draw list data and its state to get the current value and set the new value.
The FlowComponent will not automatically call getValues() on load.

### FlowPage

This is an extension of the FlowComponent but adds the ability to interact with every value defined in your tenant which is used by your Flow.
The FlowPage will automatically call getValues() on load.

## Features

Both componets give you access directly to: -

### Model
    contentType: string;
    dataSource: FlowObjectDataArray;
    developerName: string;
    enabled: boolean;
    height: number;
    helpInfo: string;
    hintInfo: string;
    joinUri: string;
    label: string;
    maxSize: number;
    multiSelect: boolean;
    readOnly: boolean;
    required: boolean;
    size: number;
    validationMessage: string;
    visible: boolean;
    width: number;
    displayColumns: FlowDisplayColumn[];

### State
    The state value is retrieved and updated using the getStateValue() & setStateValue() methods

### Outcomes
    Any outcomes at a page level or specifically set as "Display With" the page component.
    Outcomes is an object with the outcomes keyed on the developer name.
    An outcome can be triggered using the triggerOutcome() method;

### User
    An object containing the details of the current authenticated user if any.

### Fields
    An object with all the fields defined in the Flow keyed on their developer name.
    Reload fields with the LoadValue() or LoadValues() methods and set them with the updateValues() method.

### Attributes
    An object with all the component's attributes keyed on their developer name.

### Basic Values
    Various other basic values are provided: -
    TenantId: string;
    StateId: string;
    FlowKey: string;
    ComponentId: string;
    ParentId: string;
    IsDesignTime: boolean;
    LoadingState: eLoadingState;
    
    
## Getting started

run "npm install -s flow-component-model@latest"

Create a new component tsx file and set your class to extend one of the library's base class: -

``` 
import * as React from 'react';
import { FlowComponent } from 'flow-component-model';
declare const manywho: any;

export default class MyCustomComponent extends FlowComponent {

}

manywho.component.register('WorkQueues', WorkQueues);

```

Your component will then inherit the properties and methods above: -

##Note: If you extend the FlowPage class thenyour component will automatically run getValues() when it mounts and will have populated all the available outcomes, attributes and fields.

# Asynchronous

Most methods are implemented as async which allows the use of await this.methodName().

This includes the basic React componentDidMount which has been reworked to this signature: -
async componentDidMount(): Promise<void>

this means that if you are going to implement the componentDidMount then ensure you await the super implementation: -

'''
async componentDidMount() {
    await super.componentDidMount();
    ....
}

'''

# Fields

fields can be accessed from this.fields and will contain a keyed array for you to access e.g.

this.fields.MyField or this.fields["MyField]

this.fields.MyField.value will return the field's value.
If the field is a simple string, number, boolean, content etc then value will be the string rpresentation of it.
If the field is an object then that object will be returned and you as a FlowObjectData and you can access it's attributes and it's properties collection
If the field is a List then a FlowObjectDataArray object will be returned which you can iterate over. FlowObjectDataArray.items() is a  Arrya<FlowObjectData> 

# Attributes

any attributes defined on your component are available via this.attributes which are keyed on the attribute name e.g.

this.attributes.MyAttribute is a FlowAttribute object with Name & Value properies.

this.getAttribute(attributeName, defaultValue) is a helper to simplify the process.

# Outcomes

any outcomes attached to the component are available via this.outcomes which are keyed on the outcome name e.g.

this.outcomes.MyOutcome or this.outcomes["MyOutcome"] is a FlowOutcome object.

Outcomes can be triggered calling this.triggerOutcome(outcomeName).


# Flow Movement Events

When an outcome is triggered and Flow re-delivers the page, if your component wasn't destroyed because the same page is being displayed then your component will not know that its data might have changed.

To work around this an event manager has been implemented to notify your component.

There are 3 events for beforeSend, done & error

You need to attach a handler to get these events and to detach it when your component will unmount.

All 3 are optional.

```
async componentDidMount() {
    await super.componentDidMount();
    (manywho as any).eventManager.addDoneListener(this.flowMoved, this.componentId);
    (manywho as any).eventManager.addBeforeSendListener(this.flowMoved, this.componentId);
    (manywho as any).eventManager.addFailListener(this.flowMoved, this.componentId);
}

async flowMoved(xhr: XMLHttpRequest, request: any) {
    ... do whatever
}

async componentWillUnmount() {
    await super.componentWillUnmount();
    (manywho as any).eventManager.removeBeforeSendListener(this.componentId);
    (manywho as any).eventManager.removeDoneListener(this.componentId);
    (manywho as any).eventManager.removeFailListener(this.componentId);
}

```

# Classes

A number of wrapper classes have been implemented to simplify interaction with various Flow objects: -

## FlowObjectDataArray
Wrappers the Flow list construct with helpers for adding, removing and finding objects.

## FlowObjectData
Wrappers the objectData concept and provides helpers for creating & manipulating including adding properties

## FlowObjectDataProperty
A wrapper for working with FlowObjectData properties.

## FlowOutcome
A wrapper round the outcome object

## FlowAttribute
A simple wrapper around the attribute concept.

## FlowField
A wrapper for working with values in a flow.

## FlowDisplayColumn
A wrapper to simplify the display columns in the model

## ModalDialog
A draggable modal dialog implementation.

