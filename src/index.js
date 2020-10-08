module.exports = function reverse(n) {
    n = n.toString();
    var str = '';
    for (var i = 0; i <= n.length; i++) {
        str = str + n.substr(n.length - i, 1);
    }
    return parseInt(str);
}
