!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).CustomErrors={})}(this,(function(e){"use strict";class t extends Error{constructor(e){if(super(e),"function"==typeof Error.captureStackTrace)Error.captureStackTrace(this,this.constructor);else{const t=new Error(e);this.stack=t.stack}}}e.CustomError=t,e.createCustomError=e=>class extends t{constructor(t){super(t),this.name=e}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=custom-errors.umd.js.map
