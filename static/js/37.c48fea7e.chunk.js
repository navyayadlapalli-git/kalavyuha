(self.webpackChunkkalavyuha=self.webpackChunkkalavyuha||[]).push([[37],{37:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var r=n(5043),o=n(5865),a=n(7185),s=n(5173),c=n.n(s),i=n(579);const l=e=>{let{length:t=6,onComplete:n}=e;const[o,a]=(0,r.useState)(new Array(t).fill("")),s=(0,r.useRef)([]),c=e=>e.target.select();return(0,i.jsx)("div",{className:"otp-input-container",children:o.map(((e,r)=>(0,i.jsx)("input",{type:"text",maxLength:"1",value:o[r],onChange:e=>((e,r)=>{const c=e.target.value.replace(/[^0-9]/g,"");if(c){const e=[...o];e[r]=c,a(e),r<t-1&&s.current[r+1].focus(),e.every((e=>e.length>0))&&n&&n(e.join(""))}})(e,r),onKeyDown:e=>((e,t)=>{if("Backspace"===e.key){const e=[...o];e[t]="",a(e),t>0&&s.current[t-1].focus()}})(e,r),onFocus:c,ref:e=>s.current[r]=e,className:"otp-input"},r)))})};l.prototype={length:c().number,onComplete:c().func};const p=l,u=()=>(0,i.jsxs)("div",{className:"main-container",children:[(0,i.jsx)(o.A,{variant:"h5",color:"primary",sx:{fontWeight:"bold"},children:"Enter the Code"}),(0,i.jsxs)("div",{className:"otp-text",children:[(0,i.jsx)(o.A,{variant:"subtitle2",children:"Enter the OTP code that we sent to your phone number +91 **********"}),(0,i.jsx)(o.A,{variant:"subtitle2",children:"Be careful not to share the code with anyone."})]}),(0,i.jsx)("div",{className:"otp-button",children:(0,i.jsx)(p,{})}),(0,i.jsx)(a.A,{title:"Verify OTP",onClick:()=>console.log("call otp service")}),(0,i.jsx)("div",{className:"otp-text",children:(0,i.jsx)(o.A,{variant:"subtitle2",sx:{fontWeight:"bold"},children:"One more step to get started"})})]})},7185:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(9379),o=n(45),a=(n(5043),n(1906)),s=n(579);const c=["title","onClick","variant","color"],i=e=>{let{title:t,onClick:n,variant:i="contained",color:l="primary"}=e,p=(0,o.A)(e,c);return(0,s.jsx)(a.A,(0,r.A)((0,r.A)({variant:i,color:l,onClick:n},p),{},{sx:{backgroundColor:"#2C5B77",color:"#FFFFFF","&:hover":{backgroundColor:"#1E3F55"},borderRadius:"6px",textTransform:"none",fontWeight:"600",width:"45%",fontSize:"20px",padding:"0px"},children:t}))}},1497:(e,t,n)=>{"use strict";var r=n(3218);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,s){if(s!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},5173:(e,t,n)=>{e.exports=n(1497)()},3218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=37.c48fea7e.chunk.js.map