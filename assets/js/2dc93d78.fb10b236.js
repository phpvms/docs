"use strict";(self.webpackChunkphpvms_docs=self.webpackChunkphpvms_docs||[]).push([[1721],{5388:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=s(4848),l=s(8453);const t={id:"rules",title:"Custom Rules"},a=void 0,r={id:"acars/rules",title:"Custom Rules",description:"For users with Premium, you can create their own rules, in Javascript. See Custom Packaging on how to create a distribution for your VA, which can include rules, sounds and callbacks.",source:"@site/docs/acars/rules.md",sourceDirName:"acars",slug:"/acars/rules",permalink:"/acars/rules",draft:!1,unlisted:!1,editUrl:"https://github.com/phpvms/docs/tree/master/docs/acars/rules.md",tags:[],version:"current",frontMatter:{id:"rules",title:"Custom Rules"}},o={},c=[{value:"How Rules Work",id:"how-rules-work",level:2},{value:"Meta Object",id:"meta-object",level:4},{value:"PIREP Object Fields",id:"pirep-object-fields",level:4},{value:"ACARS Object Fields",id:"acars-object-fields",level:4},{value:"Rule Definitions",id:"rule-definitions",level:2},{value:"General Notes",id:"general-notes",level:4},{value:"Methods Available",id:"methods-available",level:2},{value:"log/debug/error/trace",id:"logdebugerrortrace",level:4},{value:"once",id:"once",level:5},{value:"ViolatedAfterDelay(name, timeout, callback)",id:"violatedafterdelayname-timeout-callback",level:4},{value:"Acars.Get(name) / Acars.Set(name, value)",id:"acarsgetname--acarssetname-value",level:4},{value:"Testing",id:"testing",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",h5:"h5",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["For users with Premium, you can create their own rules, in Javascript. See ",(0,i.jsx)(n.a,{href:"./packaging.mdx",children:"Custom Packaging"})," on how to create a distribution for your VA, which can include rules, sounds and callbacks."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"how-rules-work",children:"How Rules Work"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The rules are evaluated once every second"}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"meta"})," field is required"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"evaluate()"})," method is passed 3 peices of information:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"Pirep"})," object - this contains all of the data about the PIREP, along with some additional information"]}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"Acars"}),' object - contains current "sensor" information about the aircraft']}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"PreviousAcars"})," object - contains the previous sensor information"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"You can also store data from point in time for comparisons."}),"\n",(0,i.jsx)(n.h4,{id:"meta-object",children:"Meta Object"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"})," - A name is required for your rule. Somewhat descriptive is good"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"enabled"})," - ",(0,i.jsx)(n.code,{children:"true"})," or ",(0,i.jsx)(n.code,{children:"false"})," - whether this rule gets run or not (default: true)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"message"})," - When the rule is violated, this is the message put into the log"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"phases"})," - A list of phases in which this rule will run. If it's blank, that means all phases","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'"pushback"'}),"\n",(0,i.jsx)(n.li,{children:'"taxi out",'}),"\n",(0,i.jsx)(n.li,{children:'"takeoff"'}),"\n",(0,i.jsx)(n.li,{children:'"enroute",'}),"\n",(0,i.jsx)(n.li,{children:'"approach"'}),"\n",(0,i.jsx)(n.li,{children:'"final"'}),"\n",(0,i.jsx)(n.li,{children:'"landed"'}),"\n",(0,i.jsx)(n.li,{children:'"taxi in"'}),"\n",(0,i.jsx)(n.li,{children:'"on block"'}),"\n",(0,i.jsx)(n.li,{children:'"arrived"'}),"\n",(0,i.jsx)(n.li,{children:'"paused"'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"repeatable"})," - If this rule can be violated multiple times or not (default: false)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cooldown"})," - How much time, in seconds, between violations (default: 60)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"max_count"})," - If ",(0,i.jsx)(n.code,{children:"repeatable"}),", how many times can it be violated (default: 3)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Fields with a default value can be omitted."}),"\n",(0,i.jsx)(n.h4,{id:"pirep-object-fields",children:"PIREP Object Fields"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"acars-object-fields",children:"ACARS Object Fields"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "Id": "fefiaxrpbwf",\n  "Paused": false,\n  "Replay": false,\n  "Latitude": 30.19957,\n  "Longitude": -97.67124,\n  "Pitch": 0.1,\n  "Bank": 0,\n  "Heading": 0,\n  "HeadingMagnetic": 6,\n  "MagVar": 6.83,\n  "GroundAltitude": 0,\n  "PlaneAltitude": 549.72,\n  "GroundSpeed": 0,\n  "AirspeedIndicated": 0,\n  "AirspeedRedline": 0,\n  "VerticalSpeed": 0,\n  "VerticalSpeedDbl": 0,\n  "VerticalSpeedTouchdown": 0,\n  "UnlimitedFuel": false,\n  "FuelQuantity": 34923.32,\n  "TotalWeight": 148763.32,\n  "PayloadWeight": 0,\n  "ZeroFuelWeight": 113840,\n  "OnGround": true,\n  "ParkBrake": false,\n  "SimRate": 0,\n  "SimRateDbl": 1,\n  "SimGroundSpeed": 1,\n  "SlewActive": false,\n  "GearUp": false,\n  "OverspeedWarning": false,\n  "StallWarning": false,\n  "GForce": 0,\n  "GForceDbl": 0.9983974358974359,\n  "GForceTouchDown": 1.001602564102564,\n  "EngineType": 1,\n  "EngineCount": 2,\n  "EngineN2Percent": [\n    54.93,\n    54.93\n  ],\n  "EngineFuelFlow": [\n    763.75,\n    763.75\n  ],\n  "N1Percent": 0,\n  "Throttles": null,\n  "EngineRpm": 0,\n  "EngineMaxRpm": 0,\n  "ThrottlePct": 0,\n  "Engine1ThrottlePct": 0,\n  "Engine2ThrottlePct": 0,\n  "Engine3ThrottlePct": 0,\n  "Engine4ThrottlePct": 0,\n  "Flaps": 0,\n  "BeaconLights": false,\n  "NavigationLights": false,\n  "StrobeLights": false,\n  "LandingLights": false,\n  "LogoLight": true,\n  "TaxiLights": false,\n  "WingLights": true,\n  "TransponderCode": 1200,\n  "DateTime": "2024-03-18T00:21:07Z",\n  "DateTimeClient": "2024-03-17T23:21:47.1523743Z"\n}\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"rule-definitions",children:"Rule Definitions"}),"\n",(0,i.jsx)(n.p,{children:"A rule looks like:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:"title=rules/myrule.js",children:"/**\n * Rules are contained in a class. The class needs to be called Rule\n */\nexport default class MyRule {\n    /**\n     * This is required\n     * @type {{name: string, message: string, enabled: boolean, phases: string[]}}\n     */\n    meta = {\n        // A unique identifier\n        'name': 'Your Rule Name',\n\n        // Should this be run?\n        'enabled': true,\n\n        // This is the message that will show up in the log\n        'message': 'Your lights should have been on',\n\n        // The phases in which this rule should be run\n        'phases': ['takeoff', 'enroute'],\n    }\n\n    /**\n     * This is called to evaluate the rule. This should return the number of points\n     * that should be deducted\n     *\n     * @param {Object.<string, any>} pirep\n     * @param {Object.<string, any>} data\n     * @param {Object.<string, any>} previousData\n     *\n     * @returns {number}\n     */\n    evaluate(pirep, data, previousData) {\n        return 0\n    }\n}\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"meta"})," - This is required so ACARS knows some basic information about your script"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"evaluate"})," - Called with the current PIREP information, and the current ACARS data. This needs to return an integer value."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"general-notes",children:"General Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["There are no ",(0,i.jsx)(n.code,{children:"setTimeout"})," or ",(0,i.jsx)(n.code,{children:"async"}),"/",(0,i.jsx)(n.code,{children:"await"})," calls"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"methods-available",children:"Methods Available"}),"\n",(0,i.jsxs)(n.p,{children:["You can also browse the built-in methods available in the ",(0,i.jsx)(n.code,{children:"mocks.js"})," file. They're all accessed using the ",(0,i.jsx)(n.code,{children:"Acars"})," namespace, which is injected into the global namespace."]}),"\n",(0,i.jsx)(n.h4,{id:"logdebugerrortrace",children:"log/debug/error/trace"}),"\n",(0,i.jsxs)(n.p,{children:["On the ",(0,i.jsx)(n.code,{children:"console"})," object, only a few methods are available. This will log out to the ACARS log"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const some_var = 'x'\nconsole.log('This is some information', x)\nconsole.debug('This is a debug')\nconsole.error('...')\nconsole.trace('...')  // this will also show a stack trace\n"})}),"\n",(0,i.jsx)(n.h5,{id:"once",children:"once"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"console.once(key, ...args)"})," is available; since the rules run pretty high frequency."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"console.once(string key, ...arguments to log)\nconsole.log('pirep', pirep)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"key"})," parameter is used to determine if it's been logged out laready or not."]}),"\n",(0,i.jsx)(n.h4,{id:"violatedafterdelayname-timeout-callback",children:"ViolatedAfterDelay(name, timeout, callback)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"name: This is the name of the rule"}),"\n",(0,i.jsx)(n.li,{children:"timeout: In milliseconds, after how long it should be considered as violated"}),"\n",(0,i.jsx)(n.li,{children:"callback: The function that checks for the violation"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'return Acars.ViolatedAfterDelay("landing_lights_on", 5000, () => {\n  if (data.GroundAltitude > 10000 && data.LandingLights) {\n    return -10;\n  }\n\n  return 0;\n})\n'})}),"\n",(0,i.jsx)(n.h4,{id:"acarsgetname--acarssetname-value",children:"Acars.Get(name) / Acars.Set(name, value)"}),"\n",(0,i.jsx)(n.p,{children:"This can be used to store some data which will be persisted across crashes or stops/starts. This will be emptied on every new flight"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"name"}),": string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"value"}),": string. You can use JSON.stringify() to store objects, but I recommend only smaller items"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const some_obj = {\n  foo: 'bar'\n}\n\nAcars.Set('myobj', JSON.stringify(some_obj))\n\n// ...\nvar retrieved_obj = JSON.parse(Acars.Get('myobj'))\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,i.jsx)(n.p,{children:"What I do is create a tests folder, so it looks like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"rules/\n  tests/\n    lights.test.js  < will be created below\n  lights.js\n  package.json < will created below\nmanifest.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"package.json"})," file in the root of the ",(0,i.jsx)(n.code,{children:"rules"})," folder, so it looks like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "VA Rules",\n  "version": "1.0.0",\n  "author": "Your Name",\n  "type": "module",\n  "scripts": {\n    "tests": "tap"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Next, grab the ",(0,i.jsx)(n.code,{children:"mocks.js"})," file from here. This is used to mock the methods that ACARS provides, so that in the tests, there are faked versions available. If you cloned the sample repository, this file is already there."]}),"\n",(0,i.jsxs)(n.p,{children:["Then, install ",(0,i.jsx)(n.a,{href:"https://node-tap.org",children:"tap"})," using:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev tap\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Next, create a ",(0,i.jsx)(n.code,{children:"tests/lights.test.js"}),". The example shown above is the ",(0,i.jsx)(n.code,{children:"Rule"})," class that's being assumed to be used. The important parts are commented:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import t from 'tap'\nimport * as Lights from '../lights.js'\nimport {createMocks} from \"./mocks.js\"\n\nt.before(createMocks)\n\nt.test('Test the lights function', t => {\n    const rule = new Lights.Rule()\n    // You can pass the data that is only relevent to your rule here in the PIREP and Data objects\n    t.equal(rule.evaluate({}, {}), 0)\n    t.end()\n})\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"You can use webpack and babel to create a smaller distribution, which you can then create a packaged, minimized build, which then can be used by ACARS. So you're welcome to create your rules using Typescript and transpile them."})}),"\n",(0,i.jsx)(n.p,{children:"Then you can finally run your tests:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd rules\nnpm run tests\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can use ",(0,i.jsx)(n.a,{href:"https://node-tap.org/plugins/clock",children:"the clock plugin"})," to fast forward time - call your rule, advance the clock, call it again and check for violations"]})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var i=s(6540);const l={},t=i.createContext(l);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);