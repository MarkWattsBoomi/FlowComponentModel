import React = require("react");
import { eLoadingState } from "./FlowBaseComponent";
import { FlowComponent } from "./FlowComponent";
import { FlowObjectDataProperty } from "./FlowComponentModel";
import { eContentType } from "./FlowField";
import { FlowObjectData } from "./FlowObjectData";

//declare const manywho: IManywho;
declare const manywho: any;
declare const google: any;

//REPLACES custom-sector

export class columnDefinition {
    developerName: string;
    type: eContentType;

    constructor(developerName: string, type: eContentType) {
        this.developerName=developerName;
        this.type=type;
    }
}

export default class FlowChart extends FlowComponent {

    chartData: any;
    chart: any;

    columnNames: any[];
    propertyNames: columnDefinition[];
    options: any;
    chartType: string;
    apiKey: string = "";

    constructor(props: any) {
        super(props);
        this.beginChartsApi = this.beginChartsApi.bind(this);
        this.apiLoaded = this.apiLoaded.bind(this);
        this.drawChart = this.drawChart.bind(this);
        this.flowMoved = this.flowMoved.bind(this);
        this.apiKey = this.getAttribute("APIKey","AIzaSyCOZetch6gnehsohleYienAZVVemXg3q44");
    }

    async componentDidMount() {
        await super.componentDidMount();
        (manywho as any).eventManager.addDoneListener(this.flowMoved, this.componentId);
        this.beginChartsApi();
    }

    async componentWillUnmount() {
        await super.componentWillUnmount();
        (manywho as any).eventManager.removeDoneListener(this.componentId);
    }

    async flowMoved(xhr: any, request: any) {
        let me: any = this;
        if(xhr.invokeType==="FORWARD") {
            if(this.loadingState !== eLoadingState.ready){
                window.setTimeout(function() {me.flowMoved(xhr, request)},500);
            }
            else {
                manywho.model.parseEngineResponse(xhr, this.props.flowKey);
                this.beginChartsApi();
            }
        }
    }

    beginChartsApi() {
        if(typeof google === 'undefined' || typeof google.charts === 'undefined') {
            if(typeof (window as any).G13ChartLoading === 'undefined') {
                const script = document.createElement('script');
                script.src="https://www.gstatic.com/charts/loader.js";
                script.addEventListener('load',this.apiLoaded);
                window.document.body.appendChild(script);
                (window as any).G13ChartLoading = true;
            }
            else {
                // already loading
                window.setTimeout(this.beginChartsApi,300);
            }
        }
        else {
            this.apiLoaded();
        }
    }

    apiLoaded() {
        if(!google?.charts || !google?.visualization?.GeoChart) {
            google.charts.load('current',{packages:['corechart','geochart'],mapsApiKey:this.apiKey});
            google.charts.setOnLoadCallback(this.drawChart);
        }
        else {
            this.drawChart();
        }
    }

    // you can override this to build your own data - populate dataTable
    buildData(dataTable: any[]) {
        if (this.model.dataSource)
        {
            this.model.dataSource.items.forEach((item: FlowObjectData) => {
                let values : any[] = [];
                this.propertyNames.forEach((property: columnDefinition) => {
                    let prop: FlowObjectDataProperty = item.properties[property.developerName];
                    if(property.type === eContentType.ContentNumber) {
                        values.push(parseInt(prop.value as string));
                    }
                    else {
                        values.push(prop.value)
                    }
                    
                });
                dataTable.push(values);
            });
        }
    }

    drawChart() {

        const dataTable: any = [];
        dataTable.push(this.columnNames);
        this.buildData(dataTable);  
        
        this.chartData = google.visualization.arrayToDataTable(dataTable);

        if(! this.chart) {
            switch(this.chartType.toUpperCase()) {
                case "BARCHART":
                    this.chart = new google.visualization.BarChart(
                        document.getElementById(this.componentId)
                    );
                    break;

                case "COLUMNCHART":
                    this.chart = new google.visualization.ColumnChart(
                        document.getElementById(this.componentId)
                    );
                    break;

                case "GEOCHART":
                    this.chart = new google.visualization.GeoChart(
                        document.getElementById(this.componentId)
                    );
                    break;
                    
                case "DONUTCHART":
                case "PIECHART":
                    this.chart = new google.visualization.PieChart(
                        document.getElementById(this.componentId)
                    );
                    break;
                    
            }
            
        }

        this.chart.draw(this.chartData, this.options);     
    }

    render() 
    {
        return  (
            <div
                id={this.componentId}
            />
        );
    }
}
