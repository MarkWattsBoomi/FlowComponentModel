
This library will allow you to create Flow custom components which richer functionality, these are given direct access to read and write the entire state not just the state and data source attached to them in the designer.

You can implement a component which functions as an entire Flow page or as a component on a page but which isn't restriced to what it can read/write.

THIS ONLY WORKS WITH THE LEGACY PLAYER!

## Overview

The package contains three basic classes you can use to create components and 3 helper classes: -

### FlowComponent

This is designed to function as a component that replaces a standard component on a page.  You will be using the component's datasource to draw list data and its state to get the current value and set the new value.
The FlowComponent will not automatically call getValues() on load.

### FlowPage

This is an extension of the FlowComponent auto-loads every value defined in your tenant which is used by your Flow.
The FlowPage will automatically call getValues() on load.

### FlowChart

This is an extension of the FlowComponent but adds the features of google charts allowing you to create a chart by simply setting the axis names and specifying which model data columns represent them.  

It's a very thin wrapper, anything in the options is simply passed through to the charts engine underneath.

Define your chart options in the constructor().
```
constructor(props: any) {
        super(props);
        this.chartType = eFlowChartType.PieChart;
        this.columnNames = ['Team Role', 'Count',{type: 'string', role: 'tooltip'}, { role: 'style' }];
        //this.propertyNames = [new FlowChartColumnDefinition('driver', eContentType.ContentString), new FlowChartColumnDefinition('percent', eContentType.ContentNumber), new FlowChartColumnDefinition('percent', eContentType.ContentString)];
        this.options = {
            width: this.model.width || 600,
            height: this.model.height || 600,
            colors: ['#1338b0', '#c95b12','#828181','#e0ac58','#e0ac58'],
            title: this.model.label || 'Opportunities By Role',
            chartArea: {width: '100%', height: '85%'},
            legend: { position: 'bottom', maxLines: 10 },
            is3D: true,
            pieSliceText: 'value',
            hAxis: {
                fontSize: 4,
                title: 'Role',
            },
            vAxis: {
                title: 'Count',
            },
        };

    }
```

For more complex data you can override the buildData() method.

We are adding arrays of column data to match the columnNames array in the constructor
```
buildData(dataTable: any[]) {
        if (this.model.dataSource) {
            dataTable.push(
                [
                    col1,
                    col2,
                    col3,
                    '' ...
                ]
            );
        }
        
    } 
```

To manipulate the data for formatting, override the manipulateDataTable() method.
```
manipulateDataTable(google: any, dataTable: any) {
        let formatter = new (google as any).visualization.NumberFormat({prefix: '$ '});
        formatter.format(dataTable,1)
    }
```

### FlowMessageBox & FlowDialogBox & FlowContextMenu

Depricated.

Please use FCMKit instead.

https://github.com/MarkWattsBoomi/FCMKit




## Features

FlowPage, FlowComponent & FlowChart give you access directly to: -

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

```
    if(this.outcomes["outcomeName"]) {
        await this.triggerOutcome("outcomeName");
    }
```

### User
    An object containing the details of the current authenticated user if any.

### Fields
    An object with all the fields defined in the Flow keyed on their developer name.
    Reload fields with the LoadValue() or LoadValues() methods and set them with the updateValues() method.

    There's an asynchronous helper to get specific fields directly from Flow.  It retuirns the object and also stores it into the Fields object.

```
    const fld: FlowField = await this.loadValue(fieldName);
```
    

### Attributes
    An object with all the component's attributes keyed on their developer name.

    There's a helper methof to get an attribute if it exists and return it or the default value if not

```
    attributeValue: String = this.getAttribute("attributeName",[optional default value]);
```

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

Create a new empty folder.
Run "npm init" and answer the prompts,
Run "npm install -s flow-component-model@latest"
Run "npm rebuild"


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

##Note: If you extend the FlowPage class then your component will automatically run getValues() when it mounts and will have populated all the available outcomes, attributes and fields.

