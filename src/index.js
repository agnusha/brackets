module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 === 1) return false;
    for (let i = 0; i < bracketsConfig.length;) {
        let curBracket = bracketsConfig[i].join('');
        if (!str.includes(curBracket))
            i++;
        else {
            str = str.replace(curBracket, '')
            i = 0;
        }
    }
    return str.length == 0;
}
