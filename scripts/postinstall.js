const fs = require('fs');
console.log("running postinstall");

/// tsconfig.json file
console.log("creating tsconfig.json");
let tsconf = {
    compilerOptions: {
      outDir: "./build",
      sourceMap: true,
      noImplicitAny: true,
      module: "commonjs",
      target: "es5",
      jsx: "react",
      lib: [
        "es2015",
        "dom"
      ],
      skipLibCheck: false,
      esModuleInterop: true
    },
    include: [
      "./src/**/*"
    ]
  }

if(!fs.existsSync("./tsconfig.json")){
    fs.writeFileSync("./tsconfig.json",JSON.stringify(tsconf,null,2));
}

/// package.json file
let package = {
    name: "cust",
    version: "1.0.0",
    description: "Custom Component",
    main: "index.js",
    scripts: {
      start: "webpack-dev-server",
      build: "webpack -p --config webpack.production.config.js",
      debug: "ngrok http --host-header=rewrite 8080",
      postinstall : "node scripts/postinstall.js"
    },
    author: "Dell Boomi",
    license: "MIT",
    dependencies: {
        buffer: "^6.0.3",
        'flow-component-model': "^1.7.8",
        react: "^16.3.2",
        stream: "0.0.2",
        timers: "^0.1.1"
    },
    devDependencies: {
      "@types/react": "^16.7.3",
      "css-loader": "^3.3.2",
      "mini-css-extract-plugin": "^0.5.0",
      "source-map-loader": "^1.1.0",
      "ts-loader": "^8.0.4",
      "typescript": "^4.0.0",
      "webpack": "^5.28.0",
      "webpack-cli": "^3.3.5",
      "webpack-dev-server": "^3.11.2",
      "write-file-webpack-plugin": "4.4.1"
    },
    flow: {
      filenames: {
        js: "custom.js",
        css: "custom.css"
      }
    },
    peerDependencies: {},
    bundledDependencies: [],
    optionalDependencies: {}
}
//if(!fs.existsSync("./package.json")){
    fs.writeFileSync("./package.json",JSON.stringify(package,null,2));
//}





if(!fs.existsSync("./src")) {
    fs.mkdirSync("./src");
}

if(!fs.existsSync("./src/index.tsx")) {
    fs.writeFileSync("./src/index.tsx","export * from './newComp';");
}

