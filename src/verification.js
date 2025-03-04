function isGradientColor(color) {
    if ((typeof color) === 'object')
        return true;

    return false;
}

function regexData(data) {
    return String(data)
        .toLowerCase()
        .replace(/[^a-z]/g, '')
}

function checkCustomColor(color) {
    if (color.split(',').length > 1) {
        let temp = color;
        color = {};
        temp.split(',').forEach(e => {
            e = e.split(':');
            color[e[0]] = e[1];
        });
    }

    return color;
}

module.exports = { isGradientColor, regexData, checkCustomColor };
