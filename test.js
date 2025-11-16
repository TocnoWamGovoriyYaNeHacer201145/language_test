const fs = require('fs');
const vm = require('vm');

function openContentSafe(file) {
    const content = fs.readFileSync(file, 'utf8');
    const context = vm.createContext({});
    vm.runInContext(content, context);
}
