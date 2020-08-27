'use strict';

//const types = [{ type: "feat", section: "Features", hidden: false}, { type: "fix", section: "Bug Fixes", hidden: false}, { type: "chore", section: "Miscellaneous", hidden: false}];
const types = '[{"type":"feat","section":"Features","hidden":false},{"type":"fix","section":"Bug Fixes","hidden":false},{"type":"chore","section":"Miscellaneous","hidden":false}]';


// const stringed = JSON.stringify(types);

const jsoned = JSON.parse(types);

// console.log(stringed);
console.log(jsoned);


