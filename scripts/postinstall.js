console.log("running postinstall");

let tsconf = {};
tsconf.compilerOptions = {
    outDir:"./build",
    sourceMap:true,
    noImplicitAny:true,
    module:"commonjs",
    target:"es5",
    jsx:"react",
    lib:["es2015","dom"],
    skipLibCheck:false,
    esModuleInterop:true
};
tsconf.include = [
    "./src/**/*"
]


const fs = require('fs');
if(!fs.existsSync("./tsconfig222.json")){
    fs.writeFileSync("./tsconfig222.json",JSON.stringify(tsconf,null,2));
}

