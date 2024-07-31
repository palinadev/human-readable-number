module.exports = function toReadable (number) {
    const readable = require('humanize-plus');
    const readableNum = humanize.compactInteger(number);
    return readableNum
}