if(!fs.existsSync("./src/comp.tsx")) {
    fs.writeFileSync("./src/comp.tsx","import React, { CSSProperties } from 'react';\n");
    fs.appendFileSync("./src/comp.tsx","import { modalDialogButton, eLoadingState, FlowComponent,  FlowObjectData,  FlowOutcome, FlowMessageBox } from 'flow-component-model';\n");
    fs.appendFileSync("./src/comp.tsx","import './cust.css';\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","declare const manywho: any;\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","export default class cust extends FlowComponent {\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","version: string='1.0.0';\n");
    fs.appendFileSync("./src/comp.tsx","context: any;\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","   messageBox: FlowMessageBox;\n");
    fs.appendFileSync("./src/comp.tsx","   contextMenu: FlowContextMenu;\n");
    fs.appendFileSync("./src/comp.tsx","   lastContent: any = (<div></div>);\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","constructor(props: any) {\n");
    fs.appendFileSync("./src/comp.tsx","   super(props);\n");
    fs.appendFileSync("./src/comp.tsx","   this.flowMoved = this.flowMoved.bind(this);\n");
    fs.appendFileSync("./src/comp.tsx","}\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","async flowMoved(xhr: any, request: any) {\n");
    fs.appendFileSync("./src/comp.tsx","   let me: any = this;\n");
    fs.appendFileSync("./src/comp.tsx","   if(xhr.invokeType==='FORWARD') {\n");
    fs.appendFileSync("./src/comp.tsx","      if(this.loadingState !== eLoadingState.ready){\n");
    fs.appendFileSync("./src/comp.tsx","          window.setImmediate(function() {me.flowMoved(xhr, request)});\n");
    fs.appendFileSync("./src/comp.tsx","      }\n");
    fs.appendFileSync("./src/comp.tsx","      else {\n");
    fs.appendFileSync("./src/comp.tsx","         this.forceUpdate();\n");
    fs.appendFileSync("./src/comp.tsx","      }\n");
    fs.appendFileSync("./src/comp.tsx","    }\n");
    fs.appendFileSync("./src/comp.tsx","}\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","async componentDidMount() {\n");
    fs.appendFileSync("./src/comp.tsx","   await super.componentDidMount();\n");
    fs.appendFileSync("./src/comp.tsx","   (manywho as any).eventManager.addDoneListener(this.flowMoved, this.componentId);\n");
    fs.appendFileSync("./src/comp.tsx","   this.forceUpdate();\n");
    fs.appendFileSync("./src/comp.tsx","}\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","async componentWillUnmount() {\n");
    fs.appendFileSync("./src/comp.tsx","    await super.componentWillUnmount();\n");
    fs.appendFileSync("./src/comp.tsx","    (manywho as any).eventManager.removeDoneListener(this.componentId);\n");
    fs.appendFileSync("./src/comp.tsx","}\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","render() {\n");
    fs.appendFileSync("./src/comp.tsx","   if(this.loadingState !== eLoadingState.ready) {\n");
    fs.appendFileSync("./src/comp.tsx","      return this.lastContent;\n");
    fs.appendFileSync("./src/comp.tsx","   }\n");
    fs.appendFileSync("./src/comp.tsx","   //handle classes attribute and hidden and size\n");
    fs.appendFileSync("./src/comp.tsx","   let classes: string = 'cust ' + this.getAttribute('classes','');\n");
    fs.appendFileSync("./src/comp.tsx","   let style: CSSProperties = {};\n");
    fs.appendFileSync("./src/comp.tsx","   style.width='-webkit-fill-available';\n");
    fs.appendFileSync("./src/comp.tsx","   style.height='-webkit-fill-available';\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","   if(this.model.visible === false) {\n");
    fs.appendFileSync("./src/comp.tsx","      style.display = 'none';\n");
    fs.appendFileSync("./src/comp.tsx","   }\n");
    fs.appendFileSync("./src/comp.tsx","   if(this.model.width) {\n");
    fs.appendFileSync("./src/comp.tsx","      style.width=this.model.width + 'px'\n");
    fs.appendFileSync("./src/comp.tsx","   }\n");
    fs.appendFileSync("./src/comp.tsx","   if(this.model.height) {\n");
    fs.appendFileSync("./src/comp.tsx","      style.height=this.model.height + 'px'\n");
    fs.appendFileSync("./src/comp.tsx","   }\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","   this.lastContent = (\n");
    fs.appendFileSync("./src/comp.tsx","      <div\n");
    fs.appendFileSync("./src/comp.tsx","         className={classes}\n");
    fs.appendFileSync("./src/comp.tsx","         style={style}\n");
    fs.appendFileSync("./src/comp.tsx","         onContextMenu={this.showContextMenu}\n");
    fs.appendFileSync("./src/comp.tsx","      >\n");
    fs.appendFileSync("./src/comp.tsx","      <FlowContextMenu\n");
    fs.appendFileSync("./src/comp.tsx","         parent={this}\n");
    fs.appendFileSync("./src/comp.tsx","         ref={(element: FlowContextMenu) => {this.contextMenu = element}}\n");
    fs.appendFileSync("./src/comp.tsx","      />\n");
    fs.appendFileSync("./src/comp.tsx","      <FlowMessageBox\n");
    fs.appendFileSync("./src/comp.tsx","         parent={this}\n");
    fs.appendFileSync("./src/comp.tsx","         ref={(element: FlowMessageBox) => {this.messageBox = element}}\n");
    fs.appendFileSync("./src/comp.tsx","      />\n");
    fs.appendFileSync("./src/comp.tsx","      <div\n");
    fs.appendFileSync("./src/comp.tsx","         className='cust-body'\n");
    fs.appendFileSync("./src/comp.tsx","      >\n");
    fs.appendFileSync("./src/comp.tsx","         {}\n");
    fs.appendFileSync("./src/comp.tsx","      </div>\n");
    fs.appendFileSync("./src/comp.tsx","   </div>\n");
    fs.appendFileSync("./src/comp.tsx","   );\n");
    fs.appendFileSync("./src/comp.tsx","   return this.lastContent;\n");
    fs.appendFileSync("./src/comp.tsx","}\n");
    fs.appendFileSync("./src/comp.tsx","}\n");
    fs.appendFileSync("./src/comp.tsx","\n");
    fs.appendFileSync("./src/comp.tsx","manywho.component.register('cust', cust);",);
    

}