# Asynchronous

Most methods are implemented as async which allows the use of await this.methodName().

This includes the basic React componentDidMount which has been reworked to this signature: -
async componentDidMount(): Promise<void>

this means that if you are going to implement the componentDidMount then ensure you await the super implementation: -

```
async componentDidMount() {
    await super.componentDidMount();
    ....
}

```

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

let myArray: FlowObjectDataArray = FlowObjectDataArray.newInstance([]);

## FlowObjectData
Wrappers the objectData concept and provides helpers for creating & manipulating including adding properties.

let myObjData: FlowObjectData = new FlowObjectData(iObjectData);  (pass in a generic Flow objectData);
or
let myObjData: FlowObjectData = FlowObjectData.newInstance("FlowTypeName");

## FlowObjectDataProperty
A wrapper for working with FlowObjectData properties.
let myObjData: FlowObjectData = FlowObjectData.newInstance("FlowTypeName");
myObjData.addProperty(FlowObjectDataProperty.newInstance("AttributeName",eContentType.contentString, "The value"));

## FlowOutcome
A wrapper round the outcome object

## FlowAttribute
A simple wrapper around the attribute concept.

## FlowField
A wrapper for working with values in a flow.
Can access any value in the flow's state.

let myField: await FlowField=this.loadValue("FlowValueName");
myField.value="NewValue";
await this.updateValue(myField);

## FlowDisplayColumn
A wrapper to simplify the display columns in the model



# Flow Chart

Basing your class on the FlowChart class simplifies creating custom charts.

This call already implements all the logic to redraw the chart after a move event in flow.

This is a very basic example: -

```

export default class MyChart extends FlowChart {
    constructor(props: any) {
        super(props);
        
        this.chartType="BARCHART";
        
        this.columnNames=['', 'Immediate', '<1 year', '1-5 years','>5 years','unable to quantify or not answered', { role: 'style' }];
        
        this.propertyNames=[new columnDefinition("paybackPeriod",eContentType.ContentString),new columnDefinition("percent",eContentType.ContentNumber)];
        
        this.options = {
            width: 1000,
            height: 130,
            colors:['#009688','#74ccbd','#cbf2ec','#f4f7b7','#edede8'],
            legend: { position: 'bottom', maxLines: 3, },
            bar: { groupheigh: '100%' },
            isStacked: 'true'
        };
    }

}
manywho.component.register('MyChart', MyChart);

```

## chartType
This controls the type of google chart shown

BARCHART, COLUMNCHART, GEOCHART, PIECHART, DONUTCHART


## columnNames
Specify an array of axis names.

For stacked charts this will be the vertical axis then all the horizontal axis option names.

## propertyNames
Allows you to specify which property names in the model object data correspond to each column name.

This is the default simple implementation when each model object data represents one item to be drawn on the chart.

If you need to work with more complex data then this can be ommitted and the buildData() method can be overwritten

## options 
Allows you to specify the chart options as defined in the google charts API.

This object is passed unmodified to the google charts api.


## buildData

overriding this function allows you full control to build the chart data.

In this example we have the data spread across the first 3 items from the model, you can see that we drag the value of the "Percent" column from 1tems 0-2

```
buildData(dataTable: any[]) {
        if (this.model.dataSource)
        {
             dataTable.push(
                [
                    "",
                    parseInt(this.model.dataSource.items[0].properties["Percent"].value as string), 
                    parseInt(this.model.dataSource.items[1].properties["Percent"].value as string), 
                    parseInt(this.model.dataSource.items[2].properties["Percent"].value as string),
                    ""
                ]
            );
            
        }
```

# Quick Start Template

Create a new folder to hold your project.

Grab the Template.zip file here and unzip it in your folder. 

Open the folder in VS Code.

In a console run "npm install".


Run "npm run start" to execute the component in debug.

Run "npm run build" to compile the component into the build folder.
