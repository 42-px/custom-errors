class r extends Error{constructor(r){if(super(r),"function"==typeof Error.captureStackTrace)Error.captureStackTrace(this,this.constructor);else{const t=new Error(r);this.stack=t.stack}}}const t=t=>class extends r{constructor(r){super(r),this.name=t}};export{r as CustomError,t as createCustomError};
//# sourceMappingURL=index.js.map
